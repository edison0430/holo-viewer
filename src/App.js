import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './routes/Home';
import MultiView from './routes/MultiView';
import Layout from './layout/Layout';
// import MultiViewIndex from './multiView';
import useTracking from './hooks/useTracking';

function App() {
  useTracking();

  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/multi-view" exact component={MultiView}></Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
