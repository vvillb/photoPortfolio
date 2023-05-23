import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from '../../layout/LAyout'
import { Button, Grid, Typography } from '@mui/material'
import playa from '../../assets/images/moodstories/mood6.jpg'


function About() {
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
            Age: 
              <Button
              sx={{
                color:'dark.main',
                ':hover':{color:'primary.darker'}
              }}
              ><b>25 yrs old</b></Button>
              
          </Typography>
         
          
          <Typography variant='h4'>
            Origin:
              <Button
              sx={{
                color:'dark.main',
                ':hover':{color:'primary.darker'}
              }}
              ><b>Venezuela/España</b></Button>
              
          </Typography>
          <Typography variant='h4'>
            Work experience:
              <Button
              sx={{
                color:'dark.main',
                ':hover':{color:'primary.darker'}
              }}
              ><b>4+ yrs</b></Button>
              
          </Typography>
          <Typography variant='h4'>
            Languages:
              <Button
              sx={{
                color:'dark.main',
                ':hover':{color:'primary.darker'}
              }}
              ><b>Spanish-English</b></Button>
              
          </Typography>
          <Typography variant='h4'>
            Currently based in:
              <Button
              sx={{
                color:'dark.main',
                ':hover':{color:'primary.darker'}
              }}
              ><b>Spain</b></Button>
              
          </Typography>
          <Link to='/portfolio'>
        <Button
        sx={{
            color:'primary.darker',
            backgroundColor:'primary.main',
            marginTop:'10%',
            padding:'4%',
            boxShadow:'0px 10px 10px rgba(0, 0, 0, 0.2)',
            ':hover':{
                color:'dark.main',
                backgroundColor:'primary.darker'
               
            }
        }}>
            <b>view portfolio</b>
        </Button></Link>
        </Grid>
       
      </Grid>
    </Layout>
  )
}

export default About
