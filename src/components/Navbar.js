import React , {useState } from 'react';
import {Nav,Navbar ,NavDropdown,FormControl,Form,Button} from 'react-bootstrap'
import $ from 'jquery'

const font = ['bold','bold','bold','bold','bold']

const NavBarCom = () => {

  const [color,setcolor] = useState(['#FFF' , '#FFF' , '#FFF' , '#FFF' , '#FFF' ]);


  const NavAnimation = ( e,className) => {
    e.preventDefault()  
        $("html, body").animate({
    
            scrollTop: $($(className).attr("href")).offset().top - 70

        },2000);
  }
    
    return(
  <Navbar className='navbar '  expand="lg" style={{position : 'fixed' , top : 0}} >
  <Navbar.Brand  href="#home" style={{color : '#FFF',fontWeight : 'bold',letterSpacing : '2px'}}>AstroTech</Navbar.Brand>
  <Navbar.Toggle  aria-controls="basic-navbar-nav" onClick={() => document.querySelector('.navbar').classList.toggle('toogle')} style={{background : '#FFF'}} />
  <Navbar.Collapse id="basic-navbar-nav" >
    <Nav className="mr-auto navitems"  ></Nav>
    <Nav className="navitems" >
    <NavDropdown  title="Contact us"  id="collasible-nav-dropdown">
        <NavDropdown.Item href="https://www.facebook.com/club.scientifique.esi">Facebook</NavDropdown.Item>
        <NavDropdown.Item href="https://www.instagram.com/cse.club/?hl=fr">Instagram</NavDropdown.Item>
        <NavDropdown.Item href="https://twitter.com/CSESI_Club">Twitter</NavDropdown.Item>
        <NavDropdown.Item href="https://www.linkedin.com/company/cse-club/">Linkden</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="https://cse.club/">Our Site</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link id='nav1'  className='navactive' href="#home" style={{marginRight : '20px' , color : color[0],fontWeight : font[0]}}    onClick={(e) => { NavAnimation(e,'#nav1')}}  >Home</Nav.Link>
      <Nav.Link id='nav2' href="#About" style={{marginRight : '20px', color : color[1],fontWeight : font[1]}}    onClick={(e) => { NavAnimation(e,'#nav2')}}  >About</Nav.Link>
      <Nav.Link id='nav3' href="#speakers" style={{marginRight : '20px', color : color[2],fontWeight : font[2]}}    onClick={(e) => { NavAnimation(e,'#nav3')}}  >Speakers</Nav.Link>
      <Nav.Link id='nav4' href="#agenda" style={{marginRight : '20px', color : color[3],fontWeight : font[3]}}    onClick={(e) => { NavAnimation(e,'#nav4')}}  >Agenda</Nav.Link>
      <Nav.Link id='nav5' href="#FAQ" style={{marginRight : '20px', color : color[4],fontWeight : font[4]}}     onClick={(e) => { NavAnimation(e,'#nav5')}}  >FAQ</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  


    )
}

export default NavBarCom
