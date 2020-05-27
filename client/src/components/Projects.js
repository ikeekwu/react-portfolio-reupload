import React, {Component} from 'react';
import { List, Space} from 'antd';
import { GithubOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
const listData = [
  {
    href1: "",
    href2: "https://github.com/ikeekwu/Note-Taker",
    title: "Note Taker",
    description:
      "A note taking web app using Node and Express and storing notes in a JSON file."
  },
  {
    href1: "",
    href2: "https://github.com/ikeekwu/Fitness-Tracker",
    title: "Fitness Tracker",
    description: "Fitness tracker using MongoDB to"
  },
  {
    href1: "https://github.com/ikeekwu/Good-README-Gen",
    href2: "https://github.com/ikeekwu/Good-README-Gen",
    title: "Good Readme Generator",
    description:
      "A CLI using Node to create a Readme.md for any projects you would like to create."
  },
  {
    href1: "https://ikeekwu.github.io/password-gen/",
    href2: "https://github.com/ikeekwu/password-gen",
    title: "Password Generator",
    description:
      "Password generator for creating strong passwords for professional and personal use."
  },
  {
    href1: "",
    href2: "https://github.com/ikeekwu/Budget-Tracker",
    title: "Budget Tracker",
    description:
      "A budgeting web app using indexDB to store offline data and values."
  },
  {
    href1: "https://calm-eyrie-16452.herokuapp.com/",
    href2: "https://github.com/ikeekwu/employee-directory",
    title: "Employee Directory",
    description:
      "Employee directory built using React and the Ant Design component library. It also uses an API which randomly generates employee information. Clicking search after doing a search will bring unfiltered database back without refreshing and creating a new random database. You can search any parameter you would like, whether it be phone number, name, or state.",
  },
];


const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

class Projects extends Component {
render(){
return(
  <List
    itemLayout="vertical"
    size="large"
    dataSource={listData}

    renderItem={item => (
      <List.Item
        key={item.title}
        actions={[
          <a href={item.href2}><big><IconText icon={GithubOutlined} key="list-vertical-message" /></big></a>
        ]}
      >
        <List.Item.Meta
          title={<a href={item.href1}>{item.title}</a>}
          description={item.description}
        />
      </List.Item>
    )}
  />
)

}
    
}


export default Projects