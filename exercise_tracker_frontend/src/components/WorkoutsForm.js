import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addWorkout } from '../actions/WorkoutsActions'

class WorkoutsForm extends Component {

    state = { 
        workout_type: '',
        date: '',
        duration: ''
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addWorkout(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <label>Date</label>
                <input type="text" name="date" value={this.state.date} onChange={this.handleChange}/>
                <br/>

                <label>Type of workout</label>
                <input type="text" name="workout_type" value={this.state.workout_type} onChange={this.handleChange}/>
                <br/>

                <label>Duration in minutes</label>
                <input type="number" name="duration" value={this.state.duration} onChange={this.handleChange}/>
                <br/>

                <input type="submit" value="Create workout"/>
                
            </form>
        )
    }
}

export default connect(null, { addWorkout })(WorkoutsForm);