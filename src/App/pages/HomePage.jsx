import React from 'react'
import Layout from '../../layout/LAyout'
import { Grid } from '@mui/material'

const HomePage = () => {
  return (
    <Layout>
    <Grid container
    sx={{
      backgroundColor:'background.main'
    }}>
      <Grid item>
        <h1>Home</h1>
      </Grid>
      
    </Grid>
    </Layout>
  )
}

export default HomePage
