import React from 'react'
import Navbar from './navbar'
import Intro from './intro'
import Cards from './cards'
import Admin from './admin'
import Footer from './Footer'
// import Setadmin from './Setadmin'
// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Cards/>
      {/* <Admin/> */}
      {/* <Footer/> */}
    </div>
    
  )
}

export default App