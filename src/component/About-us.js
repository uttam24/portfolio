import React from 'react';
import { Button, Container, Card, Row, Col,   } from 'react-bootstrap';
import { HashLink as  Link} from 'react-router-hash-link';
const About=()=> {
  return (
    <div className="section" id="about">
		<Container>
			<Row className="align-items-center justify-content-center">
				<div className="col-xl-5 col-lg-6">
	            <div className="about-img-01">
	              <img src="images/about.jpg" title="" alt=""/>
	              <div className="box-content">
	              <div className="content text-center">
	              	<ul className="social">
	              		<li><a href="https://www.facebook.com/?stype=lo&jlou=Afeamwk7oNAfCwsvNclm6SxiX7YhtWre6ZHC4XpFb7Jd7tSyOuv3MDKJjyBByXusk-DvJSzNk28tzvbsJVxsIptyQtFqy9FhBJHUBfzNGsgvJg&smuh=24952&lh=Ac8eGH6_c5plubLGFWw" target="blank"><i className="fa fa-facebook" aria-hidden="true"></i>
						</a></li>
	              		<li><a href="https://www.linkedin.com/feed/?trk=homepage-basic_signin-form_submit" target="blank"><i className="fa fa-linkedin" aria-hidden="true"></i>
						</a></li>
	              	</ul>
	              	<h3 className="title">Uttam Kumar</h3>
	              	<span className="post">Web Designer</span>
	              </div>
	              </div>
	            </div>
         	 </div>
         	  <div className="col-xl-5 col-lg-6">
		            <div className="about-box about-box-01">
		              <h3>HI there</h3>
		              <h6>I AM A WEB DESIGNER</h6>
		              <p>In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis quis leo. Nulla in feugiat elit.</p>
		              <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.</p>
						<Link to="#portfolio" smooth={true} offset={-70} duration={1000} className="my_work hidden-sm"><span>My Work</span></Link>
		            </div>
		          </div>
			</Row>
		</Container>	 	
    </div>
  );
}

export default About;
