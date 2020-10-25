export const workoutsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_WORKOUTS': 
            return action.payload
        case 'ADD_WORKOUTS':
            return action.payload
        default:
            return state
    }
}