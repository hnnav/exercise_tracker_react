import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addPlan } from '../actions/PlansActions'

class PlansForm extends Component {

    state = { 
        name: '',
        cut_off: '',
        goal: ''
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addPlan(this.state)
        this.setState({
            name: '',
            cut_off: '',
            goal: ''
        })
    }

    render() {
    return (
      <div>
        <h1>Add a new workout plan</h1>
        <form onSubmit={this.handleSubmit}>
            <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/><br/>
            <input type='text' placeholder='Due by date' value={this.state.cut_off} name="cut_off" onChange={this.handleChange}/><br/>
            <input type='number' placeholder='Number of workouts to complete' value={this.state.goal} name="goal" onChange={this.handleChange}/><br/>
            <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default connect(null, {addPlan})(PlansForm)