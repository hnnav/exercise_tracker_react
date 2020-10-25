import React, { Component } from 'react'
import { connect } from 'react-redux'

import WorkoutsForm from '../components/WorkoutsForm'
import WorkoutsList from '../components/WorkoutsList'
import { fetchWorkouts } from '../actions/WorkoutsActions'

class WorkoutsContainer extends Component {

    componentDidMount() {
        this.props.fetchWorkouts()
    }

    render() {
        return (
            <div>
                <WorkoutsForm />
                <WorkoutsList />
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return { workouts: state.workouts }
// }

export default connect(null, {fetchWorkouts})(WorkoutsContainer);