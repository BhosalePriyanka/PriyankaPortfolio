import React from 'react'
import { Container } from 'react-bootstrap'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import '../App.css'
import { Link } from 'react-router-dom';
export default function Contactme() {
  return (
    <>
    <Container style={{position:"relative", height:"100vh"}} className="text-center">
    <div style={{position:'absolute', top:"50%", left:"50%", transform:"translate(-50%,-50%)"}}>
    <h2 className='text-uppercase contact'>Contact Me </h2>
    <div>Email Id : priyankapatil970@gmail.com</div>
    <div>Phone No : +44 7466157238</div>
     
    <div className="m-5">
    
    <span style={{fontSize:"5rem"}}>
    <a href="https://www.linkedin.com/in/priyanka-bhosale-3360b6b6/"  target="_blank" style = {{backgroundColor:"blue",  color:"white"}}> 
    <AiFillLinkedin className='rounded hover-zoom'/> 
    </a>
     </span>
    
    <span style={{fontSize:"5rem"}} className="rounded p-2 m-3">
    <a href="https://github.com/BhosalePriyanka" target="_blank" style={{ backgroundColor: "black", color:"white"}}> 
      <AiFillGithub className='justify-center hover-zoom'/>
      </a>
      </span>
    </div>

    </div>
    </Container>
    </>
   
  )
}
    
