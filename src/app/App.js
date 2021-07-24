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
import HomePage from "../pagesIdrunk/homePage/HomePage";
import Subscribe from "../pagesIdrunk/subscribe/Subscribe";
import Login from "../pagesIdrunk/login/Login";
import Locaties from "../pagesIdrunk/locaties/Locaties";
import StorkContactPage from "../pagesStork/storkContactPage/StorkContactPage";
import StorkHomePage from "../pagesStork/storkHomePage/StorkHomePage";
import Blog from "../pagesIdrunk/blog/Blog";
import Socials from "../pagesIdrunk/socials/Socials";
import ContactPaginaIdrunk from "../pagesIdrunk/contactPageIdrunk/ContactPaginaIdrunk";
import StorkReserveren from "../pagesStork/storkReserveren/StorkReserveren";
import Order from "../pagesStork/order/Order";
import Profile from "../pagesStork/ProfielPagina/Profile";
import Input from "../components/input/Input";
import AdminPage from "../pagesStork/ProfielPagina/AdminPage";

function App() {
  return (

      <>
          <Header/>
                <div className={"container1"}>
                    <Aside/>

                            <Switch>
                                <Route path="/profile">
                                    <Profile/>
                                </Route>


                                <Route path="/adminpage">
                                    <AdminPage/>
                                </Route>

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
      </>

  );
}
export default App;
