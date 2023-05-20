import { Link } from 'react-router-dom';
import { Button, Grid } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


const Footer = () => {
  return (
    <Grid container
    direction="row"
    justifyContent="space-evenly"
    alignItems="center"
    sx={{
          backgroundColor:'background.main'
    }}>
      <Grid item
      sx={{
        

      }}>
        <Link to='https://www.instagram.com/v.villb/'>
        <Button
            sx={{
              ':hover':{
                color:'dark.main'
              }
            }}>
          <InstagramIcon
          color="inherit"
          aria-label="instagram"/>
          </Button>
        </Link>
      </Grid>
      <Grid item>        
        <Link to='mailto:virginiavt98@gmail.com'>
          <Button
            sx={{
              ':hover':{
                color:'dark.main'
              }
            }}>
            <MailOutlineIcon
            color="inherit"
            aria-label="mail"/>
          </Button>
          
        </Link>
      </Grid>
    </Grid>
  )
}

export default Footer
