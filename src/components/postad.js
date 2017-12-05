import React, { Component } from 'react';
import { Button,Icon } from 'semantic-ui-react';
export default class Postad extends React.Component{
    render(){
        const mystyle={
            position: 'fixed',
            bottom: 20,
            right: 20,
            backgroundColor: '#ff0066',
           
        }
        const mystyle2={
            color:'white',
            paddingTop:15,
            paddingBottom:15
        }
        return(
            <div><a href="addpform"><Button circular style={mystyle}>
                
                <h2 style={mystyle2}><Icon name="write" fitted/><br/>Post ad</h2>
              
                
                </Button></a>
                </div>
        )
    }
}