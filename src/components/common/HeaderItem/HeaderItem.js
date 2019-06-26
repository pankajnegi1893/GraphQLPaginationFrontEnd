import React from 'react';

import { Header, Button, Left, Right, Body, Icon, Title } from 'native-base';

const HeaderItem = (props) => {
    return (
        <Header 
        style={{backgroundColor:'white'}}
        androidStatusBarColor='white'
        iosBarStyle='light-content'
        hasTabs>
          <Left >
            <Button transparent>
              <Icon name='arrow-back'  style={{color: 'black'}}/>
            </Button>
          </Left>
          <Body>
            <Title titleText={props.titleText} style={{color: 'black'}}>{props.titleText}</Title>
          </Body>
          <Right>
          </Right>
        </Header>
   
    )
}

export { HeaderItem };