
import Layout from '../../layout/LAyout'
import { useEffect } from 'react'
import {  Grid } from '@mui/material'
import Hero from '../../components/Hero'

import Portada from '../../components/Portada'


const HomePage = () => {

  useEffect(()=>{
    window.scrollTo(0,0);
  
  },[])

  return (
    <Layout>
     
    <Grid container
    sx={{
    
    }}>
   
    <Portada/>
  <Grid item >
    <Hero />
  </Grid>
 
    </Grid>
    </Layout>
  )
}

export default HomePage
