import React, { Component } from 'react';
import { Card } from 'antd';
import { Row, Col } from 'antd';
import './Bio.css'
class Bio extends Component {
render() {
    return(
    <div className="site-card-border-less-wrapper">
    <Card className="bio" title="Biography" bordered={false} style={{ width: "100%" }}>

        <big>
        I am a web developer that is new that is new to the industry looking for opportunities to learn, grow my career, and provide long term value. I have experience in the service industry and gained communication skill throughout my time there.
        However, the ceiling for growth wasn't all too high and I needed a change of pace so I turned to the software and tech industry for the solution. I have always had a love for technology but saw the love as simply a hobby, so over the course of the last two years I have spent time slowly diving into the industry and learning all that I can.
        </big>


    </Card>
  </div> 
        )
    }
}

export default Bio;