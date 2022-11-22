import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Aboutme() {
  return (
<>

<Container style={{height:"100vh", position:"relative",  fontSize:"1rem"}}>
<div style={{position:'absolute',top: "50%" ,left:"50%", transform:"translate(-50%,-50%)"}}>
<h2 className='text-uppercase'>About Me</h2>
<div> I have completed my bachelor in computer science & post graduation in MBA(Human Resource).
I have worked as front end developer. I have good experience in  responsive web application design, development and implementation. I have done manual as well automation testing. 

I have used following skill set-
<ul>
    <li>HTML, CSS, JavaScript. </li>
    <li>React, React Router, React Testing Library, Redux, Hooks.</li>
    <li>Bootstrap, React-Booststar.</li>
    <li>Version Control System - Git.</li>
</ul>

<a href='PriyankaBhosale.pdf' download='priyankaBhosale.pdf'>
<Button>Download Resume</Button>
</a>
  
</div>
</div>



</Container>
</>
  )
}

export default Aboutme