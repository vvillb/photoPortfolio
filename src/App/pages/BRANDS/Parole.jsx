import Layout from '../../../layout/Layout'
import { Grid, ImageList, ImageListItem, Typography } from '@mui/material'
import foto1 from '../../../assets/images/parole/parole2.jpg'
import foto2 from '../../../assets/images/parole/parole5.jpg'
import foto3 from '../../../assets/images/parole/parole7.jpg'
import foto4 from '../../../assets/images/parole/parole1.jpg'
import foto5 from '../../../assets/images/parole/parole3.jpg'
import foto6 from '../../../assets/images/parole/parole4.jpg'
import foto7 from '../../../assets/images/parole/parole9.jpg'
import foto8 from '../../../assets/images/parole/parole6.jpg'




const itemData=[
  {
    img:foto1,
    title:'parole',
    author:'marco @m2visualstudio'
  },
  {
    img:foto2,
    title:'parole',
    
  },{
    img:foto3,
    title:'parole',
    
  },{
    img:foto4,
    title:'parole',
    
  },{
    img:foto5,
    title:'parole',
    
  },{
    img:foto6,
    title:'parole',
    
  },{
    img:foto7,
    title:'parole',
    
  },{
    img:foto8,
    title:'parole',
    
  },
]
function Parole() {
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
        Parole Italy
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

export default Parole
