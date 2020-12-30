import React, { useState } from "react";
import './App.css';


import "bootstrap/dist/css/bootstrap.min.css"

import { BrowserRouter as Router, Switch,Route,Link} from "react-router-dom"

import {ToastContainer} from "react-toastify"

import "react-toastify/dist/ReactToastify.min.css"

//firebase

import firebase from "firebase/app"
import "firebase/auth"

//Components

import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"

import PageNotFounf from "./pages/PageNotFounf"
import { UserContext } from "./context/UserContext";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import firebaseconfig from "./Config/firebaseconfig"
//int firebase
firebase.initializeApp(firebaseconfig);
const  App =() => {

  const [user,setUser]=useState(null)
  return (
    <Router>
    <ToastContainer/>
    <UserContext.Provider value={{user,setUser}}>
    <Header/>
    <Switch>
    <Route  exact  path="/"  component={Home}/>
    <Route  exact  path="/signin"  component={Signin}/>
    <Route  exact  path="/signup"  component={Signup}/>
    <Route  exact  path="*"  component={PageNotFounf}/>
    </Switch>
    <Footer/>
    </UserContext.Provider>
    
    </Router>
  );
}

export default App;
