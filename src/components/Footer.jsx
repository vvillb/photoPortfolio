import { Link } from 'react-router-dom';
import { Grid } from '@mui/material'
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
          <InstagramIcon
          color="inherit"
          aria-label="instagram"/>
        </Link>
      </Grid>
      <Grid item>
        <Link to='mailto:virginiavt98@gmail.com'>
          <MailOutlineIcon
          color="inherit"
          aria-label="mail"/>
        </Link>
      </Grid>
    </Grid>
  )
}

export default Footer
