import React from 'react'
import { Dropdown } from 'semantic-ui-react';

import { Button } from 'semantic-ui-react';


export default class Drop extends React.Component{
  constructor(props){
    super(props);
    this.state={
      redirection:false
    }
  }
  handleLogoutClick=()=>{

    localStorage.clear();
    sessionStorage.clear();
    this.setState({
      redirection:true
    });
    console.log("working");
    }
  render(){
    const options = [
      { key: 1, text: 'profile settings', value: 1 },
      { key: 2, text: <a href='addproduct'>My Products</a>, value: 2 },
      { key: 3, text: 'History', value: 3 },
      { key: 4, text: <div onClick={this.handleLogoutClick}>Log Out</div>, value: 4 }
      
    ]
    return(
      <Dropdown text={"Hello " + this.props.name} options={options} />
    )
  }
}

const options = [
  { key: 1, text: 'profile settings', value: 1 },
  { key: 2, text: <a href='addproduct'>My Products</a>, value: 2 },
  { key: 3, text: 'History', value: 3 },
  { key: 4, text: <Button onClick={this.handleLogoutClick}>Log Out</Button>, value: 4 }
  
]