import { useEffect } from 'react';
import { createHashHistory } from 'history';
import ReactGA from 'react-ga';

const useTracking = () => {
  useEffect(() => {
    const history = createHashHistory();
    ReactGA.initialize('UA-154394704-1');

    let unlisten = history.listen((location) => {
      ReactGA.pageview(location.pathname);
    });

    return () => unlisten();
  }, []);
};

export default useTracking;
