import Layout from '../../layout/LAyout'
import { Grid, ImageList, ImageListItem, Typography } from '@mui/material'
import nuria1 from '../../assets/images/nuria/nuria1.jpg'
import nuria10 from '../../assets/images/nuria/nuria10.jpg'
import nuria11 from '../../assets/images/nuria/nuria11.jpg'
import nuria6 from '../../assets/images/nuria/nuria6.jpg'
import nuria4 from '../../assets/images/nuria/nuria4.jpg'
import nuria2 from '../../assets/images/nuria/nuria2.jpg'
import nuria12 from '../../assets/images/nuria/nuria12.jpg'
import sara1 from '../../assets/images/sarazalop/sara1.jpg'
import sara5  from '../../assets/images/sarazalop/sara5.jpg'
import sara7  from '../../assets/images/sarazalop/sara7.jpg'
import sara2  from '../../assets/images/sarazalop/sara2.jpg'
import sara4 from '../../assets/images/sarazalop/sara3.jpg'
import sara10 from '../../assets/images/sarazalop/sara10.jpg'


const itemData=[
  {
  img:nuria1,
  title:'nuria velasco',
  author:'nuria velasco'
  },
  {
  img:nuria10,
  title:'nuria velasco',
  },
  {
  img:nuria11,
  title:'nuria velasco',
  },
  {
  img:nuria6,
  title:'nuria velasco',
  },
  {
  img:nuria4,
  title:'nuria velasco',
  },
  {
  img:nuria2,
  title:'nuria velasco',
  },
  {
  img:nuria12,
  title:'nuria velasco',
  },
  {
  img:sara1,
  title:'sara zalop',
  author:'sara zalop'
  },
  {
  img:sara5,
  title:'sara zalop',
  },
  {
  img:sara7,
  title:'sara zalop',
  },
  {
  img:sara2,
  title:'sara zalop',
  },
  {
    img:sara10,
    title:'sara zalop',
    },
  {
    img:sara4,
    title:'sara zalop',
    },
]
function Beauty() {
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
          Beauty
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

export default Beauty
