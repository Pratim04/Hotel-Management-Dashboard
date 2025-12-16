import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import Performance from "./pages/Performance";
import News from "./pages/News";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/news" element={<News/>} />
          <Route path="/transactions" element={<Transactions/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/support" element={<Support/>} />
          <Route path="/performance" element={<Performance/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;