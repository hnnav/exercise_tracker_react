import React from 'react'
import { connect } from 'react-redux'

import Router from './components/Router'
import NavBar from './components/NavBar'
import { Component } from 'react'
import {fetchWorkouts} from './actions/WorkoutsActions'

class App extends Component {
    
    render(){
        return (
            <div>
                <NavBar />
                <Router />
            </div>
        )
    }
}

export default connect(null, {fetchWorkouts})(App);