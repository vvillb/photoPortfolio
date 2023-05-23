import Layout from '../../layout/LAyout'
import { useEffect } from 'react'
import { Card, CardMedia, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import verbena from '../../assets/images/verbena/verb2.jpg'
import moodstories from '../../assets/images/moodstories/mood11.jpg'
import celiab from '../../assets/images/celiab/celia3.jpg'
import cosmiel from '../../assets/images/cosmiel/cos1.jpg'
import parole from '../../assets/images/parole/parole10.jpg'
import flaman from '../../assets/images/flaman/flaman2.jpg'



function Brands() {
    useEffect(()=>{
        window.scrollTo(0,0);
      
      },[])

  return (
    <Layout>
     <Grid container direction='row'  display='flex'
      spacing={2}
       padding='10%' 
       justifyContent="center"
       alignItems="center"
       minWidth='100vw'  
       minHeight='100vh'
       
       sx={{
backgroundColor:'background.main'
       }}
       >

        <Grid item xs={12} sm={6} lg={4} 
        sx={{
        }}>
            <Link to='/verbena'>
            <Card sx={{
                aspectRatio: 1,
                borderRadius:0,
                maxHeight:'50vh'
            }}>
                <CardMedia
                component="img"
                loading="lazy"
                image={verbena}/>
            </Card> 
            </Link>
            <Typography variant='subtitle'
            sx={{
                color:'dark.main',
                
            }}>
                VERBENA MADRID 
            </Typography>
           
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
        <Link to='/moodstories'>
        <Card sx={{
                aspectRatio: 1,
                borderRadius:0,
                maxHeight:'50vh'
            }}>
                <CardMedia
                component="img"
                loading="lazy"
                image={moodstories}/>
            </Card>
            </Link>
            <Typography>
                MOODSTORIES
            </Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
            <Link to='/celiab'>
        <Card sx={{
                aspectRatio: 1,
                borderRadius:0,
                maxHeight:'50vh'
            }}>
                <CardMedia
                component="img"
                loading="lazy"
                image={celiab}/>
            </Card>
            </Link>
            <Typography>
                CELIAB DESIGNER
            </Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
            <Link to='/cosmiel'>
        <Card sx={{
                aspectRatio: 1,
                borderRadius:0,
                maxHeight:'50vh'
            }}>
                <CardMedia
                component="img"
                loading="lazy"
                image={cosmiel}/>
            </Card>
            </Link>
            <Typography>
                COSMIEL
            </Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
            <Link to='/parole'>
        <Card sx={{
                aspectRatio: 1,
                borderRadius:0,
                maxHeight:'50vh'
            }}>
                <CardMedia
                component="img"
                loading="lazy"
                image={parole}/>
            </Card>
            </Link>
            <Typography>
                PAROLE ITALY
            </Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
            <Link to='/flaman'>
        <Card sx={{
                aspectRatio: 1,
                borderRadius:0,
                maxHeight:'50vh'
            }}>
                <CardMedia
                component="img"
                loading="lazy"
                image={flaman}/>
            </Card>
            </Link>
            <Typography>
                FLAMAN ATELIER
            </Typography>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Brands
