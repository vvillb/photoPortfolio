import React from 'react'
import Layout from '../../layout/LAyout'
import { Card, CardMedia, Grid, Typography } from '@mui/material'
import Hero from '../../components/Hero'
import gif from '../../assets/videos/olga.gif'

const HomePage = () => {
  return (
    <Layout>
     
    <Grid container
    sx={{
      // backgroundColor:'transparent',
      // position:'relative',
      
    
    }}>
    <Grid item padding='5%'>
    <Typography variant='h2'>Virginia Villalobos</Typography>
    </Grid>
  <Grid item >
    <Hero />
  </Grid>
 
    </Grid>
    </Layout>
  )
}

export default HomePage
