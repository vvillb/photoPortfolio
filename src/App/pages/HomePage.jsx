
import Layout from '../../layout/LAyout'
import {  Grid } from '@mui/material'
import Hero from '../../components/Hero'

import Portada from '../../components/Portada'

const HomePage = () => {
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
