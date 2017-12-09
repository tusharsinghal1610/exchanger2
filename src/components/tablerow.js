import React, { Component } from 'react'
import { Table,Dropdown } from 'semantic-ui-react'
const options = [
    { key: 1, text: 'Choice 1', value: 1 },
    { key: 2, text: 'Choice 2', value: 2 },
    { key: 3, text: 'Choice 3', value: 3 },
  ]
export default class Tabler extends React.Component{
  constructor(props){
    super(props);
    this.state={
      value:1
    }
  }
    
      handleChange = (e, { value }) => this.setState({ value })
    render(){
        const { value } = this.state
        return(
                
                <Table.Row>
                <Table.Cell>{this.props.name}</Table.Cell>
                <Table.Cell>{this.props.buyPrice}</Table.Cell>
                <Table.Cell>{this.props.rentPrice}</Table.Cell>
                <Table.Cell>   <Dropdown compact onChange={this.handleChange} options={options} placeholder='Choose an option' selection value={value}/> </Table.Cell>
              </Table.Row>
                

        )
    }
}