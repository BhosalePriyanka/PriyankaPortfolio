
import { useState } from 'react';
import {Button, Container, Nav,Navbar,NavLink} from 'react-bootstrap';
import { Link } from 'react-router-dom';
export const Topnav= () => {
  const [show, setShow] = useState(false);

  return (
    
    <>
<Navbar fixed="top" expand="lg" variant="dark" >
<Container>
<Navbar.Toggle aria-controls='toggleId' style={{color:'pink'}} />
<Navbar.Collapse id='toggleId' style={{color:'pink'}}>
 <Nav>
        <NavLink as ={Link} to = {`./Home`} style={{color:'pink'}}><Button>HOME</Button></NavLink>
        <NavLink as={Link} to = {`./Aboutme`} style={{color:'pink'}} > <Button> ABOUT</Button></NavLink>
        <NavLink as={Link} to = {`./Contactme`} style={{color:'pink'}}><Button> CONTACT</Button></NavLink>
        <NavLink as={Link} to = {`./Projects`} style={{color:'pink'}}><Button>PROJECT</Button></NavLink>
      
      
</Nav>
</Navbar.Collapse>
</Container>
</Navbar>
    </>
  )
}
export default Topnav;