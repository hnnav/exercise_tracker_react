export const fetchWorkouts = () => {
    return dispatch => {
        fetch('http://localhost:3000/work_outs')
        .then(resp => resp.json())
        .then(workouts => dispatch({ type: 'FETCH_WORKOUTS', payload: workouts}))
    }
}

export const addWorkout = (workout) => {
    return dispatch => {
        fetch('http://localhost:3000/work_outs', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(workout => dispatch({ type: 'ADD_WORKOUT', payload: workout}))
    }
}