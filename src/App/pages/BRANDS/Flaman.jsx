import Layout from '../../../layout/LAyout'
import { Grid, ImageList, ImageListItem, Typography } from '@mui/material'
import foto1 from '../../../assets/images/flaman/flaman8.jpg'
import foto2 from '../../../assets/images/flaman/flaman4.jpg'
import foto3 from '../../../assets/images/flaman/flaman5.jpeg'
import foto5 from '../../../assets/images/flaman/flaman7.jpg'
import foto4 from '../../../assets/images/flaman/flaman11.jpeg'
import foto6 from '../../../assets/images/flaman/flaman9.jpg'
import foto7 from '../../../assets/images/flaman/flaman6.jpg'
import foto8 from '../../../assets/images/flaman/flaman3.jpeg'




const itemData=[
  {
    img:foto1,
    title:'flaman',
    author:'marco @m2visualstudio'
  },
  {
    img:foto4,
    title:'flaman',
    
  },{
    img:foto3,
    title:'flaman',
    
  },{
    img:foto2,
    title:'flaman',
    
  },{
    img:foto5,
    title:'flaman',
    
  },{
    img:foto6,
    title:'flaman',
    
  },{
    img:foto7,
    title:'flaman',
    
  },{
    img:foto8,
    title:'flaman',
    
  }
]
function Flaman() {
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
          Flaman Atelier
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

export default Flaman
