import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar'

import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import NewsContainer from './components/News/NewsContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import PhotosContainer from './components/Photos/PhotosContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {

return (
  <BrowserRouter> 
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />               
      <div className='app-wrapper-content'>                    

        <Route  path="/dialogs" render={ ()=> <DialogsContainer />}/>

        <Route  path ="/profile/:userId?" render={ ()=> <ProfileContainer />}/>

        <Route  path ="/news" render={ ()=> <NewsContainer />}/>

        <Route  path ='/users' render={ ()=> <UsersContainer />}/>

        {/* <Route  path ='/photos' render={ ()=> <PhotosContainer />}/> */}


      </div>               
    </div>
  </BrowserRouter>
)}

export default App
