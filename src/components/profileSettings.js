import React, { Component } from 'react';
import { Header,Grid,Accordion,Icon,Form,Dimmer } from 'semantic-ui-react';
import Header1 from './header';
import Postad from './postad';
export default class ProfileSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            active: false,
            newPassword:"",
            currentPassword:"",
            confirmPassword:""
        }
    }
  
  handleChange = (e, { name, value }) => this.setState({ [name]: value });
  handleClose = () => this.setState({ active: false });
  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }
  handleFormSubmit1 = () => {
    if(this.state.newPassword.length<6||this.state.confirmPassword.length<6){
          this.setState({errorHeader:'Password Not Strong'})
          this.setState({errorMessage:'More characters in Password required!'})
          this.setState({active:true});
      }
      else if(this.state.newPassword!=this.state.confirmPassword){
        this.setState({
          errorHeader:"Matching Mistake",
          errorMessage:"New Password and Confirm Password fields didn't match",
          active:true
        })
      }
      else{ 
        fetch('http://localhost:8080/user/changePassword',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                    "currentPassword":this.state.currentPassword,
                    "newPassword":this.state.newPassword,
                    "userid":sessionStorage.getItem("userId")
            })
        }).then((response)=>response.json())
            .then((responseJson)=>{
                if(responseJson.success){
                    console.log("password changed");    
                    this.setState({
                          active:true,
                          errorHeader:'Thanks for being a part here!',
                          errorMessage:<div>Your Password is changed successfully</div>,
                          show:true
                      });
                }
                else{
                    console.log("current password didn't match");
                    this.setState({
                        active:true,
                        errorHeader:'Error!',
                        errorMessage:<div>Current password is not correct</div>,
                        show:true
                    });
                }
                  
                
            })
            .catch((error)=>{
                console.log(error);
                console.log("erooooooooooooooor");
                this.setState({
                  active:true,
                  errorHeader:'error!',
                  errorMessage:'an unexpected error occured'
              }) 
            });
  }
  }
    render() {
        const {currentPassword,newPassword,confirmPassword,active,errorHeader,errorMessage}=this.state;
        const { activeIndex } = this.state;
        return (
            <div>
                <Header1 />
                <br /><br /><br /><br />
                <Grid>
                    <Grid.Column width={3} />
                    <Grid.Column width={10}>
                        <Header
                            as='h2'
                            icon='cart'
                            content='Profile Settings'
                        />
                        <Accordion styled fluid>
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Change Password
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
        <Form size='large' onSubmit={this.handleFormSubmit1}>

              <Form.Input label='Current Password' placeholder='Current Password' name='currentPassword' value={currentPassword} onChange={this.handleChange} />
              <Form.Input label='New Password' placeholder='New Password' name='newPassword' value={newPassword} onChange={this.handleChange} />
              <Form.Input label='Confirm Password' placeholder='Confirm Password' name='confirmPassword' value={confirmPassword} onChange={this.handleChange} />
              <Form.Button content='Submit' />    
        </Form>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
          <Icon name='dropdown' />
          What kinds of dogs are there?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of
            {' '}dog that they find to be compatible with their own lifestyle and desires from a companion.
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
          <Icon name='dropdown' />
          How do you acquire a dog?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.
          </p>
          <p>
            A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to
            {' '}assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your
            {' '}dog from a shelter, helps give a good home to a dog who may not find one so readily.
          </p>
        </Accordion.Content>
      </Accordion>
                    </Grid.Column>
                    <Grid.Column width={3} />
                </Grid>
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
        <Postad/>
            </div>
        )
    }
}