import React from 'react'
import {AiFillCode, AiFillGithub, AiFillLinkedin, AiOutlineArrowUp} from'react-icons/ai'
// import logo from '../assets/logo.jpg'
const Footer = () => {
  return (
    <footer>
        <div>
            <h2>Sukomal Dutta</h2>
            <p>made by sukomal @2023</p>
        </div>
        <aside>
            <h2>Follow Me</h2>
            <article>
                <a href="https://www.linkedin.com/in/duttasukomal/" target={'blank'}><AiFillLinkedin/></a>
                <a href="https://github.com/Sukomal07" target={'blank'}><AiFillGithub/></a>
                <a href="https://leetcode.com/Sukomal07/" target={'blank'}><AiFillCode/></a>
            </article>
        </aside>
        <a href="#home"><AiOutlineArrowUp/></a>
    </footer>
  )
}

export default Footer
