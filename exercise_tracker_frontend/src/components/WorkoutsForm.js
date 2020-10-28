import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addWorkout } from '../actions/WorkoutsActions'

class WorkoutsForm extends Component {

    state = { 
        workout_type: '',
        date: '',
        duration: ''
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addWorkout(this.state)
        this.setState({
          workout_type: '',
          date: '',
          duration: ''
        })
    }

    render() {
    return (
      <div>
        <h1>Add a new workout</h1>
        <form onSubmit={this.handleSubmit}>
            <input type='text' placeholder='Date' value={this.state.date} name="date" onChange={this.handleChange}/><br/>
            <input type='text' placeholder='Type of workout' value={this.state.workout_type} name="workout_type" onChange={this.handleChange}/><br/>
            <input type='number' placeholder='Duration' value={this.state.duration} name="duration" onChange={this.handleChange}/><br/>
            <input type="submit"/>
        </form>
      </div>
    )
  }
}


export default connect(null, {addWorkout})(WorkoutsForm)