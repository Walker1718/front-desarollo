import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Layout from './components/Layout';
import NotFound from './components/pages/NotFound';
import Medicamento from './components/pages/Medicamento';
import Farmacia from './components/pages/Farmacia';
import CentroDist from './components/pages/CentroDist';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/medicamento" element={<Medicamento />} />
          <Route path="/farmacia" element={<Farmacia />} />
          <Route path="/centro-distribucion" element={<CentroDist />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
