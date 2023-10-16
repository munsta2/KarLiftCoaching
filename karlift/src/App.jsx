import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Home from './Home'
import About from './About'
import ApllicationForm from './ApplicationForm'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom'

import NavBar from './NavBar'

function App() {
  return (
    

    <div>
  
       <NavBar />
        <Link to='/' component={Home}></Link> 
        <Link to='/about' component={About}></Link> 
        <Link to='/application' component={ApllicationForm}></Link> 

        <Routes>
          <Route path='/'  element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/application' element={<ApllicationForm/>}/>
       </Routes>
     
    </div>
  );
}

export default App
