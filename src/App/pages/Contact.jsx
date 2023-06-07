import Layout from '../../layout/Layout'
import { useEffect } from 'react'
import { Button, Grid, Link, Typography } from '@mui/material'
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import playa from  '../../assets/images/alba/alba5copy.jpg'


function Contact() {

  useEffect(()=>{
    window.scrollTo(0,0);
  
  },[])

  return (
    <Layout>
      <Grid container
      sx={{
        background: `url(${playa})`,
        backgroundSize:'cover',       
          height: '125vh',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'top',
          width:'100vw',
          flexDirection:'row',
         
      }}>
        <Grid item 
        sx={{
          color: 'dark.main',
          padding:'5%',
          
        }}>
          
          <Typography variant='h4' 
          
            >
            email: <Link component={RouterLink} to='mailto:virginiavt98@gmail.com' underline="none"
>
              <Button
              sx={{
                ':hover':{color:'dark.main'}
              }}
              ><b>virginiavt98@gmail.com</b></Button>
              </Link>
          </Typography>
         
          
          <Typography variant='h4'>
            instagram: <Link component={RouterLink} to='https://www.instagram.com/v.villb/' underline="none"
>
              <Button
              sx={{
                ':hover':{color:'dark.main'}
              }}
              ><b>@v.villb</b></Button>
              </Link>
          </Typography>
          
        </Grid>
       
      </Grid>
    </Layout>
  )
}

export default Contact
