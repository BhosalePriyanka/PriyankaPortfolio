import React from 'react'
import {  Container,  Button,Image, Row, Col } from 'react-bootstrap'
import Ecom from '../Image/Ecom.png'
import Hotel from '../Image/Hotel.png'
import Recipe from '../Image/Recipe.png'
import exercise from '../Image/exercise.png'
import Birthday from '../Image/Birthday.png'

function Projects() {
  return (
 <>
<Container className="mx-auto m-5 p-5 text-center" style={{height:"auto"}}>
<Row className='m-5'>
<Col>
<h2 className='text-uppercase'>1.E-commerce Website</h2>
<div className='position-relative contain'>
<a href='https://ecommerce-mern-frontend-ztqp.onrender.com' rel = "noreferrer" target="_blank"  style={{color:"white"}}>
<Image src={Ecom} fluid style = {{height:"400px"}}className="conImage"/>
<p className='position-absolute centerText'  style={{top:"50%", left:"50%" , transform: "translate(-50%,-50%)" , fontSize:"1.5rem" }}>Visit Website</p>
</a>
</div>
<p>It is responsive website for Ecommerce business.User can add favourite products in cart.
Fisrt time buyer has to create account.For second time purchase user can login and enjoy thier shopping.</p>
<p>Skills I used here are - React,Redux, React Router, JSX, React-Bootstarp, Bootstarp, CSS,JSON-Server,Mongodb,Node,ExpressJs</p>

{/* To enhance security, we also assign the rel attribute with the value of noreferrer. 
This prevents the opened document from obtaining any information about the page that originated the request. */}
{/* <embed src="https://e-commerceproject.onrender.com"   className = "mx-auto" style={{width:"100%", height:"30rem"}}/> */}
{/* <Button className='m-3'><a href="https://github.com/BhosalePriyanka/Ecart-project" target="_blank" style={{color:"white"}}>Code</a></Button> */}
</Col>
<Col>
<h2 className='text-uppercase'>2.Hotelbooking Website</h2>
<div className='position-relative contain'>
<a href='https://hotelbooking-3qv1.onrender.com' target="_blank" style={{color:"white"}}>
<Image src={Hotel} fluid style = {{height:"400px"}} className="conImage"/>
<p className='position-absolute centerText'  style={{top:"50%", left:"50%" , transform: "translate(-50%,-50%)" , fontSize:"1.5rem" }}>Visit Website</p>
</a>
</div>
<p>It is responsive website for Hotel booking. User check room details and book thier room.First user has to create account and for second users can login their details for further booking.
 Website also shows histiry of booking.</p>
<p>Skills I used here are - React, React Router, Bootstarp, React-Bootstarp, CSS, JSX,JSON-Server</p>

{/* <embed src="https://bhosalepriyanka.github.io/HotelWebsite/"  className = "mx-auto" style={{width:"100%", height:"30rem"}}/> */}
{/* <Button className='m-3'><a href="https://github.com/BhosalePriyanka/HotelWebsite/tree/master" target="_blank" style={{color:"white"}}>Code</a></Button>
 */}
</Col> 
</Row>

<Row className='m-5'>
<Col>
<h2 className='text-uppercase'>3.Recipe App</h2>
<div className='position-relative contain'>
<a href='https://bhosalepriyanka.github.io/Food-Recipe/' target="_blank" style={{color:"white"}}>
<Image src={Recipe} fluid style = {{height:"400px"}} className="conImage"/>
<p className='position-absolute centerText'  style={{top:"50%", left:"50%" , transform: "translate(-50%,-50%)" , fontSize:"1.5rem" }}>Visit Website</p>
</a>
</div>
<p>This is responsive web application. We can find recipe of any food item.</p>
<p>Slills I used here are - React,Bootstarp,JSX</p>

{/* <Button className='m-3'><a href="https://github.com/BhosalePriyanka/Food-Recipe" target="_blank" style={{color:"white"}}>Code</a></Button>
<embed src="https://bhosalepriyanka.github.io/Food-Recipe/"  className = "mx-auto" style={{width:"100%", height:"400px"}}/> */}
</Col>

<Col>
<h2 className='text-uppercase'>5.Exercise Monitor App</h2>
<div className='position-relative contain'>
<a href='https://frontend-mern-u5x0.onrender.com' target="_blank" style={{color:"white"}}>
<Image src={exercise} fluid style = {{height:"400px"}} className="conImage"/>
<p className='position-absolute centerText'  style={{top:"50%", left:"50%" , transform: "translate(-50%,-50%)" , fontSize:"1.5rem" }}>Visit Website</p>
</a>
</div>
<p>I have devloped full MERN STACK app which monitor exercise of individual user.
   It is user friendly and responsive app having individual account to manage details of every day exercise activity.
   I have sued JSON WEB TOKEN for authotication.
   </p>
<p>Skills I have used here are - MERN(Mongodb,Express,React, Node) STACK, REDUX,REACT-Bootstrap,Bootstarp, JSX</p>

{/* <Button className='m-3'><a href="https://github.com/BhosalePriyanka/MERN_STACK" target="_blank" style={{color:"white"}}>Code</a></Button>
<embed src="https://frontend-mern-u5x0.onrender.com"  className = "mx-auto" style={{width:"100%", height:"30rem"}}/> */}
</Col>
</Row>

<Row className='m-5'>
<Col> <h2 className='text-uppercase'>4.Birthday Reminder App</h2>
<div className='position-relative contain'>
<a href='https://birthday-reminder-app-frontend.onrender.com' target="_blank" style={{color:"white"}}>
<Image src={Birthday} fluid style = {{height:"400px"}} className="conImage"/>
<p className='position-absolute centerText'  style={{top:"50%", left:"50%" , transform: "translate(-50%,-50%)" , fontSize:"1.5rem" }}>Visit Website</p>
</a>
</div>
<p>This is responsive web app for birthday reminder. We can store data in application about name, date of birthday of person.
  This app can remind birthday and upcoming birthdays.</p>
<p>Skills I have used here are - React,Redux,React-Bootstrap, Bootstarp, JSX,JSON-Server</p> 
 
{/* <Button className='m-3'><a href="https://github.com/BhosalePriyanka/MERN_Birthday_Reminder_App.git" target="_blank" style={{color:"white"}}>Code</a></Button>
<embed src="https://bhosalepriyanka.github.io/BirthdayReminder/"  className = "mx-auto" style={{width:"100%", height:"30rem"}}/> */} 

 </Col>
</Row>


</Container>
</>
  )
}

export default Projects