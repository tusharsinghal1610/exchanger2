import React, { Component } from 'react';

import { Header, Grid, Button, Icon, Form } from 'semantic-ui-react';
import Header1 from './header'
const States = [
    
  {
  "key": "AN",
  "text": "Andaman and Nicobar Islands",
  "value": "Andaman and Nicobar Islands"
  },
  {
  "key": "AP",
  "text": "Andhra Pradesh",
  "value": "Andhra Pradesh"
  },
  {
  "key": "AR",
  "text": "Arunachal Pradesh",
  "value": "Arunachal Pradesh"
  },
  {
  "key": "AS",
  "text": "Assam",
  "value": "Assam"
  },
  {
  "key": "BR",
  "text": "Bihar",
  "value": "Bihar"
  },
  {
  "key": "CG",
  "text": "Chandigarh",
  "value": "Chandigarh"
  },
  {
  "key": "CH",
  "text": "Chhattisgarh",
  "value": "Chhattisgarh"
  },
  {
  "key": "DH",
  "text": "Dadra and Nagar Haveli",
  "value": "Dadra and Nagar Haveli"
  
  },
  {
  "key": "DD",
  "text": "Daman and Diu",
  "value":"Daman and Diu"
  },
  {
  "key": "DL",
  "text": "Delhi",
  "value": "Delhi"
  },
  {
  "key": "GA",
  "text": "Goa",
  "value": "Goa"
  
  },
  {
  "key": "GJ",
  "text": "Gujarat",
  "value": "Gujarat"
  },
  {
  "key": "HR",
  "text": "Haryana",
  "value": "Haryana"
  },
  {
  "key": "HP",
  "text": "Himachal Pradesh",
  "value": "Himachal Pradesh"
  },
  {
  "key": "JK",
  "text": "Jammu and Kashmir",
  "value": "Jammu and Kashmir"
  },
  {
  "key": "JH",
  "text": "Jharkhand",
  "value": "Jharkhand"
  },
  {
  "key": "KA",
  "text": "Karnataka",
  "value": "Karnataka"
  },
  {
  "key": "KL",
  "text": "Kerala",
  "value": "Kerala"
  },
  {
  "key": "LD",
  "text": "Lakshadweep",
  "value": "Lakshadweep"
  },
  {
  "key": "MP",
  "text": "Madhya Pradesh",
  "value": "Madhya Pradesh"
  },
  {
  "key": "MH",
  "text": "Maharashtra",
  "value": "Maharashtra"
  },
  {
  "key": "MN",
  "text": "Manipur",
  "value": "Manipur"
  },
  {
  "key": "ML",
  "text": "Meghalaya",
  "value": "Meghalaya"
  },
  {
  "key": "MZ",
  "text": "Mizoram",
  "value": "Mizoram"
  },
  {
  "key": "NL",
  "text": "Nagaland",
  "value":"Nagaland"
  },
  {
  "key": "OR",
  "text": "Odisha",
  "value":"Odisha"
  },
  {
  "key": "PY",
  "text": "Puducherry",
  "value": "Puducherry"
  },
  {
  "key": "PB",
  "text": "Punjab",
  "value":"Punjab"
  },
  {
  "key": "RJ",
  "text": "Rajasthan",
  "value":"Rajasthan"
  },
  {
  "key": "SK",
  "text": "Sikkim",
  "value":"Sikkim"
  },
  {
  "key": "TN",
  "text": "Tamil Nadu",
  "value":"Tamil Nadu"
  },
  {
  "key": "TS",
  "text": "Telangana",
  "value":"Telangana"
  },
  {
  "key": "TR",
  "text": "Tripura",
  "value":"Tripura"
  },
  {
  "key": "UK",
  "text": "Uttar Pradesh",
  "value":"Uttar Pradesh"
  },
  
  {
  "key": "UP",
  "text": "Uttarakhand",
  "value": "Uttarakhand"
  },
  {
  "key": "WB",
  "text": "West Bengal",
  "value": "West Bengal"
  }
  
  ]
export default class Addpform extends React.Component{
    state = { name: '', email: '', submittedName: '', submittedEmail: '' }
    
      handleChange = (e, { name, value }) => this.setState({ [name]: value })
    
    render(){
        const { name, email, state} = this.state
        return(
            <div>
                <Header1/>
                <br/><br/><br/><br/>
                <Grid>
                    <Grid.Column width={1}/>
                    <Grid.Column width={14}>
                <Header
                    as='h2'
                    icon='add circle'
                    content='Add Your Product'
                />
                <br/>
                <Form size='large' onSubmit={this.handleSubmit}>
          
            <Form.Input label='Product Name' placeholder='Product Name' name='name' value={name} onChange={this.handleChange} />
            <Form.Group widths='equal'>
                
             <Form.Select
             label='Category'
             placeholder = "Category"
             options={States}
             name="state" value={state} onChange={this.handleChange} search/>
             
             <Form.Select
             label='Type'
             placeholder = "Type"
             options={States}
             name="state" value={state} onChange={this.handleChange} search/>
        </Form.Group>
        <Form.Group widths='equal'>
                
            <Form.Input label='Rent Price' placeholder='Rent Price(leave blank if not available for rent)' name='name' value={name} onChange={this.handleChange} />
            
            <Form.Input label='Cost Price' placeholder='Cost Price(leave blank if not available for rent)' name='name' value={name} onChange={this.handleChange} />
        </Form.Group>
        <Form.TextArea label='Description' placeholder="write something about product(it's condition) , years of use, what this product do etc"/>
            <Form.Button content='Submit' />
       
        </Form>
                </Grid.Column>
                    <Grid.Column width={1}/>
                    </Grid>
                </div>
        )
    }
}