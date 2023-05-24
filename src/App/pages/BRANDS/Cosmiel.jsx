import Layout from '../../../layout/Layout'
import { Grid, ImageList, ImageListItem, Typography } from '@mui/material'
import foto1 from '../../../assets/images/cosmiel/cos1.jpg'
import foto2 from '../../../assets/images/cosmiel/cos5.jpg'
import foto3 from '../../../assets/images/cosmiel/cos13.jpg'
import foto4 from '../../../assets/images/cosmiel/cos3.jpg'
import foto5 from '../../../assets/images/cosmiel/cos10.jpg'
import foto6 from '../../../assets/images/cosmiel/cos6.jpg'
import foto7 from '../../../assets/images/cosmiel/cos2.jpg'
import foto8 from '../../../assets/images/cosmiel/cos8.jpg'
import foto10 from '../../../assets/images/cosmiel/cos4.jpg'
import foto9 from '../../../assets/images/cosmiel/cos12.jpg'


const itemData=[
  {
    img:foto1,
    title:'cosmiel',
    author:'@celiiaac'
  },
  {
    img:foto4,
    title:'cosmiel',
    
  },{
    img:foto3,
    title:'cosmiel',
    
  },{
    img:foto2,
    title:'cosmiel',
    
  },{
    img:foto5,
    title:'cosmiel',
    
  },{
    img:foto6,
    title:'cosmiel',
    
  },{
    img:foto7,
    title:'cosmiel',
    
  },{
    img:foto8,
    title:'cosmiel',
    
  },
  {
    img:foto9,
    title:'cosmiel',
    
  },
  {
    img:foto10,
    title:'cosmiel',
    
  },
]
function Cosmiel() {
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
        <Typography variant='h1' 
       >
        Cosmiel
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

export default Cosmiel
