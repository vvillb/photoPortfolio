import React from 'react'
import Layout from '../../layout/LAyout'
import { Grid } from '@mui/material'
import Hero from '../../components/Hero'

const HomePage = () => {
  return (
    <Layout>
    <Grid container
    sx={{
      backgroundColor:'background.main'
    }}>
      <Grid item>
        <Hero/>
      </Grid>
      
    </Grid>
    </Layout>
  )
}

export default HomePage
