import React, { Component } from 'react'
import { Grid,Header,Responsive } from 'semantic-ui-react'
import Notification from './notification'
import Header1 from './header';
import Postad from './postad';
export default class Notifications extends React.Component {
    render() {
        return (
            <div>
                <Header1/>
                
  <Responsive minWidth={1125}><br /><br /><br /><br /></Responsive>
                <Grid>
                    <Grid.Column width={2} />
                    <Grid.Column width={12}>
                    <Header
                    as='h2'
                    icon='bell'
                    content='Your Notifications'
                />
                        <Notification />
                        <Notification />
                        <Notification />
                        <Notification />
                        <Notification />
                    </Grid.Column>
                    <Grid.Column width={2} />
                </Grid>
                <Postad/>
            </div>
        )
    }
}