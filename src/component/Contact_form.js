import React, {useState} from 'react'
import {Button, Container, Card, Row, Col,   } from 'react-bootstrap';
import {db} from './Firebase'

const Contact_form =() =>{
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [loader, setLoader] = useState(false);

	const [nameError, setNameError] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const nameChanger =(e) =>{
		setName(e.target.value);
		let item =e.target.value;
		if (item.length<3 || item.length==''){
		  	setNameError(true);
		  }
		else {
		  	setNameError(false);
		}
	  console.log(e.target.value.length)
	}

	const emailChanger =(e)=>{
	   setEmail(e.target.value);
	   let itemEmail =e.target.value;
		if (itemEmail.length<8 || itemEmail.length==''){
		  	setEmailError(true);
		  }
		else {
		  	setEmailError(false);
		}
		console.log(e.target.value.length)
	}

	const messageChanger =(e)=>{
	  setMessage(e.target.value)
	}
	const handleSubmit = (e)=>{
		e.preventDefault();

		setLoader(true);
		if(name.length<3 || email.length<8 || name.length=='' || email.length==''){
			alert('type correct value')
		}
		else
		{
			alert ('All good')
		}
		db.collection('contacts').add({
			name:name,
			email:email,
			message:message,
		})
		.then(()=>{
			alert('Message has been submited')
			setLoader(false);
		})
		.catch(error=>{
			alert('error.message');
			setLoader(false);
		})
		setName('');
		setEmail('');
		setMessage('');
	}

	return (
		<div className="contact-form">
		  	 <h3>Drop Me a Message</h3>
		  	 <form onSubmit={handleSubmit}>
		  	 	<Row>
		  	 		<Col lg={6}>
		  	 			<div className="form-group">
		  	 				<input type="text" placeholder='Name' value={name} onChange={nameChanger}/>
		  	 				{nameError?<span className='errorName'>User Not valid</span>:''}
		  	 			</div>
		  	 		</Col>
		  	 		<Col lg={6}>
		  	 			<div className="form-group">
		  	 				<input type="text" placeholder='Email' value={email} onChange={emailChanger}/>
		  	 				{emailError ?<span className='errorName'>Email Not valid</span>:''}
		  	 			</div>
		  	 		</Col>
		  	 		<Col lg={12}>
		  	 			<div className="form-group">
		  	 				<textarea placeholder='Message' value={message} onChange={messageChanger}/>
		  	 			</div>
		  	 		</Col>
		  	 		<Col lg={6}>
		  	 			<div className="form-group">
		  	 				<Button className="submit_form" type="submit" style={{background : loader ? '#323232':'#41adff'}}><span>Send</span></Button>
		  	 			</div>
		  	 		</Col>
		  	 	</Row>
		  	 </form>
		  	</div>
		  	)
}

export default Contact_form