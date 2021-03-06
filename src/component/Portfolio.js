import React from 'react';
import { Button, Container, Card, Row, Col, Form  } from 'react-bootstrap';

const imgs = [{tag:"Website", src:"/images/main_page.jpg?raw=true"},
              {tag:"Website", src:"/images/new-product.jpg?raw=true"},
              {tag:"Website", src:"/images/beauty.jpg?raw=true"},
              {tag:"photoshop", src:"/images/blackbeery.jpg?raw=true"},
              {tag:"photoshop", src:"/images/livon.jpg?raw=true"},
              {tag:"photoshop", src:"/images/music girls.jpg?raw=true"},
             
];

const filters = [
  {name:"Website", status: false},
  {name:"photoshop", status: false},
 
];

const Filters = ({onClickAll, all, onClick, filters}) =>
  <form>
    <ul>
      <li onClick={onClickAll}>
        <input 
          type="checkbox"
          checked={all}
        />
        <label htmlFor="all">All PHOTOS</label>
      </li>
       {filters.map(
        (filter, i)=>
          <li  key={i} data-index={i} onClick={onClick} >
            <input 
              id={filter.name} 
              type="checkbox" 
              checked={filter.status}
            />
            <label htmlFor={filter.name}>{filter.name}</label>
          </li>)}
    </ul>
  </form>

const Cards = ({imgs}) =>
  <ul>
    {imgs.map(
      (img, i)=>
      <li  key={i}>
        <figure>
          <img src={process.env.PUBLIC_URL + img.src}  alt={img.author}/>
          <figcaption> 
            <div>{img.author} </div>
            <span>{img.tag}</span>
          </figcaption>
        </figure>
      </li>)}
  </ul>

class Portfolio extends React.Component{
  state ={
    imgs, 
    filters,
    all: true
  };

  setFilter = (e) =>{
    e.preventDefault();
    const { filters, all } = this.state;
    const { index } = e.currentTarget.dataset;
   
    filters[index].status = !filters[index].status;
    this.setState({
      filters
    });
    
    this.updateFilters();
    this.updateImgs();
  }
  
  setAll = () =>{
    const {filters} = this.state;
    
    filters.forEach( 
      filter => {
        filter.status = false;
      }
    );
    
    this.setState({
      all: true,
      filters
    });
  }
  
  updateFilters(){
    const allFiltersTrue = filters.every( filter => filter.status === true);
    const allFiltersFalse = filters.every( filter => filter.status === false);
    
    if(allFiltersTrue||allFiltersFalse){
      this.setAll();
    }else{
      this.setState({
        all: false
      });
    } 
  }
  
  updateImgs() {
    const { filters, all } = this.state;
    let newImgs = [];
    let a = 0;
    
    imgs.forEach((img, imgKey) => { 
      filters.forEach((filter, filterKey)=> {  
        if((img.tag==filter.name)&&(filter.status==true)){
          newImgs[a] = img;
          a++;
        }
      })
    });
        
    this.setState({
      imgs: newImgs
    });
  }

  render(){
    const {filters, all} = this.state;  
    return(
      <div className="photoGallery" id="portfolio">
      <Container>
            <Filters 
          onClickAll={this.setAll}
          all={all}
          onClick={this.setFilter}
          filters={filters} />
        {(all)?(
            <Cards imgs = {imgs}/>
          ):(
            <Cards imgs = {this.state.imgs}/>
        )}
        
      </Container>
      </div>
    );
  }
}

export default Portfolio