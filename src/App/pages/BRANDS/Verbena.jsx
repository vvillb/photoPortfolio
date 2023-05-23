import Layout from '../../../layout/LAyout'
import { Grid, ImageList, ImageListItem, Typography } from '@mui/material'
import foto1 from '../../../assets/images/verbena/verb21.jpg'
import foto2 from '../../../assets/images/verbena/verb18.jpg'
import foto3 from '../../../assets/images/verbena/verb23.jpg'
import foto4 from '../../../assets/images/verbena/verb17.jpg'
import foto5 from '../../../assets/images/verbena/verb6.jpg'
import foto6 from '../../../assets/images/verbena/verb25.jpg'
import foto7 from '../../../assets/images/verbena/verb8.jpg'
import foto8 from '../../../assets/images/verbena/verb5.jpg'
import foto9 from '../../../assets/images/verbena/verb3.jpg'
import foto10 from '../../../assets/images/verbena/verb20.jpg'
import foto11 from '../../../assets/images/verbena/verb1.jpg'
import foto12 from '../../../assets/images/verbena/verb13.jpg'
import foto13 from '../../../assets/images/verbena/verb11.jpg'
import foto14 from '../../../assets/images/verbena/videoverbena1.gif'
import foto15 from '../../../assets/images/verbena/verb26.jpg'
import foto16 from '../../../assets/images/verbena/verb22.jpg'
import foto17 from '../../../assets/images/verbena/verb15.jpg'
import foto18 from '../../../assets/images/verbena/verb24.jpg'


const itemData=[
  {
    img:foto1,
    title:'verbena',
    author:'@_khavanna_'
  },
  {
    img:foto2,
    title:'verbena',
    
  },{
    img:foto3,
    title:'verbena',
    
  },{
    img:foto4,
    title:'verbena',
    
  },{
    img:foto5,
    title:'verbena',
    
  },{
    img:foto6,
    title:'verbena',
    
  },{
    img:foto7,
    title:'verbena',
    
  },{
    img:foto8,
    title:'verbena',
    
  },{
    img:foto9,
    title:'verbena',
    
  },
  {
    img:foto10,
    title:'verbena',
    
  },{
    img:foto11,
    title:'verbena',
    
  },{
    img:foto12,
    title:'verbena',
    
  },{
    img:foto13,
    title:'verbena',
    
  },{
    img:foto14,
    title:'verbena',
    
  },{
    img:foto15,
    title:'verbena',
    
  },{
    img:foto16,
    title:'verbena',
    
  },{
    img:foto17,
    title:'verbena',
    
  },{
    img:foto18,
    title:'verbena',
    
  },]


function Verbena() {
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
          Verbena Madrid
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

export default Verbena
