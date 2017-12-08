import React, { Component } from 'react';

import { Header, Grid, Button, Icon, Form } from 'semantic-ui-react';
import {  Modal } from 'antd';
import Upload from 'antd/lib/upload';  
import 'antd/lib/upload/style/css';
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
    state = { name: '', 
              email: '', 
              submittedName: '',
              submittedEmail: '',
              previewVisible: false,
              previewImage: '',
              fileURL:[],
              fileList: [],
              productid:""
            }
    
      handleChange = (e, { name, value }) => this.setState({ [name]: value })
      handlePreview = (file) => {
        this.setState({
          previewImage: file.url || file.thumbUrl,
          previewVisible: true,
        });
      }
      handleChangeImage = ({ fileList }) => {
        var URLs=[];
        for(var item in fileList){
          if(fileList[item].response){
            URLs.push(fileList[item].response.message)
          }
        }
        this.setState({fileURL:URLs});
        this.setState({ fileList })
      }
      componentWillMount() {
        console.log('Component WILL MOUNT!');
        fetch('http://localhost:8080/upload/getproductid', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              "email": "hello"
          })
      }).then((response) => response.json())
          .then((responseJson) => {
            
                  console.log("got product id");
                  this.setState({
                    productid:responseJson.productId
                  });
                  console.log("got product id   "+this.state.productid);
          })
          .catch((error) => {
              console.log(error);
              console.log("erooooooooooooooor");
              
          });
     }
    render(){
        const { name, email, state,previewVisible, previewImage, fileList} = this.state;
        const uploadButton = (
            <div>
              <Icon type="plus" />
              <div className="ant-upload-text">Upload</div>
            </div>
          );
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
            
            <Form.Input label='Sell Price' placeholder='Cost Price(leave blank if not available for selling)' name='name' value={name} onChange={this.handleChange} />
        </Form.Group>
        <Form.TextArea label='Description' placeholder="write something about product(it's condition) , years of use, what this product do etc"/>
        <b>Upload images</b>
        <br/>
            <Upload
          action= {'http://localhost:8080/upload'}
          listType="picture-card"
          fileList={fileList}
          accept="image/*"
          multiple={true}
          onPreview={this.handlePreview}
          onChange={this.handleChangeImage}
          className='upload-list-inline'
          >
          {fileList.length >= 5 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
        <Form.Button content='Submit' />
        </Form>

                </Grid.Column>
                    <Grid.Column width={1}/>
                    </Grid>
                </div>
        )
    }
}