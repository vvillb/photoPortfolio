import Layout from '../../layout/Layout'
import { useEffect } from 'react'
import { Card, CardMedia, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import editorialsimg from '../../assets/images/m2/m22.jpg'
import beautyimg from '../../assets/images/sarazalop/sara2.jpg'
import portraitsimg from '../../assets/images/alba/alba10.jpeg'
import brandsimg from '../../assets/images/verbena/verb15.jpg'




function Portfolio() {

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
        backgroundColor:'background.main',

       }}
       >

        <Grid item xs={12} sm={6} lg={3} 
        sx={{
            alignItems:"center",
                 }}>
            <Link to='/editorials'>
            <Card sx={{
                aspectRatio: 1,
                borderRadius:0,
                maxHeight:'50vh'
            }}>
                <CardMedia
                component="img"
                loading="lazy"
                image={editorialsimg}/>
            </Card> 
            </Link>
            <Typography variant='subtitle'
            sx={{
                color:'dark.main',
                
            }}>
                EDITORIALS
            </Typography>
           
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
        <Link to='/beauty'>
        <Card sx={{
                aspectRatio: 1,
                borderRadius:0,
                maxHeight:'50vh'
            }}>
                <CardMedia
                component="img"
                loading="lazy"
                image={beautyimg}/>
            </Card>
            </Link>
            <Typography>
                BEAUTY
            </Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
            <Link to='/portraits'>
        <Card sx={{
                aspectRatio: 1,
                borderRadius:0,
                maxHeight:'50vh'
            }}>
                <CardMedia
                component="img"
                loading="lazy"
                image={portraitsimg}/>
            </Card>
            </Link>
            <Typography>
                PORTRAITS
            </Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
            <Link to='/brands'>
        <Card sx={{
                aspectRatio: 1,
                borderRadius:0,
                maxHeight:'50vh'
            }}>
                <CardMedia
                component="img"
                loading="lazy"
                image={brandsimg}/>
            </Card>
            </Link>
            <Typography>
                BRANDS
            </Typography>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Portfolio
