import React, { Component } from 'react';
import { Button,Icon,Responsive } from 'semantic-ui-react';

import {Link} from 'react-router-dom';
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
        const mystyle3={
            position: 'fixed',
            bottom: 25,
            right: 5,
            backgroundColor: '#ff0066',
           
        }

        const mystyle4={
            color:'white',
            paddingTop:12,
            paddingBottom:12
        }
        return(
            <div>
                <Responsive minWidth={1125}>
                <Link to="addpform"><Button circular style={mystyle}>
                
                <h2 style={mystyle2}><Icon name="write" fitted/><br/>Post ad</h2>
              
                
                </Button></Link>
                
        </Responsive>
        <Responsive maxWidth={1124}>
        <Link to="addpform"><Button circular style={mystyle3}>
                
                <h5 style={mystyle4}><Icon name="write" fitted/><br/>Post ad</h5>
              
                
                </Button></Link>
            </Responsive>
                </div>

        )
    }
}