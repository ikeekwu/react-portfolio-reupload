import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    AppstoreOutlined,
    MailOutlined
} from '@ant-design/icons';
import './Layout.css'
import About from './About';
import Contact from './Contact';
import Projects from './Projects'




const { Header, Sider, Content, Footer } = Layout;
class Layouts extends Component {

state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Router>
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                About Me
                <Link to="/" />
              </Menu.Item>
              <Menu.Item key="2" icon={<AppstoreOutlined />}>
                Projects
                <Link to="/Projects" />
              </Menu.Item>
              <Menu.Item key="3" icon={<MailOutlined />}>
                Contact Me
                <Link to="/Contact" />
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout
            className="site-layout"
            style={{
              minHeight: "100vh"
            }}
          >
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(
                this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: this.toggle,
                }
              )}
              <h1>Ike's Portfolio</h1>
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
              }}
            >
              <Route className="about" exact path="/" component={About} />
              <Route exact path="/Projects" component={Projects} />
              <Route exact path="/Contact" component={Contact}/> 
            </Content>
            <Footer>
              <small>My Portfolio</small>
            </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default Layouts;