import News from "./pages/News";
import Support from "./pages/Support";
import "../src/styles/_variables.scss";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./Layout/MainLayout";
import Performance from "./pages/Performance";
import Transactions from "./pages/Transactions";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route element={<MainLayout />} > 
            <Route path="/news" element={<News />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/support" element={<Support />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/transactions" element={<Transactions />} />
          </Route> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;