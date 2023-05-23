import { Button, Grid, Typography } from '@mui/material'
import  playa from '../assets/videos/olga.gif'
import { Link } from 'react-router-dom'



const Portada = () => {
  return (
    <Grid
    sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width:'100vw',
        flexDirection:'row',
        backgroundColor:'background.main'
    }}
        > <Grid item xs={3} md={6}
        >
        <Typography variant='h2'
        sx={{
            padding:'10%'
        }}>Virginia Villalobos</Typography>
          <Link to='/portfolio'>
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
            <Grid item xs={8} md={6}
            sx={{
                    background: `url(${playa})`,
                    backgroundSize: 'cover',
                    position:'relative',
                    
                }}>
                    <Button sx={{
                        height:'100vh'
                    }}>
                        
                    </Button>
                
            
            </Grid>
           

        </Grid>
  )
}

export default Portada
