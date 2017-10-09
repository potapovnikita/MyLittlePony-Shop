import React, { Component } from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import * as Routes from './routes'

import history from './libs/history'


export default class extends Component {
    render() {
        return <Router history={history}>
            <Switch>
                <Route exact path="/" component={ Routes.Main } />
                <Redirect from='/*' to='/' />
            </Switch>
        </Router>
    }
}