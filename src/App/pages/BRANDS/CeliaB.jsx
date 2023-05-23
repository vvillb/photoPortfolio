import React from 'react'
import Layout from '../../../layout/LAyout'
import { Grid, ImageList, ImageListItem, Typography } from '@mui/material'
import foto1 from '../../../assets/images/celiab/celia10.jpg'
import foto2 from '../../../assets/images/celiab/celia13.jpg'
import foto3 from '../../../assets/images/celiab/celia11.jpg'
import foto4 from '../../../assets/images/celiab/celia5.jpg'
import foto5 from '../../../assets/images/celiab/celia2.jpg'
import foto6 from '../../../assets/images/celiab/celia7.jpg'
import foto7 from '../../../assets/images/celiab/celia9.jpg'
import foto8 from '../../../assets/images/celiab/celia14.jpg'
import foto9 from '../../../assets/images/celiab/celia16.jpg'


const itemData=[
  {
    img:foto1,
    title:'celiab',
    author:'cecilia álvarez-hevia'
  },
  {
    img:foto4,
    title:'celiab',
    
  },{
    img:foto3,
    title:'celiab',
    
  },{
    img:foto2,
    title:'celiab',
    
  },{
    img:foto5,
    title:'celiab',
    
  },{
    img:foto6,
    title:'celiab',
    
  },{
    img:foto7,
    title:'celiab',
    
  },{
    img:foto8,
    title:'celiab',
    
  },{
    img:foto9,
    title:'celiab',
    
  },
]
function CeliaB() {
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
          Celia B Designer
        </Typography>
        </Grid>
        
    <ImageList variant='masonry' cols={3} gap={8}>
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

export default CeliaB
