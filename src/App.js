import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './pages/home/home';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/login" element={ <Login /> } />
        <Route path="/cadastro" element={ <Register /> } />
        <Route path='/' element={ <Home /> } />
      </Routes>
    </div>
  );
}

export default App;
