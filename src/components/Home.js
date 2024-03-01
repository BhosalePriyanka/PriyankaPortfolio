import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import {Aboutme} from './Aboutme'

function Home() {
  return (

      <Container style={{height:"100vh",position:"realtive"}} className="text-center">
    
      <div className="position-absolute" style={{left:"50%", top:"50%", transform:"translate(-50%,-50%)"}}>
      <h1 style = {{ animation : "animate 6s"}}> Hello, I'm Priyanka Bhosale</h1>
      <h2 style ={{ width : "0" , animation:"typing 1s forwards", animationDelay:"1s" , overflow: "hidden", whiteSpace:"nowrap" }} >
      Full Stack Developer</h2>
       <Link to={`/Aboutme`}>
       <Button style = {{ animation:"typingButton 6s"}}>About Me</Button>
       </Link>
       
      </div>
      

    </Container>
 
  )
}

export default Home