import { Button, Card, CardMedia, Grid, Link, Typography } from '@mui/material'
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import  playa from '../assets/videos/olga.gif'



const Portada = () => {
  return (
    <Grid container
    sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width:'100vw',
        flexDirection:'row',
        backgroundColor:'background.main'
    }}
        > <Grid item xs={12} md={6}
        sx={{
            paddingBottom:'10%'
        }}
        >
        <Typography variant='h2'
        sx={{
            
            padding:'10%'
        }}>Virginia Villalobos</Typography>
          <Link component={RouterLink} to='/portfolio' underline="none"
            >
        <Button
        sx={{
            color:'primary.darker',
            backgroundColor:'primary.main',
            marginTop:'10%',
            marginLeft:'10%',
            padding:'1%',
            boxShadow:'0px 10px 10px rgba(0, 0, 0, 0.2)',
            ':hover':{
                color:'dark.main',
                backgroundColor:'primary.darker'
               
            }
        }}>
            <b>view portfolio</b>
        </Button></Link>
        </Grid>
        
            <Grid item xs={12} md={6}
            sx={{
                display: { xs: 'none', md: 'flex' } 
                }}>
                    <Card sx={{
           
                borderRadius:0,
                
            }}>
                <CardMedia
                component="img"
                loading="lazy"
                image={playa}/>
            </Card>
                
            
            </Grid>
           

        </Grid>
  )
}

export default Portada
