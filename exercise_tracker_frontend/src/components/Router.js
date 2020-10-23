import React from 'react';
import { Switch, Route} from 'react-router-dom'

import Home from './Home'
import PlansContainer from '../containers/PlansContainer'
import WorkoutsContainer from '../containers/WorkoutsContainer'

const Router = () => {
    return (

        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/workouts' component={WorkoutsContainer} />
            <Route exact path='/plans' component={PlansContainer} />
        </Switch>
        
    );
};

export default Router;