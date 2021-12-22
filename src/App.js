import React from "react";

import Card from "./components/Card";
import './index.css'

class App extends React.Component {
  state = {
    data: []
  };

  myRef = React.createRef();

  getData = async ()=>{
    const res=await fetch('data.json');
    const data=await res.json();
    console.log(data)
    this.setState({data:data});
  };
  componentDidMount(){
    this.getData();
  };

 precClick =() =>{
   const slide =this.myRef.current;
   slide.scrollLeft -= slide.offsetWidth;
   if(slide.scrollLeft <= 0){
     slide.scrollLeft= slide.scrollWidth;
   }
 }
 nextClick =() =>{
  const slide =this.myRef.current;
   slide.scrollLeft += slide.offsetWidth;
   if(slide.scrollLeft >= (slide.scrollWidth - slide.offsetWidth)){
     slide.scrollLeft= 0;
   }
 }
  render() {
    const { data } = this.state;
    return (
      <div className="wrapper">
        <div className="app" ref={this.myRef}>
           <Card  data={data}/>
        </div>
        <div className="row">
        <div className="prev" onClick={this.precClick}>
            <span>&#60;</span>
          </div>
          <div className="next" onClick={this.nextClick}>
            <span>&#62;</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
