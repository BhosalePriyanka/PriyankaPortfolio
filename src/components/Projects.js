import React from 'react'
import { Card, Col, Container, Row, Button,Image } from 'react-bootstrap'
import Ecommerce from "../Image/Ecommerce.png"

function Projects() {
  return (
 <>
<Container className="mx-auto p-5 text-center" style={{height:"auto"}}>

<Row className='my-5 mx-auto'>
<Col>
<h2>Ecommerce Website</h2>
<p>It is responsive website for Ecommerce business.User can add favourite products in cart.
Fisrt time buyer has to create account.For second time purchase user can login and enjoy thier shopping.</p>
<p>Skills I used here are - React,Redux, React Router, JSX, React-Bootstarp, Bootstarp, CSS</p>
<br/>

<Button className='m-3'><a href='https://bhosalepriyanka.github.io/Ecart-project/' target="_blank" style={{color:"white"}}>Website</a></Button>
<Button className='m-3'><a href="https://github.com/BhosalePriyanka/Ecart-project" target="_blank" style={{color:"white"}}>Code</a></Button>
<embed src='https://bhosalepriyanka.github.io/Ecart-project/' className = "mx-auto" style={{width:"100%", height:"400px"}}/>
</Col>
<Col>
<h2>Hotelbooking Website</h2>
<p>It is responsive website for Hotel booking. User check room details and book thier room.
   First user has to create account and for second users can login their details for further booking.
    Website also shows histiry of booking.</p>
<p>Skills I used here are - React, React Router, Bootstarp, React-Bootstarp, CSS, JSX</p>
<Button className='m-3'><a href='https://bhosalepriyanka.github.io/HotelWebsite/' target="_blank" style={{color:"white"}}>Website</a></Button>
<Button className='m-3'><a href="https://github.com/BhosalePriyanka/HotelWebsite/tree/master" target="_blank" style={{color:"white"}}>Code</a></Button>
<embed  className = "mx-auto" style={{width:"100%", height:"400px"}} src="https://bhosalepriyanka.github.io/HotelWebsite/"></embed>
</Col>
</Row>

<Row className='mx-auto my-5'>
<Col>
<h2>Recipe App</h2>
<p>This is responsive web application. We can find recipe of any food item.</p>
<p>Slills I used here are - React,Bootstarp,JSX</p>
<br/><br/>
<Button className='m-3'><a href='https://myfoodrecipe-app.herokuapp.com' target="_blank" style={{color:"white"}}>Website</a></Button>
<Button className='m-3'><a href="https://github.com/BhosalePriyanka/Food-Recipe" target="_blank" style={{color:"white"}}>Code</a></Button>
<embed src="https://myfoodrecipe-app.herokuapp.com" className = "mx-auto" style={{width:"100%", height:"400px"}} /> 
</Col>
<Col>
<h2>Birthday Reminder App</h2>
<p>This is responsive web app for birthday reminder. We can store data in application about name, date of birthday of person.
  This app can remind birthday and upcoming birthdays.</p>
  <p>Skills I have used here are - React, Bootstarp, JSX</p>
<Button className='m-3'><a href='https://bhosalepriyanka.github.io/BirthdayReminder/' target="_blank" style={{color:"white"}}>Website</a></Button>
<Button className='m-3'><a href="https://github.com/BhosalePriyanka/BirthdayReminder" target="_blank" style={{color:"white"}}>Code</a></Button>
<embed src="https://bhosalepriyanka.github.io/BirthdayReminder/"  className = "mx-auto" style={{width:"100%", height:"400px"}}/>
</Col>
</Row>





</Container>
</>
  )
}

export default Projects