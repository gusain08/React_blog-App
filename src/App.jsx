import React, { useState } from 'react'
import { BrowserRouter as Router , Routes , Route , Link } from 'react-router-dom';
import Home from './componts/Home'
import Login from './componts/Login'
import CreatePost from './componts/CreatePost'
import Header from './componts/Header';
import { signOut } from "firebase/auth"
import { auth } from "./firebase-config";
import "./App.css"
const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const singUserout = ()=>{
    signOut(auth).then(()=>{
        localStorage.clear();
        setIsAuth(false);
        window.location.pathname =  '/login';
    })
  }
  return (
    <>
    <Router>
      <nav>
      <Link to={'/'}>Home</Link>
      <Link to={'/createpost'}>Create Post </Link>
      {
        !isAuth ? <Link to={'/login'}>Login</Link>:<button onClick={singUserout}>Logout</button>
      } 
      </nav>
     <Routes>
        <Route path='/' element={<Home isAuth={setIsAuth}/>}/>
        <Route path='/createpost' element={<CreatePost isAuth={setIsAuth}/>}/>
        <Route path='/login' element={<Login setIsAuth = {setIsAuth}/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App