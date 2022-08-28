import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import AddToken from './pages/addtoken/addToken';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route exact path="/add-token" element={<AddToken />} />
    </Routes>
  );
}

export default App;
