import React from 'react';
import {geolocated} from 'react-geolocated';
import { Redirect } from 'react-router';


class Demo extends React.Component {
    constructor(props){
        super(props);
        this.state={
            re:false
        }
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        console.log("hello");
        this.setState({re:true});
        return <Redirect to='localhost:3000'/>;
    }
  render() {
    if (this.state.re) {
        return <Redirect to='/somewhere'/>;
      }
    return <button onClick={this.handleClick}>hello</button>;
   
    
 
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Demo);