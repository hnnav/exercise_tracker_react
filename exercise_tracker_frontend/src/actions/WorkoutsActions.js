export function fetchWorkouts() {
  return (dispatch) => {
    fetch('http://localhost:3000/work_outs')
    .then(resp => resp.json())
    .then(workouts => dispatch({
      type: 'FETCH_WORKOUTS',
      payload: workouts
    }))
  }
}

export const addWorkout = (data) => {

  return (dispatch) => {
    fetch('http://localhost:3000/work_outs', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(workout => dispatch({type: 'ADD_WORKOUT', payload: workout}))
  }

}