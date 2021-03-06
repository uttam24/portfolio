import React,{ Component } from 'react';
import { Button, Container, Card, Row, Col,   } from 'react-bootstrap';
import Typical from 'react-typical'
import { HashLink as  Link} from 'react-router-hash-link';

const Header=()=> {
  return (
    <div className="header home-banner-01" style={{ backgroundImage: `url("images/header.jpg`}} id="header">
	  <Container>
	 	 <Row className="align-items-center full-screen">
	  		<Col lg={12}>
	  			<p>Hello, There</p>
	  			<h2> I am <Typical
			        loop={Infinity}
			        wrapper="span"
			        steps={['Web Designer', 2500, 'Front-End Developer', 3000]}/></h2>
	  		</Col>
	  </Row>
	</Container>
	<Link to="#about" smooth={true} offset={-70} duration={1000} className="mouse-icon hidden-sm"><span className="wheel"></span></Link>
    </div>
  );
}

export default Header;
