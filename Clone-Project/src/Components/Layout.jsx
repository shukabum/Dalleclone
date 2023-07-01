import * as React from 'react';
import {Box} from '@mui/material'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom';
import Home from './Home';
const Layout = () => {
  return (
    <>
    <Box 
    >
        <Navbar/>
    </Box>
    <Box>
    <Outlet/>
    </Box>
    

    
    </>
  )
}

export default Layout