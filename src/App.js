import StreamList from './stream/StreamList';
import Layout from './layout/Layout';

function App() {
  return (
    <Layout>
      <div className="p-4 min-h-screen bg-gray-100">
        <StreamList />
      </div>
    </Layout>
  );
}

export default App;
