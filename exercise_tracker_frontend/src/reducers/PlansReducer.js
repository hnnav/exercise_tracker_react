export const plansReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_PLANS': 
            return action.payload
        case 'ADD_PLAN':
            return [...state, action.payload]
        default:
            return state
    }
}