import logo from './logo.svg';
import React, {useState} from "react";
import {set, useForm} from "react-hook-form";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, NavLink,
}

from 'react-router-dom';
import './App.css';
import Header from "./components/header/header";
import Footer from "./components/footer/Footer";
import Main from "./components/Main";
import Aside from "./components/Aside";
import HomePage from "./pagesIdrunk/HomePage";
import Subscribe from "./pagesIdrunk/subscribe/Subscribe";
import Login from "./pagesIdrunk/Login/Login";
import Locaties from "./pagesIdrunk/Locaties";
import StorkContactPage from "./pagesStork/StorkContactPage";
import StorkHomePage from "./pagesStork/StorkHomePage";

import Input from "./components/input/Input";
import Blog from "./pagesIdrunk/blog/Blog";
import Socials from "./pagesIdrunk/Socials";
import ContactPaginaIdrunk from "./pagesIdrunk/ContactPaginaIdrunk";

function App() {
  return (

      <Router>
          <Header/>
                <div className={"container1"}>
                    <Aside/>

                            <Switch>
                                <Route path="/contact">
                                    <ContactPaginaIdrunk/>
                                </Route>


                                <Route path="/socials">
                                    <Socials/>
                                </Route>

                                <Route path="/blog">
                                    <Blog/>
                                </Route>

                                <Route path="/storkhomepage">
                                    <StorkHomePage/>
                                </Route>

                                <Route path="/storkcontactpage">
                                    <StorkContactPage/>
                                </Route>

                                <Route path="/locaties">
                                    <Locaties/>
                                </Route>

                                <Route path="/login">
                                    <Login/>
                                </Route>

                                <Route path="/subscribe">
                                    <Subscribe/>
                                </Route>

                                <Route path="/">
                                    <HomePage/>
                                </Route>

                            </Switch>

                </div>
            <Footer/>
      </Router>

  );
}
export default App;
