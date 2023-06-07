
import Layout from '../../layout/Layout'
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
  <Grid item width='100vw'>
    <Hero />
  </Grid>
 
    </Grid>
    </Layout>
  )
}

export default HomePage
