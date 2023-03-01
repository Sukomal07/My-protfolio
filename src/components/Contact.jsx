import React, { useState } from 'react'
import vg from '../assets/vg.png'
import {motion} from 'framer-motion'
import toast from 'react-hot-toast'

import { addDoc,collection } from 'firebase/firestore'
import { db } from '../firebase'

const Contact = () => {
  const [name , setName] = useState()
  const [email , setEmail] = useState()
  const [message , setMessage] = useState()
  const [disablebtn , setdisablebtn] = useState(false)

  const submit = async (e) =>{
    e.preventDefault()
    setdisablebtn(true)
    try {
    await addDoc(collection(db,"contact"),{name,email,message})
    setName("")
    setEmail("")
    setMessage("")
    toast.success("Message sent successfully")
    setdisablebtn(false)
    } catch (error) {
      toast.error("Error")
      console.log(error)
      setdisablebtn(false)
    }
  }

  const animation ={
    form:{
      initial:{
        x:'-100%',
        opacity:0
      },
      whileInView:{
        opacity:1,
        x:0
      }
    },
    button:{
      initial:{
        y:'-100%',
        opacity:0
      },
      whileInView:{
        opacity:1,
        x:0
      },
      transition:{
        delay:0.5
      }
    }
  }
  return (
    <div id='contact'>
      <section>
        <motion.form onSubmit={submit} {...animation.form}>
          <h2>Contact Me</h2>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Your name' required/>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your Email' required/>
          <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message' required />
          <motion.button disabled={disablebtn} {...animation.button} className={disablebtn ? "disableBtn":""} type="submit">Send</motion.button>
        </motion.form>
      </section>
      <aside>
        <img src={vg} alt="graphics" />
      </aside>
    </div>
  )
}

export default Contact
