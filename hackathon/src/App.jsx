import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TableRonde from './pages/TableRonde';
import Profile from './pages/Profile';
import Chat from './pages/Chat';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/tableRonde" element={<TableRonde />} />
          <Route path='/profile' element={<Profile />} />
          <Route path="/profile/chat" element={<Chat />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
