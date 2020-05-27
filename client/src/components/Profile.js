import React, { Component } from 'react';
import { Card } from 'antd';
import { LinkedinOutlined, GithubOutlined} from '@ant-design/icons';

const { Meta } = Card;
class Profile extends Component {

render() {
return(
<Card
style={{ width: 200 }}
cover={
<img
alt="example"
src= "https://twitter.com/innanetto/photo"
/>
}
actions={[ <a href="https://www.linkedin.com/in/ikechi-ekwueme-1248271a2/"><LinkedinOutlined key = "linkedin" /></a>
,<a href="https://github.com/ikeekwu"> <GithubOutlined key = "github" /></a>
      
]}
>
<Meta
title="Ike Ekwueme"
description="Fullstack developer looking for long term learning in the industry."
/>
</Card>  

)
}
}

export default Profile;