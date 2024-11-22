import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navb from './Components/Navb';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Profile from './Components/Profile';
import ProductList from './Components/ProductList';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { current } from './redux/Actions/UserActions';
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartList from './Components/CartList';

function App() {
  const [search, setSearch] = useState(''); // État pour la recherche
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      dispatch(current());
    }
  }, [token, dispatch]);

  return (
    <div className="App">
      {/* Transmettez l'état de recherche à Navb */}
      <Navb search={search} setSearch={setSearch} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/ProductsList' element={<ProductList search={search} />} />
        <Route path='/cart' element={<CartList />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
}

export default App;
