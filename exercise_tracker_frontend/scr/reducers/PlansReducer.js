export const plansReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_PLANS': 
            return action.payload
        default:
            return state
    }
}