import React, {useState} from 'react';
import { Container, Card, Row, Col,   } from 'react-bootstrap';
import { HashLink as  Link} from 'react-router-hash-link';
import * as Scroll from 'react-scroll';
import {  Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
const Navbar=()=> {
	const [active, setActive] =useState();
	const [hidden, setHidden] =useState(false);
	const [navbar, setNavbar] =useState(false);

	const clickhandler =()=>{
		setActive(!active);
		document.body.classList.toggle('overflow');
		document.getElementById("myDIV").classList.toggle("mystyle");
	}

	const changeBackground = () =>{
		if (window.scrollY >= 80){
			setNavbar(true);
		}
		else
		{
			setNavbar(false);
		}
	} 

	window.addEventListener('scroll', changeBackground);

  return (
  	<>
  	<div id="myDIV"></div>
    <div className={navbar ? 'navbar-fixed nav-active':'navbar-fixed '}>
	  <Container>
	 	<Row>
			<a href="" className="navbar-title">UTTAM</a>
			<button className="toggler-menu" onClick={clickhandler}>
	            <span></span>
	            <span></span>
	            <span></span>
        	</button>
        	<div className={active ? "top-side-nav active" :"top-side-nav"}>
        		<div className="menu-avtar">
	           		 <div className="img">
	             	 <img src="images/avatar.jpg" alt=""/>
	           	 	</div>
            		<label>I'm Uttam</label>
          		</div>

          		<ul className="menu-bar" >
	            <li><Link smooth={true} offset={-70} duration={1000}  activeClassName="nav-link active" to="#header">Home</Link></li>
	            <li><Link smooth={true} offset={-70} duration={1000} activeClassName="nav-link" to="/#about">About Me</Link></li>
	            <li><Link smooth={true} offset={-70} duration={1000} activeClassName="nav-link" to="/#services">Services</Link></li>
	            <li><Link smooth={true} offset={-70} duration={1000} activeClassName="nav-link" to="/ #portfolio">Portfolio</Link></li>
	             <li><Link smooth={true} offset={-70} duration={1000} activeClassName="nav-link" to="/ #contact">Contact</Link></li>

	           
	          </ul>
        	</div>
	  </Row>
	</Container>
    </div>
    </>
  );
}

export default Navbar;
