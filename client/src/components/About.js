import React, { Component } from 'react';
import { StickyContainer, Sticky } from "react-sticky";
import { Tabs} from "antd";
import { Row, Col } from 'antd';
import { Divider } from 'antd';
import Frontend from './Frontend';
import Backend from './Backend';
import Supplemental from './Supplemental';
import Profile from './Profile';
import Bio from './Bio'
import './About.css'
const { TabPane } = Tabs;

class About extends Component {



render() {

 let renderTabBar = (props, DefaultTabBar) => (
  <Sticky bottomOffset={80}>
    {({ style }) => (
      <DefaultTabBar
        {...props}
        className="site-custom-tab-bar"
        style={{ ...style }}
      />
    )}
  </Sticky>
);
    return (
      <StickyContainer className = "tabHeader" >
        <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
          <TabPane tab="About" key="1">
          <div>
          <Row>
          <Col flex="20%"><Profile/></Col>
          <Col flex="66%" bordered={false}>
            <Bio />
          </Col>
          </Row>
          <Row>

          </Row>
          </div>
          </TabPane>
          <TabPane tab="Technologies" key="2">
          <Divider orientation="left">Front End</Divider>
          <Frontend />
          <Divider orientation="left">Backend</Divider>
          <Backend />
          <Divider orientation="left">Supplemental</Divider>
          <Supplemental />
          </TabPane>
        </Tabs>
      </StickyContainer>
    );
};
}


export default About;