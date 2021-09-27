import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './layout/Layout';
import StreamList from './stream/StreamList';
import MultiViewIndex from './multiView';
import useTracking from './hooks/useTracking';

const theme = window.localStorage.getItem('theme');
if (theme === 'dark') {
  document.documentElement.classList.add('dark');
}

function App() {
  useTracking();

  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={StreamList}></Route>
          <Route path="/multi-view" exact component={MultiViewIndex}></Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
