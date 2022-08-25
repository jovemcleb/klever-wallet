import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';

function App() {
  console.log('App');
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
