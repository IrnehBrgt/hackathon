import './App.css';
import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TableRonde from './pages/TableRonde';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/tableRonde" element={<TableRonde />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
