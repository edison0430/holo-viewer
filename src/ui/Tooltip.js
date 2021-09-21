import { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';

const isMobile = (function () {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
})();

const Tooltip = ({ title, parentNode }) => {
  const tooltipRef = useRef();
  const [placement, setPlacement] = useState('-translate-x-1/2');
  const [coords, setCoords] = useState({});

  useEffect(() => {
    const rect = parentNode.current.getBoundingClientRect();
    setCoords({
      left: rect.x + rect.width / 2,
      top: rect.y + rect.height,
    });
  }, [parentNode]);

  useEffect(() => {
    // 檢查 tooltip 長度，避免 tooltip 超出螢幕兩測
    const rect = tooltipRef.current.getBoundingClientRect();
    if (coords.left + rect.width / 2 > window.innerWidth) {
      setPlacement('-translate-x-full');
    } else if (coords.left - rect.width / 2 < 0) {
      setPlacement('');
    }
  }, [coords.left]);

  return ReactDOM.createPortal(
    <>
      <div
        className={`absolute -top-full -left-full bg-gray-700 text-white text-sm px-3 py-2 rounded-md translate-y-4 ${placement} w-1/2 max-w-max ${
          isMobile && 'opacity-0'
        }`}
        style={{ ...coords }}
        ref={tooltipRef}
      >
        {title}
      </div>
    </>,
    document.querySelector('#tooltip')
  );
};

export default Tooltip;
