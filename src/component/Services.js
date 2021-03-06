import React,{useState, useEffect} from 'react';
import {Button, Container, Card, Row, Col,   } from 'react-bootstrap';
import Progress from './Progress';

const Services=()=>{


	return(
		<>
		<div className="services cBg section" id="services">
		<h2>My Services</h2>
			<Container>
				<Row>
					<Col lg={4}>
						<div className="feature-box-02">
			                <div className="icon">
			                 	<i class="fa fa-cogs fa-fw fa-3x"></i>
			                </div>
			                <div className="feature-content">
			                  <h5>Web Development</h5>
			                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
			                </div>
			              </div>
					</Col>
					<Col lg={4}>
						<div className="feature-box-02">
			                <div className="icon">
			                 <i className="fa fa-desktop" aria-hidden="true"></i>
			                </div>
			                <div className="feature-content">
			                  <h5>Responsive Design</h5>
			                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
			                </div>
			              </div>
					</Col>
					<Col lg={4}>
						<div className="feature-box-02">
			                <div className="icon">
			                 	<i class="fa fa-paint-brush" aria-hidden="true"></i>
			                </div>
			                <div className="feature-content">
			                  <h5>Web Design</h5>
			                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
			                </div>
			              </div>
					</Col>
					
				</Row>
				<hr/>
				<Row>
				 <Col lg={6}>
				 	<Progress/>
				 </Col>
				 <Col lg={6}>
				 <img src="images/web-design.png" alt=""/>
				 </Col>
				</Row>
			</Container>
	    </div>
		</>)
}

export default Services