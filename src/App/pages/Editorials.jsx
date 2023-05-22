import React from 'react'
import Layout from '../../layout/LAyout'
import { Card, CardMedia, Grid, ImageList, ImageListItem, Typography } from '@mui/material'
import m21 from '../../assets/images/m2/m25.jpg'
import m22 from '../../assets/images/m2/m21.jpg'
import m23 from '../../assets/images/m2/m22.jpg'
import m24 from '../../assets/images/m2/m23.jpg'
import alba3 from '../../assets/images/alba/alba3.jpeg'
import alba11 from '../../assets/images/alba/alba11.jpg'
import alba7 from '../../assets/images/alba/alba7.jpeg'
import alba5 from '../../assets/images/alba/alba5.jpg'
import mauro3 from '../../assets/images/mauro/mauro3.jpg'
import mauro2 from '../../assets/images/mauro/mauro2.jpg'
import mauro1 from '../../assets/images/mauro/mauro1.jpg'
import mauro4 from '../../assets/images/mauro/mauro4.jpg'



const itemData = [
  {
    img: m21,
    title: 'm2visulastudio',
    author:'m2 visual studio 2020'
  },{
    img: m22,
    title: 'm2visualstudio',
  },{
    img: m23,
    title: 'm2visualstudio',
    author:'on vogue italia wearing lucía incera  '
  },{
    img:  m24,
    title: 'm2visualstudio',
  }, {
    img: alba3,
    title: 'albagarcia',
    author:'alba garcía 2020'
  },{
    img: alba11,
    title: 'albagarcia',
  },{
    img: alba7,
    title: 'albagarcia',
  },{
    img:  alba5,
    title: 'albagarcia',
  }, {
    img: mauro3,
    title: 'maurotesta',
    author:'mauro testa 2020'
  },{
    img: mauro2,
    title: 'maurotesta',
  },{
    img: mauro1,
    title: 'maurotesta',
  },{
    img:  mauro4,
    title: 'maurotesta',
  },
]

function Editorials() {
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
          Editorials
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
      <Typography>
        {item.author}
      </Typography>
     
    </ImageListItem>
  ))}
    </ImageList>
    </Grid>
    </Layout>
  )
}

export default Editorials
