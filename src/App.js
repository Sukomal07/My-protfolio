import Header, {HeaderPhone} from './components/Header.jsx'
import Home from './components/Home.jsx'
import Work from './components/Work.jsx'
import Experience from './components/Experience.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

import './styles/app.scss'
import { Toaster } from 'react-hot-toast'
import { useState } from 'react'
function App() {
  const [menu , setMenu] = useState(false)
  return (
    <>
      <HeaderPhone menu={menu} setMenu={setMenu}/>
      <Header menu={menu} setMenu={setMenu}/>
      <Home />
      <Work/>
      <Experience/>
      <Services/>
      <Contact/>
      <Toaster/>
      <Footer/>
    </>
  )
}

export default App;
