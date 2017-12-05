import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'profile settings', value: 1 },
  { key: 2, text: <a href='addproduct'>My Products</a>, value: 2 },
  { key: 3, text: 'History', value: 3 }
  
]

const Drop = (props) => (
  <Dropdown text={"Hello " + props.name} options={options} />
)

export default Drop