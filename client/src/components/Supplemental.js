import React, { Component}from 'react';
import { List, Avatar } from 'antd';


class Supplemental extends Component {
render() {
const data = [
  {
    title: 'Git',
  },
  {
    title: 'Heroku',
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

export default Supplemental;