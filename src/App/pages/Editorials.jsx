import Layout from '../../layout/LAyout'
import { useEffect } from 'react'
import { Grid, ImageList, ImageListItem, Typography } from '@mui/material'
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
import julio1 from '../../assets/images/julioxalba/julio1.jpg'
import julio12 from '../../assets/images/julioxalba/julio12.jpg'
import julio2 from '../../assets/images/julioxalba/julio2.jpg'
import julio3 from '../../assets/images/julioxalba/julio3.jpg'
import julio7 from '../../assets/images/julioxalba/julio7.jpg'
import arquesshoot1 from '../../assets/images/verdicio/Arqueshoot1.jpg'
import verdicio4  from '../../assets/images/verdicio/verdicio4.jpg'



const itemData = [
  {
    img: m21,
    title: 'm2visulastudio',
    author:'m2 visual studio '
  },{
    img: m22,
    title: 'm2visualstudio',
  },{
    img: m23,
    title: 'm2visualstudio',
    
  },{
    img:  m24,
    title: 'm2visualstudio',
  }, {
    img: alba3,
    title: 'albagarcia',
    author:'alba garcía '
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
    author:'mauro testa '
  },{
    img: mauro2,
    title: 'maurotesta',
  },{
    img: mauro1,
    title: 'maurotesta',
  },{
    img:  mauro4,
    title: 'maurotesta',
  }, {
    img: julio12,
    title: 'julioxalba',
    author:'julio murias x alba granda stylist '
  },{
    img: julio1,
    title: 'julioxalba',
  },{
    img: julio2,
    title: 'julioxalba',
  },{
    img:  julio3,
    title: 'julioxalba',
  },{
    img:  julio7,
    title: 'julioxalba',
  },{
    img:  arquesshoot1,
    title: 'julioxalba',
    author:'pablo arquero '
  },{
    img:  verdicio4,
    title: 'nacho',
    author:'fran goyos '
  },
]

function Editorials() {

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
          Editorials
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

export default Editorials
