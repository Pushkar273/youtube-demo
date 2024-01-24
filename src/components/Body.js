import React from 'react'
import { Outlet } from 'react-router-dom';
// import Sidebar from './Sidebar';

function Body() {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default Body;