import React from 'react'
import {  Container,  Button, Image } from 'react-bootstrap'
import resume from '../Image/PriyankaBhosaleUpdated.pdf'



function Aboutme() {
  return (
<>

<Container style={{height:"100vh", position:"relative",  fontSize:"1rem"}}>
<div style={{position:'absolute',top: "50%" ,left:"50%", transform:"translate(-50%,-50%)"}}>
<h2 className='text-uppercase'>About Me</h2>
<div> I have completed my bachelor in computer science.
I have worked as front end developer. I have 2 years experience in  responsive web application design, development and implementation. 
I have done manual as well automation testing. 

I have used following skill set-
<ul>
    <li>HTML, CSS, JavaScript.,ES6 </li>
    <li>React, React Router, React Testing Library, Redux, Hooks.</li>
    <li>Bootstrap, React-Booststar.</li>
    <li>Version Control System - Git.</li>
    <li>RESTful API & JSON</li>
    <li>Agile Process</li>
</ul>

<a href={resume} download = 'Resume'><Button>DOWNLOAD</Button> </a>
</div>
</div>



</Container>
</>
  )
}

export default Aboutme