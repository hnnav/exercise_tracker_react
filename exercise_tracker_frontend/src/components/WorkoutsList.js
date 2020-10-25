import React from 'react';
import { connect } from 'react-redux'

import {fetchWorkouts} from '../actions/WorkoutsActions'

const WorkoutsList = ( {workouts} ) => {
    return (
        <div>
            <h1>Completed workouts</h1>
            {workouts.map(workout => 
                <ul key={workout.id}>
                    <li >
                        {workout.date} - {workout.workout_type} for {workout.duration} minutes
                    </li>
                </ul>
        )}
        </div>
    );
};

const mapStateToProps = state => {
    return { workouts: state.workouts }
}

export default connect(mapStateToProps, {fetchWorkouts})(WorkoutsList);