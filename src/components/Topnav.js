import React from 'react';
import {Container, Nav,Navbar,NavLink} from 'react-bootstrap';
import { Link } from 'react-router-dom';
export const Topnav= () => {
  return (
    <>
<Navbar fixed="top" expand="lg" variant="dark" >
<Container>
<Navbar.Toggle aria-controls='toggleId' style={{color:'pink'}} />
<Navbar.Collapse id='toggleId' style={{color:'pink'}}>
 <Nav>
        <NavLink as ={Link} to = {`./Home`} style={{color:'pink'}}>HOME</NavLink>
        <NavLink as={Link} to = {`./Aboutme`} style={{color:'pink'}} >ABOUT</NavLink>
        <NavLink as={Link} to = {`./Contactme`} style={{color:'pink'}}>CONTACT</NavLink>
        <NavLink as={Link} to = {`./Projects`} style={{color:'pink'}} >PROJECT</NavLink>
      
      
</Nav>
</Navbar.Collapse>
</Container>
</Navbar>
    </>
  )
}
export default Topnav;