
import React, { Component } from 'react'
import { Menu, Segment, Header,Button,Icon,Search,Grid } from 'semantic-ui-react'
import _ from 'lodash'
import Drop from './greeting'
const source=[
  {
    "title": "Lakin Group",
    "description": "Virtual mission-critical infrastructure",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/oskarlevinson/128.jpg",
    "price": "$86.91"
  },
  {
    "title": "O'Reilly - Wolff",
    "description": "Triple-buffered discrete website",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/coreyginnivan/128.jpg",
    "price": "$59.45"
  },
  {
    "title": "Schuster - Block",
    "description": "Down-sized encompassing time-frame",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/ecommerceil/128.jpg",
    "price": "$45.78"
  },
  {
    "title": "Runte - Rippin",
    "description": "Virtual scalable local area network",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/spedwig/128.jpg",
    "price": "$59.90"
  },
  {
    "title": "Becker, Mitchell and Mitchell",
    "description": "Grass-roots empowering hardware",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/fronx/128.jpg",
    "price": "$67.15"
  }
]
var isLoggedin=()=>{
    if(sessionStorage.getItem('userId')){
        return true;
    }
    else if(localStorage.getItem('userId')){
            sessionStorage.setItem('firstname',localStorage.getItem('firstname'));
            sessionStorage.setItem('userId',localStorage.getItem('userId'));
            sessionStorage.setItem('email',localStorage.getItem('email'));                
            return true;
    }else{
        return false;
    }
}
export default class Header1 extends Component {
  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      var isMatch = result => (re.test(result.title))
      

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
      })
    }, 500)
  }


  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem, isLoading, value, results } = this.state
    const loggedin=isLoggedin();
    let right=null;
    if(loggedin){
         right= <Menu.Menu position='right'>
         <Menu.Item name="cart" href = "#">
        <a href="cart"><Icon name="cart" color="teal"/>
        Cart</a>
        </Menu.Item>
        <Menu.Item name="Notification" href = "#">
        <a href="notifications"><Icon name="bell" color="teal"/>
        Notification</a>
        </Menu.Item>
        <Menu.Item><Drop name={sessionStorage.getItem("firstname")}/></Menu.Item>
          </Menu.Menu>;
    }
    else{
        right=<Menu.Menu position='right'>
        
            <a href="/login" className='styleloginsignup'><Button primary compact>log-in</Button></a>
            <a href="/signup" className='styleloginsignup'><Button primary compact>signup</Button></a>
       
         </Menu.Menu>;
    }
    return (
      <div>
        <Menu pointing secondary fixed='top'>
          
        <Menu.Item name="Logo" href="/">
          <Header as='h6'>
          <img src='/Assets/logo.png' />EXCHANGER</Header>
        </Menu.Item>
        <Menu.Item/><Menu.Item/><Menu.Item/><Menu.Item/><Menu.Item/><Menu.Item/><Menu.Item/><Menu.Item/><Menu.Item/><Menu.Item/><Menu.Item/><Menu.Item/><Menu.Item/><Menu.Item/>
        <Menu.Item name="searchbar" position='center'>
            <Search
              size='small'
              loading={isLoading}
              onResultSelect={this.handleResultSelect}
              onSearchChange={this.handleSearchChange}
              results={results}
              value={value}
              {...this.props}
            />
            </Menu.Item>
          {right}
        </Menu>
        <div>
          
          </div>
      </div>
    )
  }
}
