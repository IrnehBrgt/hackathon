import Homepage from './pages/Homepage';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TableRonde from './pages/TableRonde';
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Forum from './pages/Forum';
import TopicDetails from './components/TopicDetails';
import Profile from './pages/Profile';
>>>>>>> e912d230442a305883eb4221d201f9a885ec83ff

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<Homepage />} />
          <Route path="/tableRonde" element={<TableRonde />} />
=======
          <Route path='/' element={<Homepage />} />
          <Route path='/forum' element={<Forum />} />
          <Route path='/forum/details' element={<TopicDetails />} />
          <Route path='/profile' element={<Profile />} />
>>>>>>> e912d230442a305883eb4221d201f9a885ec83ff
        </Routes>
      </div>
    </Router>
  );
}

export default App;
