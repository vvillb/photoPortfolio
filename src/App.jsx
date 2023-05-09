import React from 'react'
import AppTheme from './theme/AppTheme'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router/AppRouter'

function App() {


  return (
    <>
    <BrowserRouter>
      <AppTheme>
        <AppRouter/>
      </AppTheme>
    </BrowserRouter>
    </>
  )
}

export default App
