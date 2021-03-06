import React from 'react';
import Header from './component/Header';
import Navbar from './component/Navbar'
import About from './component/About-us'
import Services from './component/Services'
import Portfolio from './component/Portfolio'
import Contact from './component/Contact'
import Footer from './component/Footer'
const App=()=> {
  return (
    <div className="App">
    	<Navbar />
    	<Header/>
    	<About/>
    	<Services/>
    	<Portfolio/>
    	<Contact/>
    	<Footer/>
    </div>
  );
}

export default App;
