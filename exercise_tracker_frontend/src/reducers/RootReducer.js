import { combineReducers } from 'redux'
import { workoutsReducer } from './WorkoutsReducer'
import { plansReducer } from './PlansReducer'

export const rootReducer = combineReducers({
    workouts: workoutsReducer,
    plans: plansReducer
})