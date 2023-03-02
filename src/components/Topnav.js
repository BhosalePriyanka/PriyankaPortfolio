
import { useState } from 'react';
import {Button, Container, Nav,Navbar,NavLink} from 'react-bootstrap';
import { Link } from 'react-router-dom';
export const Topnav= () => {
  const [show, setShow] = useState(false);

  return (
    <>
<Navbar fixed="top" expand="lg" style={{backgroundColor:"white"}} >
<Container>
<Navbar.Toggle aria-controls='toggleId' style={{color:'pink'}} />
<Navbar.Collapse id='toggleId' style={{color:'pink'}}>
 <Nav>
        <NavLink as ={Link} to = {`./Home`}><Button style={{backgroundColor:'black'}}>HOME</Button></NavLink>
        <NavLink as={Link} to = {`./Aboutme`}> <Button style={{backgroundColor:'black'}}> ABOUT</Button></NavLink>
        <NavLink as={Link} to = {`./Contactme`}><Button style={{backgroundColor:'black'}}> CONTACT</Button></NavLink>
        <NavLink as={Link} to = {`./Projects`}><Button style={{backgroundColor:'black'}}>PROJECT</Button></NavLink>
      
      
</Nav>
</Navbar.Collapse>
</Container>
</Navbar>
    </>
  )
}
export default Topnav;