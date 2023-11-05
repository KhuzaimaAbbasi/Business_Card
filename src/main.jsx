import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import { FaInstagram, FaTwitter } from "react-icons/fa"
import { FaFacebook } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import Info from './info'
import About from './About'
import Interests from './Interests'
import Footer from './Footer'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Info />
    <About/>
    <Interests/>
    <Footer/>
 </React.StrictMode>,

)
