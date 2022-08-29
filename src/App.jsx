import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import AddToken from './pages/addToken/addToken';
import EditToken from './pages/editToken/editToken';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route exact path="/add-token" element={<AddToken />} />
      <Route exact path="/edit-token" element={<EditToken />} />
    </Routes>
  );
}

export default App;
