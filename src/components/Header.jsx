import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
const Header = ({menu,setMenu}) => {
  return (
    <>
    <nav>
      <NavContent setMenu={setMenu}/>
    </nav>
    <button className='navbtn' onClick={() => setMenu(!menu)}><AiOutlineMenu/></button>
    </>
  )
}
export const HeaderPhone = ({menu , setMenu}) => {
  return (
    <div className={`navPhone ${menu ? "navPhoneCome" :""}`}>
      <NavContent setMenu={setMenu}/>
    </div>
  )
}

const NavContent = ({setMenu}) =>{
    return <>
    <h2>Sukomal</h2>
    <div>
        <a onClick={() => setMenu(false)} href="#home">Home</a>
        <a onClick={() => setMenu(false)} href="#work">Work</a>
        <a onClick={() => setMenu(false)} href="#experience">Experience</a>
        <a onClick={() => setMenu(false)} href="#services">Services</a>
        <a onClick={() => setMenu(false)} href="#contact">Contact</a>
    </div>
    <a href="mailto:hypersukomal@gmai.com">
        <button>Email</button>
    </a>
    </>
}

export default Header
