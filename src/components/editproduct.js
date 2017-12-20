import React, { Component } from 'react';

import { Header, Grid, Button, Icon, Form,Dimmer } from 'semantic-ui-react';
import { Modal } from 'antd';
import Upload from 'antd/lib/upload';
import 'antd/lib/upload/style/css';
import Header1 from './header';
const States = [

  {
    "key": "AN",
    "text": "electronics",
    "value": "electronics"
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
    "value": "Daman and Diu"
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
    "value": "Nagaland"
  },
  {
    "key": "OR",
    "text": "Odisha",
    "value": "Odisha"
  },
  {
    "key": "PY",
    "text": "Puducherry",
    "value": "Puducherry"
  },
  {
    "key": "PB",
    "text": "Punjab",
    "value": "Punjab"
  },
  {
    "key": "RJ",
    "text": "Rajasthan",
    "value": "Rajasthan"
  },
  {
    "key": "SK",
    "text": "Sikkim",
    "value": "Sikkim"
  },
  {
    "key": "TN",
    "text": "Tamil Nadu",
    "value": "Tamil Nadu"
  },
  {
    "key": "TS",
    "text": "Telangana",
    "value": "Telangana"
  },
  {
    "key": "TR",
    "text": "Tripura",
    "value": "Tripura"
  },
  {
    "key": "UK",
    "text": "Uttar Pradesh",
    "value": "Uttar Pradesh"
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
export default class EditProduct extends React.Component {
  state = {
    productName: '',
    type:'',
    category:'',
    price:'',
    rent:'',
    description:'',
    previewVisible: false,
    previewImage: '',
    fileURL: [],
    fileList: [],
    productId: "",
    keywords:"",
    active:false,
    show:false
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }
  
handleClose = () => this.setState({ active: false })
  handleChangeImage = ({ fileList }) => {
    var URLs = [];
    for (var item in fileList) {
      if (fileList[item].response) {
        URLs.push(fileList[item].response.message)
      }
    }
    this.setState({ fileURL: URLs });
    this.setState({ fileList })
  }
  componentDidMount() {
    console.log('Component Did MOUNT!');
    console.log('the product id is '+this.props.match.params.productId);
    fetch('http://localhost:8080/product/edit?userId='+sessionStorage.getItem("userId")+'&productId='+this.props.match.params.productId, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((response) => response.json())
      .then((responseJson) => {
       if(responseJson.success){
         console.log(responseJson.product.category);
           this.setState({
            productName: responseJson.product.productName,
            type: responseJson.product.type,
            category: responseJson.product.category,
            price: responseJson.product.price,
            rent: responseJson.product.rent,
            keywords:responseJson.product.keywords,
            description: responseJson.product.description
           })
       }
       else{
           this.setState({
               active:true,
               errorHeader:"Unauthorized",
               errorMessage:"you are not an authorized user to edit this page"
        });
       }
      })
      .catch((error) => {
        console.log(error);
        console.log("erooooooooooooooor");

      });
  }
  handleFormSubmit = () => {
    if(this.state.productName.length<1||this.state.category.length<1||this.state.type.length<1||this.state.description.length<1){
          this.setState({errorHeader:'Field is Empty'})
          this.setState({errorMessage:'All Fields are Required!'})
          this.setState({active:true});
      }
      else if(this.state.rent<1 && this.state.price<1){
        this.setState({
          errorHeader:"Field is Empty",
          errorMessage:"enter atleast one price, rent price or selling price",
          active:true
        })
      }
      else{ 
        fetch('http://localhost:8080/product/data',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                    "productName":this.state.productName,
                    "category":this.state.category,
                    "type":this.state.type,
                    "rent":this.state.rent,
                    "price":this.state.price,
                    "description":this.state.description,
                    "productId":this.state.productId,
                    "userid":sessionStorage.getItem("userId"),
                    "keywords":this.state.keywords,
                    "email":sessionStorage.getItem('email')
            })
        }).then((response)=>response.json())
            .then((responseJson)=>{
                
                  console.log("product uploaded");    
                  this.setState({
                        active:true,
                        errorHeader:'Your Product is updated!',
                        errorMessage:<div>Thanks for being a part here</div>,
                        show:true
                    })
                
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
    const { productName,category,type,rent,price,description,keywords, previewVisible, previewImage, fileList,active,errorHeader,errorMessage,show } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div>
        <Header1 />
        <br /><br /><br /><br />
        <Grid>
          <Grid.Column width={1} />
          <Grid.Column width={14}>
            <Header
              as='h2'
              icon='add circle'
              content='Edit Your Product'
            />
            <br />
            <Form size='large' onSubmit={this.handleFormSubmit}>

              <Form.Input label='Product Name' placeholder='Product Name' name='productName' value={productName} onChange={this.handleChange} />
              <Form.Group widths='equal'>

                <Form.Select
                  label='Category'
                  placeholder="Category"
                  options={States}
                  name="category" value={category} onChange={this.handleChange} search />

                <Form.Select
                  label='Type'
                  placeholder="Type"
                  options={States}
                  name="type" value={type} onChange={this.handleChange} search />
              </Form.Group>
              <Form.Group widths='equal'>

                <Form.Input label='Rent Price' placeholder='Rent Price(leave blank if not available for rent)' name='rent' value={rent} onChange={this.handleChange} />

                <Form.Input label='Sell Price' placeholder='Cost Price(leave blank if not available for selling)' name='price' value={price} onChange={this.handleChange} />
              </Form.Group>
              <Form.TextArea label='Keywords' name='keywords' value={keywords} onChange={this.handleChange} placeholder="write Keywords here that will help search your product better,(don't write words like is ,in ,for, it)for eg :write like 2gb ram white" />
              <Form.TextArea label='Description' name='description' value={description} onChange={this.handleChange} placeholder="write something about product(it's condition) , years of use, what this product do etc" />
              <b>Upload images</b>
              <br />
              <Upload
                action={'http://localhost:8080/product/upload'}
                listType="picture-card"
                data={{
                  productId: this.state.productId
                }}
                fileList={fileList}
                accept="image/*"
                multiple={true}
                onPreview={this.handlePreview}
                onChange={this.handleChangeImage}
                className='upload-list-inline'
              >
                {fileList.length >= 4 ? null : uploadButton}
              </Upload>
              <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
              </Modal>
              <Form.Button content='Submit' />
            </Form>

          </Grid.Column>
          <Grid.Column width={1} />
        </Grid>
        <Dimmer
          active={active}
          onClickOutside={this.handleClose}
          page
        >
          <Header as='h2' icon inverted>
            {errorHeader}!
            <Header.Subheader>{errorMessage}{(show)?<a href='http://localhost:3000'><Button primary>Proceed to Home page</Button></a>:<div></div>}</Header.Subheader>

          </Header>


        </Dimmer>
      </div>
    )
  }
}