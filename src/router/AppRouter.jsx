import React from 'react'
import {Navigate, Route,Routes} from 'react-router-dom'
import HomePage from '../App/pages/HomePage'
import About from '../App/pages/About'
import Portfolio from '../App/pages/Portfolio'
import Contact from '../App/pages/Contact'
import Beauty from '../App/pages/Beauty'
import Editorials from '../App/pages/Editorials'
import Brands from '../App/pages/Brands'
import Portraits from '../App/pages/Portraits'
import Verbena from '../App/pages/BRANDS/Verbena'
import MoodStories from '../App/pages/BRANDS/MoodStories'
import CeliaB from '../App/pages/BRANDS/CeliaB'
import Cosmiel from '../App/pages/BRANDS/Cosmiel'
import Parole from '../App/pages/BRANDS/PArole'
import Flaman from '../App/pages/BRANDS/Flaman'



const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/*' element={<Navigate to='/'/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Portfolio' element={<Portfolio/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/Beauty' element={<Beauty/>}/>
        <Route path='/Editorials' element={<Editorials/>}/>
        <Route path='/Brands' element={<Brands/>}/>
        <Route path='/Portraits' element={<Portraits/>}/>
        <Route path='/Verbena' element={<Verbena/>}/>
        <Route path='/Moodstories' element={<MoodStories/>}/>
        <Route path='/CeliaB' element={<CeliaB/>}/>
        <Route path='/Cosmiel' element={<Cosmiel/>}/>
        <Route path='/Parole' element={<Parole/>}/>
        <Route path='/Flaman' element={<Flaman/>}/>

        
    </Routes>
  )
}

export default AppRouter
