import React from 'react'
import ProgressBar from 'react-animated-progress-bar';

const Progress = () =>{
	return(
			<>
			<h2>My skill</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				<div className="progressText">
				<span>HTML</span>
			 	<ProgressBar width="100%" height="10px"
		        rect
		        fontColor="gray" percentage="95"
		        rectPadding="1px" 
		        trackPathColor="transparent" bgColor="#e9ecef" trackBorderColor="#e9ecef" 
		          defColor={{
		            fair: '#41adff',
		            good: '#41adff',
		            excellent: '#41adff',
		            poor: 'red',
		          }}
		          />
		        </div>

		        <div className="progressText">
				<span>CSS</span>
			 	<ProgressBar width="100%" height="10px"
		        rect
		        fontColor="gray" percentage="90"
		        rectPadding="1px" 
		        trackPathColor="transparent" bgColor="#e9ecef" trackBorderColor="#e9ecef"
		         defColor={{
		            fair: '#41adff',
		            good: '#41adff',
		            excellent: '#41adff',
		            poor: 'red',
		          }}/>
		        </div>

		        <div className="progressText">
				<span>JAVASCRIPT</span>
			 	<ProgressBar width="100%" height="10px"
		        rect
		        fontColor="gray" percentage="55"
		        rectPadding="1px" 
		        trackPathColor="transparent" bgColor="#e9ecef" trackBorderColor="#e9ecef"
		         defColor={{
		            fair: '#41adff',
		            good: '#41adff',
		            excellent: '#41adff',
		            poor: 'red',
		          }}/>
		        </div>

		        <div className="progressText">
				<span>BOOTSTRAP</span>
			 	<ProgressBar width="100%" height="10px"
		        rect
		        fontColor="gray" percentage="80"
		        rectPadding="1px" 
		        trackPathColor="transparent" bgColor="#e9ecef" trackBorderColor="#e9ecef"
		         defColor={{
		            fair: '#41adff',
		            good: '#41adff',
		            excellent: '#41adff',
		            poor: 'red',
		          }}/>
		        </div>

		        <div className="progressText">
				<span>PHOTOSHOP</span>
			 	<ProgressBar width="100%" height="10px"
		        rect
		        fontColor="gray" percentage="70"
		        rectPadding="1px" 
		        trackPathColor="transparent" bgColor="#e9ecef" trackBorderColor="#e9ecef"
		         defColor={{
		            fair: '#41adff',
		            good: '#41adff',
		            excellent: '#41adff',
		            poor: 'red',
		          }}/>
		        </div>

		        <div className="progressText">
				<span>ILLUSTRATOR</span>
			 	<ProgressBar width="100%" height="10px"
		        rect
		        fontColor="gray" percentage="60"
		        rectPadding="1px" 
		        trackPathColor="transparent" bgColor="#e9ecef" trackBorderColor="#e9ecef"
		         defColor={{
		            fair: '#41adff',
		            good: '#41adff',
		            excellent: '#41adff',
		            poor: 'red',
		          }}/>
		        </div>

			</>
		)
}

export default Progress