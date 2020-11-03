import React, { Component } from 'react'
import { connect } from 'react-redux'

import PlansForm from '../components/PlansForm'
import PlansList from '../components/PlansList'

class PlansContainer extends Component {
    render() {
        return (
            <div>
                <PlansForm />
                <PlansList />
            </div>
        )
    }
}

export default PlansContainer