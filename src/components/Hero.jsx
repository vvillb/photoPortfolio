import { Card, CardMedia, Grid, Typography } from '@mui/material'
import aboutimg from '../assets/images/verbena/verb22.jpg'
import portfolioimg from '../assets/images/moodstories/mood21.jpg'
import contactimg from '../assets/images/m2/m21.jpg'

import React from 'react'

function Hero() {
  return (
    <Grid container direction='column' maxWidth='100vw' overflow='hidden'>
      <Grid item maxWidth='100vw'>
        <Typography variant='h1'>Virginia Villalobos</Typography>
      </Grid>
      <Grid container direction='row' spacing={2} padding='10%' maxWidth='100vw'>

        <Grid item xs={12} sm={4}>
            <Card sx={{
                aspectRatio: 1,
                borderRadius:0
            }}>
                <CardMedia
                component="img"
                loading="lazy"
                image={aboutimg}/>
            </Card>
            <Typography>
                About
            </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Card sx={{
                aspectRatio: 1,
                borderRadius:0
            }}>
                <CardMedia
                component="img"
                loading="lazy"
                image={portfolioimg}/>
            </Card>
            <Typography>
                Portfolio
            </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Card sx={{
                aspectRatio: 1,
                borderRadius:0
            }}>
                <CardMedia
                component="img"
                loading="lazy"
                image={contactimg}/>
            </Card>
            <Typography>
                Contact
            </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Hero
