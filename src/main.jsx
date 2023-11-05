import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
// import {TwitterIcon} from '@mui/icons-material/Twitter';
// import {FacebookIcon} from '@mui/icons-material/Facebook';
import { FaInstagram, FaTwitter } from "react-icons/fa"
import { FaFacebook } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

function Info()

{

return (  

<div className='INFO'>
<img className='IMAGE'src="./src/assets/Body_Picture.jpeg"/>

  <h1 className='Name'>Khuzaima Abbasi</h1>

  <h2 className='Title'>Frontend Developer</h2>
<div className='Button'>
  <button className='Email' type='button'>Email</button>
  <button className='Linkedin' type='button'>Linkedin</button>
  <button className='Github' type='button'>Github</button>


  </div>
  </div>

)

}

function About()
{

  return(

    <div className='About'>
    <h1>About</h1>
    <p>My Name is Muhammad Khuzaima Abbasi and I am a Fresh Graduate from Ghulam Ishaq Khan Institute of Technology. I am specialize in React JS and have made plenty of projects on it. I am interst in working for a postion in your company that best suits my capabilities.</p>
    </div>
    )


}

function Interests()
{

  return(

    <div className='Interests'>
    <h1>Interests</h1>
    <p>I am a huge gamer and spend my spare time either playing video games on my computer or searching for intersting games on steam which are on sale. I also enjoy reading novels on my phone to pass the time on long drives, one of my favorites recently is the book series called Dune.</p>
    </div>
    )


}


function Footer()
{
return (<div className='Icons'>

<FaTwitter className='Twitter'/>
<FaFacebook className='Facebook' />
<FaGithub className='FaGithub'/>
<FaInstagram className='Instagram'/>
</div>
)
}




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Info />
    <About/>
    <Interests/>
    <Footer/>
 </React.StrictMode>,

)
