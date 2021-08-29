import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import StreamList from './stream/StreamList';
import MultiViewIndex from './multiView';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
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
