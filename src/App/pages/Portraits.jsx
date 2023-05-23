import Layout from '../../layout/LAyout'
import { useEffect } from 'react'
import { Grid, ImageList, ImageListItem, Typography } from '@mui/material'
import portrait1 from '../../assets/images/alba/alba1.jpeg'
import portrait2 from '../../assets/images/alba/alba2.jpg'
import portrait3 from '../../assets/images/alba/alba8.jpg'
import portrait4 from '../../assets/images/alba/alba6.jpg'
import portrait5 from '../../assets/images/alba/alba4.jpg'
import portrait6 from '../../assets/images/alba/alba10.jpeg'

 

const itemData=[
  {
  img:portrait1,
  title:'albaGarcia',
  author:' alba garcía'
  },
  {
  img:portrait4,
  title:'albaGarcia',
  },
  {
  img:portrait3,
  title:'albaGarcia',
  },
  {
  img:portrait2,
  title:'albaGarcia',
  },
  {
  img:portrait5,
  title:'albaGarcia',
  },
  {
  img:portrait6,
  title:'albaGarcia',
  }
]
function Portraits() {

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
      <Grid item
      sx={{
        justifyContent:'right'
      }}>
        <Typography variant='h1' >
        Portraits
      </Typography>
      </Grid>
      
  <ImageList variant='masonry' cols={2} gap={8}>
  {itemData.map((item) => (
  <ImageListItem key={item.img}>
     
    <img
      src={`${item.img}?w=248&fit=crop&auto=format`}
      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
      alt={item.title}
      loading="lazy"
    />
    <Typography variant='h6'>
      {item.author}
    </Typography>
   
  </ImageListItem>
))}
  </ImageList>
  </Grid>
 
    </Layout>
  )
}

export default Portraits
