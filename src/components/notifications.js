import React, { Component } from 'react'
import { Grid,Header } from 'semantic-ui-react'
import Notification from './notification'
import Header1 from './header'
export default class Notifications extends React.Component {
    render() {
        return (
            <div>
                <Header1/>
                <br/><br/><br/><br/>
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
            </div>
        )
    }
}