import React, { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Create from './Pages/Create' 
import "./App.css";

/**
 * ?  =====Import Components=====
 */
import Home from "./Pages/Home";
import {AuthContext,firebaseContext} from "./store/FirebaseContext";

function App() {
  const {user,setUser} = useContext(AuthContext)
  const {firebase} = useContext(firebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/signup"} element={<Signup />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/create" element={<Create />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
