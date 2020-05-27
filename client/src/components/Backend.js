import React, { Component}from 'react';
import { List, Avatar } from 'antd';


class Backend extends Component {
render() {
const data = [
  {
    title: 'Node.js'
  },
  {
    title: 'Express',
  },
  {
    title: 'JSON',
  },
  {
    title: 'MySQL'
  },
  {
    title: 'MongoDB',
  },
  {
    title: 'Sequelize'
  },
  {
    title: 'Mongoose'
  }
];  

return(
<List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
    <List.Item>
    <List.Item.Meta
    title={item.title}
    />
    </List.Item>
    )}
    />  
)
}
}

export default Backend;