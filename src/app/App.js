import logo from '../assets/logo.svg';
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
import Header from "../components/header/header";
import Footer from "../components/footer/Footer";
import Main from "../components/Main";
import Aside from "../components/aside/Aside";
import HomePage from "../pagesIdrunk/HomePage";
import Subscribe from "../pagesIdrunk/subscribe/Subscribe";
import Login from "../pagesIdrunk/login/Login";
import Locaties from "../pagesIdrunk/locaties/Locaties";
import StorkContactPage from "../pagesStork/StorkContactPage/StorkContactPage";
import StorkHomePage from "../pagesStork/storkHomePage/StorkHomePage";
import Input from "../components/input/Input";
import Blog from "../pagesIdrunk/blog/Blog";
import Socials from "../pagesIdrunk/socials/Socials";
import ContactPaginaIdrunk from "../pagesIdrunk/contactPageIdrunk/ContactPaginaIdrunk";
import StorkReserveren from "../pagesStork/storkReserveren/StorkReserveren";
import Order from "../pagesStork/Order";

function App() {
  return (

      <Router>
          <Header/>
                <div className={"container1"}>
                    <Aside/>

                            <Switch>
                                <Route path="/stork/order">
                                    <Order/>
                                </Route>

                                <Route path="/stork/reserveren">
                                    <StorkReserveren/>
                                </Route>

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
