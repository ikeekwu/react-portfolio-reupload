import React, { Component}from 'react';
import { List, Avatar } from 'antd';


class Frontend extends Component {
render() {
const data = [
  {
    title: 'HTML5',
    description: ''
  },
  {
    title: 'CSS',
  },
  {
    title: 'Javascript',
  },
  {
    title: 'Bootstrap'
  },
  {
    title: 'React.js',
  },
  {
    title: 'Ant Design'
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

export default Frontend;