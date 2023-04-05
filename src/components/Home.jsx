import React, { useRef } from 'react'
import { animate, motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import { BsArrowUpRight, BsChevronDown } from 'react-icons/bs'
import me from '../assets/cover1.png'
const Home = () => {
    const projectCount = useRef(null)

    const animateProject = () => {
        animate(0, 20, {
            duration: 1,
            onUpdate: (v) => (projectCount.current.textContent = v.toFixed())
        })
    }
    const animation = {
        h1: {
            initial: {
                x: "-100%",
                opacity: 0
            },
            whileInView: {
                x: 0,
                opacity: 1
            }
        },
        button: {
            initial: {
                y: "-100%",
                opacity: 0
            },
            whileInView: {
                y: 0,
                opacity: 1
            }
        }
    }
    return (
        <div id='home'>
            <section>
                <div>
                    <motion.h1 {...animation.h1}>
                        Hi, I Am <br /> <span>Sukomal Dutta</span>
                    </motion.h1>
                    <Typewriter options={{
                        strings: ["Full Stack Web Developer", "Programmer", "Gammer", "Filmophile"],
                        autoStart: true,
                        cursor: "",
                        loop: true,
                        wrapperClassName: "typewriterpara"
                    }} />
                    <div>
                        <a href='https://drive.google.com/file/d/1V3-OGPuzL-MHa9NkfJONd0lQ5JlNya2y/view?usp=sharing'>Resume</a>
                        <a href="#work">Projects<BsArrowUpRight /></a>
                    </div>
                    <aside>
                        <article>
                            <p> +
                                <motion.span whileInView={animateProject} ref={projectCount}>20</motion.span>
                            </p>
                            <span>Project made</span>
                        </article>
                    </aside>
                    <aside> <article data-special>
                        <p>Contact</p>
                        <span>sukomaldutta99@gmail.com</span>
                    </article>
                    </aside>
                </div>
            </section>
            <section>
                <img src={me} alt="Sukomal Dutta" />
            </section>
            <BsChevronDown />
        </div>
    )
}

export default Home
