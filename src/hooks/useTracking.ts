import { useEffect } from 'react';
import { createHashHistory } from 'history';
import ReactGA from 'react-ga4';

const useTracking = () => {
  useEffect(() => {
    const history = createHashHistory();
    ReactGA.initialize('G-GXRJTSMZXY');

    let unlisten = history.listen((location) => {
      ReactGA.send({ hitType: 'pageview', page: location });
    });

    return () => unlisten();
  }, []);
};

export default useTracking;
