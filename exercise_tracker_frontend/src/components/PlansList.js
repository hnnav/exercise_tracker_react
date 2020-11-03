import React from 'react';
import { connect } from 'react-redux'

import {fetchPlans} from '../actions/PlansActions'

class PlansList extends React.Component {

    componentDidMount(){
        this.props.fetchPlans();
    }
    render(){
        console.log(this.props.plans)
         return (
        <div>
            <h1> Your workout plans </h1>
            {this.props.plans.map(plan => 
                <ul key={plan.id}>
                    <li >
                        {plan.name} - {plan.goal} - {plan.cut_off}
                    </li>
                </ul>
        )}
        </div>
        );
    }
    
};

const mapStateToProps = (state) => {
    return{
        plans: state.plans
    }
}

export default connect(mapStateToProps, {fetchPlans})(PlansList);