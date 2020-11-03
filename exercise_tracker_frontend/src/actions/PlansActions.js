export function fetchPlans() {
  return dispatch => {
    fetch('http://localhost:3000/plans')
    .then(resp => resp.json())
    .then(plans => dispatch({
      type: 'FETCH_PLANS',
      payload: plans
    }))
  }
}

export const addPlan = (plan) => {

  return dispatch => {
    console.log(plan)
    fetch('http://localhost:3000/plans', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(plan)
    })
    .then(response => response.json())
    .then(plan => dispatch({type: 'ADD_PLAN', payload: plan}))
  }

}