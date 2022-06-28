
//import FormValidation from './components/FormValidation';

import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar1 from './components/Navbar1';
import Navbar2 from './components/Navbar2';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import Contents from './components/Contents';

function App() {
  return (
    <div>
        <Header />
        <Navbar1 />
        <Navbar2 />
        <SidebarLeft />
        <SidebarRight />
        <Contents />
        <Footer />

    </div>    

  );
}

export default App;
