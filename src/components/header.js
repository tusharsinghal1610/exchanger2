
import React, { Component } from 'react'
import { Menu, Segment, Header, Button, Icon, Search, Grid } from 'semantic-ui-react'
import _ from 'lodash'
import Drop from './greeting'
import Pcard from './Pcard'
const source = [
  {
    "title": "Lakin Group",
    "description": "Virtual mission-critical infrastructure",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/oskarlevinson/128.jpg",
    "price": "86.91"
  },
  {
    "title": "hellooooooooo",
    "description": "Triple-buffered discrete website",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/coreyginnivan/128.jpg",
    "price": "59.45"
  },
  {
    "title": "Schuster - Block",
    "description": "Down-sized encompassing time-frame",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/ecommerceil/128.jpg",
    "price": "45.78"
  },
  {
    "title": "Runte - Rippin",
    "description": "helloooooooo",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/spedwig/128.jpg",
    "price": "59.90"
  },
  {
    "title": "Becker, Mitchell and Mitchell",
    "description": "Grass-roots empowering hardware",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/fronx/128.jpg",
    "price": "67.15"
  }
]
var isLoggedin = () => {
  if (sessionStorage.getItem('userId')) {
    return true;
  }
  else if (localStorage.getItem('userId')) {
    sessionStorage.setItem('firstname', localStorage.getItem('firstname'));
    sessionStorage.setItem('userId', localStorage.getItem('userId'));
    sessionStorage.setItem('email', localStorage.getItem('email'));
    return true;
  } else {
    return false;
  }
}
export default class Header1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showResults: false,
      data:[],
      productSearchResults:[],
      value:""
    }
  }
  componentWillMount() {
    this.resetComponent()
  }
  componentDidMount() {
    console.log("componentdid mount");
    if (!sessionStorage.getItem("productListHere")) {
      
      fetch('http://localhost:8080/search', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      }).then((response) => response.json())
        .then((responseJson) => {
          if (!responseJson.empty) {
            this.setState({
              data: responseJson.products
            });
            sessionStorage.setItem("productlist",responseJson.products);
          }
        })
        .catch((error) => {
          console.log(error);
          console.log("erooooooooooooooor");
          this.setState({
            active: false,
          })
        });
    }
  }
  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) =>{
     this.setState({ value: result.productName });
  
     setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      var isMatch = result => ((re.test(result.productName) || re.test(result.keywords)));


      this.setState({
        isLoading: false,
        results: _.filter(this.state.data, isMatch),
      });
      this.setState({
         productSearchResults : this.state.results,
         showResults:true
      })
    }, 500) }

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      var isMatch = result => ((re.test(result.productName) || re.test(result.keywords)));


      this.setState({
        isLoading: false,
        results: _.filter(this.state.data, isMatch),
      })
    }, 500)
  }


  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem, isLoading, value, results, showResults } = this.state
    const loggedin = isLoggedin();
    let right = null;
    if (loggedin) {
      right = <Menu.Menu position='right'>
        <Menu.Item name="cart" href="/cart">
          <Icon name="cart" color="teal" />
          Cart
        </Menu.Item>
        <Menu.Item name="Notification" href="/notifications">
          <Icon name="bell" color="teal" />
          Notification
        </Menu.Item>
        <Menu.Item><Drop name={sessionStorage.getItem("firstname")} /></Menu.Item>
      </Menu.Menu>;
    }
    else {
      right = <Menu.Menu position='right'>

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
          <Menu.Item /><Menu.Item /><Menu.Item /><Menu.Item /><Menu.Item /><Menu.Item /><Menu.Item /><Menu.Item /><Menu.Item /><Menu.Item /><Menu.Item /><Menu.Item /><Menu.Item /><Menu.Item />
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

        {(showResults) ? <div><br /><br /><br /><Header
          as='h2'
          icon='search'
          content='Search Results'
        />
          <Grid padded>
            <Grid.Row columns={5} stackable>
              
              {this.state.productSearchResults.map((product)=><Grid.Column key={product.productId}><Pcard imgurl={"http://localhost:8080/images/"+product.img1} productname={product.productName} type={product.type} buyprice={product.price} rentprice={product.rent} productId={product.productId} onChange={this.handleproductchange}/></Grid.Column>)}
            </Grid.Row>
          </Grid></div> : ""}
        <div>

        </div>
      </div>
    )
  }
}
