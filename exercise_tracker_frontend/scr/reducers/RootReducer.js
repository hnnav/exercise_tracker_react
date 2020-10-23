import { combineReducers } from 'redux'
import { workoutsReducer } from './workoutsReducer'
import { plansReducer } from './PlansReducer'

export const rootReducer = combineReducers({
    workouts: workoutsReducer,
    plans: plansReducer
})