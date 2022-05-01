
import './App.css';
import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard';
import SendCoin from './pages/sendCoin/SendCoin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/dashboard' element={<Dashboard />} />
        <Route exact path='/sendCoin' element={<SendCoin/>} />
      </Routes>
    </Router>
  );
}

export default App;
