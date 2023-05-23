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
            padding:'10%',
            ':hover':{
                color:'dark.main',
               
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
                
            {/* <Card sx={{
               
                borderRadius:0,
                maxHeight:'50vh'
            }}>
                <CardMedia
                component="img"
                loading="lazy"
                image={playa}/>
            </Card>  */}
            </Grid>
           

        </Grid>
  )
}

export default Portada
