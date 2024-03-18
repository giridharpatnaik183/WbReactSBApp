// App.js
import React, { useState } from 'react';
import Login from './components/Login Page/Login';
import {Routes,Route} from "react-router-dom";
import Home from './components/Home';
import VendorList from './components/Vendor Page/Vendor';
import Admin from './components/Admin Page/Admin';
import CreateUser from './components/Admin Page/CreateUser'

const App = () => {

    return (
        <div>
            <Routes>
                <Route path='/' element ={<Login/>}/>  
                <Route path='/home' element ={<Home/>}/>
                <Route path='/vendor' element ={<VendorList/>}/>
                <Route path='/Admin' element ={<Admin/>} />
                <Route path='/Admin' element ={<CreateUser/>} />
            </Routes>
        
        </div>
    );
};

export default App;
