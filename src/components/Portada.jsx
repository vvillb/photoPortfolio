import { Grid, Typography } from '@mui/material'
import  playa from '../assets/videos/olga.gif'



const Portada = () => {
  return (
    <Grid
    sx={{
    height: '100vh',
        background: `url(${playa})`,
        backgroundSize: 'fit',
        position:'relative',
        backgroundPosition: 'right',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth:'100vw',
        flexDirection:'column'
    }}
        >
            <Grid item minWidth='100vw'>
                <Typography variant='h2'>Virginia Villalobos</Typography>
            </Grid>

        </Grid>
  )
}

export default Portada
