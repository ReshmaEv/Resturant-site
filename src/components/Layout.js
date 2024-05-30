import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navbar';
import { Outlet } from 'react-router-dom';


function Layout() {
  return (
    <div>
        <Navigation/>
        <Outlet/>

    </div>
  )
}

export default Layout