import './App.css';
import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Forum from './pages/Forum';
import TopicDetails from './components/TopicDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/forum/details" element={<TopicDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
