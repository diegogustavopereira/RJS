import './App.css';
<<<<<<< HEAD
import Home from './pages/home/home';
=======
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
>>>>>>> 33bf7711d5c58a1fa1d78e4fac730b7db6a940cd

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Home/>
=======
      <Routes>
        <Route path="/login" element={ <Login /> } />
        <Route path="/cadastro" element={ <Register /> } />
      </Routes>
>>>>>>> 33bf7711d5c58a1fa1d78e4fac730b7db6a940cd
    </div>
  );
}

export default App;
