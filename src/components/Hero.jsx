import { Button, Card, CardMedia, Container, Grid, Typography } from '@mui/material'
import aboutimg from '../assets/images/verbena/verb22.jpg'
import portfolioimg from '../assets/images/moodstories/mood21.jpg'
import contactimg from '../assets/images/m2/m21.jpg'

import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
 
      <Grid container direction='row'  
      spacing={2}
       padding='10%' 
       justifyContent="center"
       alignItems="center"
       maxWidth='100vw'  
       >

        <Grid item xs={12} sm={4} justifyContent='center' 
        sx={{
        }}>
            <Link to='/about'>
            <Card sx={{
                aspectRatio: 1,
                borderRadius:0
            }}>
                <CardMedia
                component="img"
                loading="lazy"
                image={aboutimg}/>
            </Card> 
            </Link>
            <Typography variant='subtitle'
            sx={{
                color:'dark.main',
                
            }}>
                ABOUT
            </Typography>
           
        </Grid>
        <Grid item xs={12} sm={4}>
        <Link to='/portfolio'>
        <Card sx={{
                aspectRatio: 1,
                borderRadius:0
            }}>
                <CardMedia
                component="img"
                loading="lazy"
                image={portfolioimg}/>
            </Card>
            </Link>
            <Typography>
                PORTFOLIO
            </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
            <Link to='/contact'>
        <Card sx={{
                aspectRatio: 1,
                borderRadius:0
            }}>
                <CardMedia
                component="img"
                loading="lazy"
                image={contactimg}/>
            </Card>
            </Link>
            <Typography>
                CONTACT
            </Typography>
        </Grid>
      </Grid>

  )
}

export default Hero
