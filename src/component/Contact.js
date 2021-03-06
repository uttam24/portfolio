import React from 'react';
import {Button, Container, Card, Row, Col,   } from 'react-bootstrap';
import Contact_form from './Contact_form';
const Contact = ()=>{
	return(
		<div className="services cBg section" id="contact">
		<h2>Get In Touch</h2>
		<Container>
		  <Row>
		  <Col lg={4} className="m-15px-tb">
		    <div class="contact-info-box">
              <div className="contact-info">
                <i className="fa fa-address-book icon" aria-hidden="true"></i>
                <p>Mahavir Enclave, New Delhi-110059</p>
              </div>
              <div className="contact-info">
                <i className="icon fa fa-envelope" aria-hidden="true"></i>
                <p>uttamdesiger@gmail.com</p>
              </div>
              <div className="contact-info">
               <i class="icon fa fa-mobile" aria-hidden="true"></i>
                <p>+91 9560305437</p>
              </div>
              
              <ul className="social-icons">
                <li><a href="https://www.facebook.com/?stype=lo&jlou=Afeamwk7oNAfCwsvNclm6SxiX7YhtWre6ZHC4XpFb7Jd7tSyOuv3MDKJjyBByXusk-DvJSzNk28tzvbsJVxsIptyQtFqy9FhBJHUBfzNGsgvJg&smuh=24952&lh=Ac8eGH6_c5plubLGFWw" target="blank"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="https://www.linkedin.com/feed/?trk=homepage-basic_signin-form_submit" target="blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
              </ul>
            </div>
		  </Col>
		  <Col lg={8} className="m-15px-tb">
		  	<Contact_form/>
		  </Col>
		  </Row>
		</Container>
		</div>
		)
}

export default Contact