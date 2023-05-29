import { Box, Toolbar } from '@mui/material'
import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = ({children}) => {
  return (
    <Box>
      <NavBar/>
      <Box
        component='main'
        sx={{ flexGrow: 1 , maxWidth:'100vw', justifyContent:'center'}}
     >
        <Toolbar/>
        {children}
      </Box>
        
      <Footer/> 
    </Box>
  )
}

export default Layout
