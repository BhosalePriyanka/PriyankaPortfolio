import React from 'react'
import { Card, Col, Container, Row, Button,Image } from 'react-bootstrap'
import Ecom from '../Image/Ecom.png'
import Hotel from '../Image/Hotel.png'
import Recipe from '../Image/Recipe.png'

function Projects() {
  return (
 <>
<Container className="mx-auto m-5 p-5 text-center" style={{height:"auto"}}>
<div className='w-75 mx-auto mt-5'>
<h2 className='text-uppercase'>1.E-commerce Website</h2>
<p>It is responsive website for Ecommerce business.User can add favourite products in cart.
Fisrt time buyer has to create account.For second time purchase user can login and enjoy thier shopping.</p>
<p>Skills I used here are - React,Redux, React Router, JSX, React-Bootstarp, Bootstarp, CSS</p>
<Image src = {Ecom} style = {{height:'30rem' , width:'100%'}}/>
<Button className='m-3'><a href='https://bhosalepriyanka.github.io/Ecart-project/' target="_blank" style={{color:"white"}}>Website</a></Button>
<Button className='m-3'><a href="https://github.com/BhosalePriyanka/Ecart-project" target="_blank" style={{color:"white"}}>Code</a></Button>

</div>

<div className='w-75 mx-auto mt-5'>
<h2 className='text-uppercase'>2.Hotelbooking Website</h2>
<p>It is responsive website for Hotel booking. User check room details and book thier room.
   First user has to create account and for second users can login their details for further booking.
    Website also shows histiry of booking.</p>
<p>Skills I used here are - React, React Router, Bootstarp, React-Bootstarp, CSS, JSX</p>
<Image src = {Hotel} style ={{width:'100%' , height:'30rem'}}/>
<Button className='m-3'><a href='https://bhosalepriyanka.github.io/HotelWebsite/' target="_blank" style={{color:"white"}}>Website</a></Button>
<Button className='m-3'><a href="https://github.com/BhosalePriyanka/HotelWebsite/tree/master" target="_blank" style={{color:"white"}}>Code</a></Button>
</div>

<div className='w-75 mx-auto mt-5'>
<h2 className='text-uppercase'>3.Recipe App</h2>
<p>This is responsive web application. We can find recipe of any food item.</p>
<p>Slills I used here are - React,Bootstarp,JSX</p>
<Image src = {Recipe} style ={{width:'100%', height:'30rem'}}/>
<Button className='m-3'><a href='https://bhosalepriyanka.github.io/Food-Recipe/' target="_blank" style={{color:"white"}}>Website</a></Button>
<Button className='m-3'><a href="https://github.com/BhosalePriyanka/Food-Recipe" target="_blank" style={{color:"white"}}>Code</a></Button>

</div>





</Container>
</>
  )
}

export default Projects