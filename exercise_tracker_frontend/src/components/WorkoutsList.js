import React from 'react';
import { connect } from 'react-redux'

import {fetchWorkouts} from '../actions/WorkoutsActions'

class WorkoutsList extends React.Component {

    componentDidMount(){
        this.props.fetchWorkouts();
    }
    render(){
        console.log(this.props.workouts)
         return (
        <div>
            <h1> Completed workouts </h1>
            {this.props.workouts.map(workout => 
                <ul key={workout.id}>
                    <li >
                        {workout.date} - {workout.workout_type} - {workout.duration} minutes
                    </li>
                </ul>
        )}
        </div>
        );
    }
    
};

const mapStateToProps = (state) => {
    return{
        workouts: state.workouts
    }
}

export default connect(mapStateToProps, {fetchWorkouts})(WorkoutsList);