import React, {Component} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Dropdown , Select, Dimmer, Icon} from 'semantic-ui-react'
import Header1 from './header'

const cities =[

]
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
export default class Signup extends Component {
  state={
    firstname:'',
    lastname:'',
    email:'',
    username:'',
    password:'',
    confirmPassword:'',
    city:'',
    state:'',
    pin:'',
    address1:'',
    address2:'', 
}
handleChange=(e,{name,value})=>{
  this.setState({[name]:value});
}
handleClose = () => this.setState({ active: false })
handleSubmit=e=>{
  if(this.state.firstname.length<1||this.state.lastname.length<1||this.state.username.length<1||this.state.email.length<1||this.state.password.length<1||this.state.confirmPassword.length<1||this.state.country.length<1||this.state.state.length<1||this.state.pin.length<1||this.state.address1.length<1){
        this.setState({errorHeader:'Field is Empty'})
        this.setState({errorMessage:'All Fields are Required!'})
        this.setState({active:true});
    }
    else if(this.state.password!==this.state.confirmPassword){
        this.setState({errorHeader:'Password Mismatch'})
        this.setState({errorMessage:'Password and Confirm Password should Match'})
        this.setState({active:true});
    }else if(this.state.password.length<6){
        this.setState({errorHeader:'Password is so small'})
        this.setState({errorMessage:'Password length must be greater than 6'})
        this.setState({active:true});
    }
    else{ 
      fetch('http://localhost:8080/',{
          method:'POST',
          headers:{
              'Accept':'application/json',
              'Content-Type':'application/json',
          },
          body:JSON.stringify({
                  "firstname":this.state.firstname,
                  "lastname":this.state.lastname,
                  "email":this.state.email,
                  "username":this.state.username,
                  "password":this.state.password,
                  "address1":this.state.address1,
                  "address2":this.state.address2,
                  "city":this.state.city,
                  "state":this.state.state,
                  "pin":this.state.pin
          })
      }).then((response)=>response.json())
          .then((responseJson)=>{
              if(responseJson.success==false){
                console.log("registration failed");
                this.setState({
                  active:true,
                  errorHeader:"your registration can't be done",
                  errorMessage:responseJson.error

                })
              }else if(responseJson.success){
                console.log("registration done");
                  this.setState({
                      active:true,
                      errorHeader:'Your registration is done!',
                      errorMessage:'Now go to your email and verify the link'
                  })
              }
          })
          .catch((error)=>{
              console.log(error);
              console.log("erooooooooooooooor");
          });
}
}
render(){
  
  const {firstname,lastname,email,username,password,confirmPassword,city,state,pin,address1,address2,active,errorHeader,errorMessage}=this.state;
  var mystyle={
    backgroundColor:'#ebebe0'
  }
return (
    <div>
  <Header1/>  
  <div style={mystyle}>

  <br/><br/><br/><br/>
    <Grid
      centered
    >
      <Grid.Column computer={8} mobile={16}>
        <Header as='h2' color='teal' textAlign='center'>
          Sign Up
        </Header>
        <Form size='large' onSubmit={this.handleSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='First name'
              name='firstname'
              value={firstname} onChange={this.handleChange}
            />
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='Last name'
              name='lastname'
              value={lastname} onChange={this.handleChange}
            />


            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='Username'
              name='username'
              value={username} onChange={this.handleChange}
            />
           
             <Form.Input
              fluid
              icon='mail'
              iconPosition='left'
              placeholder=' Email'
              type='email'
              name='email'
              value={email} onChange={this.handleChange}
              required
            />
             <Form.Select
             placeholder = "State"
             options={States}
             name="state" value={state} onChange={this.handleChange} search/>

             <Form.Input
             icon="marker"
             iconPosition="left"
             placeholder = "City"
             name="city" value={city} onChange={this.handleChange}/>

             <Form.Input
              fluid
              icon='home'
              iconPosition='left'
              placeholder='Address Line One'
              name='address1'
              value={address1} onChange={this.handleChange}
            />

            <Form.Input
              fluid
              icon='home'
              iconPosition='left'
              placeholder='Address Line Two'
              name='address2'
              value={address2} onChange={this.handleChange}
            />
            

            <Form.Input
              fluid
              icon='home'
              iconPosition='left'
              placeholder='Pin'
              name='pin'
              value={pin} onChange={this.handleChange}
            />
            
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              name='password'
              value={password} onChange={this.handleChange}
            />
             <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Confirm Password'
              type='password'
              name='confirmPassword'
              value={confirmPassword} onChange={this.handleChange}
            />
            

            <Form.Button type='submit' color='teal' fluid size='large'>Signup</Form.Button>
          </Segment>
        </Form>
        <Dimmer
          active={active}
          onClickOutside={this.handleClose}
          page
        >
          <Header as='h2' icon inverted>
           
            {errorHeader}!
            <Header.Subheader>{errorMessage}</Header.Subheader>
          </Header>
        </Dimmer>
      </Grid.Column>
    </Grid>
  </div>
  </div>
)
}
}
