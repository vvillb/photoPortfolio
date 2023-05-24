import Layout from '../../../layout/Layout'
import { Grid, ImageList, ImageListItem, Typography } from '@mui/material'
import foto1 from '../../../assets/images/moodstories/mood24.jpg'
import foto2 from '../../../assets/images/moodstories/videomood2.gif'
import foto3 from '../../../assets/images/moodstories/mood16.jpg'
import foto4 from '../../../assets/images/moodstories/mood13.jpeg'
import foto5 from '../../../assets/images/moodstories/mood17.jpg'
import foto6 from '../../../assets/images/moodstories/mood1.jpeg'
import foto7 from '../../../assets/images/moodstories/mood14.jpg'
import foto8 from '../../../assets/images/moodstories/mood11.jpg'
import foto9 from '../../../assets/images/moodstories/mood22.jpeg'
import foto10 from '../../../assets/images/moodstories/mood12.jpg'
import foto11 from '../../../assets/images/moodstories/videomood1.gif'
import foto12 from '../../../assets/images/moodstories/mood21.jpg'
import foto13 from '../../../assets/images/moodstories/mood20.jpg'
import foto14 from '../../../assets/images/moodstories/mood19.jpg'



const itemData=[
  {
    img:foto1,
    title:'moodstories',
    author:'@_khavanna_'
  },
  {
    img:foto4,
    title:'moodstories',
    
  },{
    img:foto3,
    title:'moodstories',
    
  },{
    img:foto2,
    title:'moodstories',
    
  },{
    img:foto5,
    title:'moodstories',
    
  },{
    img:foto6,
    title:'moodstories',
    
  },{
    img:foto7,
    title:'moodstories',
    
  },{
    img:foto8,
    title:'moodstories',
    
  },{
    img:foto9,
    title:'moodstories',
    
  },{
    img:foto10,
    title:'moodstories',
    
  },{
    img:foto11,
    title:'moodstories',
    
  },{
    img:foto12,
    title:'moodstories',
    
  },{
    img:foto13,
    title:'moodstories',
    
  },{
    img:foto14,
    title:'moodstories',
    
  },
]
function MoodStories() {
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
          Mood Stories
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

export default MoodStories
