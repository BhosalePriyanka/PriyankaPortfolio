
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Aboutme from './components/Aboutme';  
import Topnav from './components/Topnav';
import Contactme from './components/Contactme';
import './App.css';
import Projects from './components/Projects';


function App() {
  return (
    <>
    <Router>
   <Topnav/>
      <Routes>
        <Route  exact path = "*" element = {< Home/>} /> 
        <Route exact path  = "/Aboutme" element = {<Aboutme/>} />
        <Route exact path = "/Contactme" element = {<Contactme/>}/>
        <Route exact path = '/Projects' element = {< Projects/>}/>
   
  
      </Routes>

    </Router>


    
    </>
    
  )
}

export default App;
