import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="NavBar">
            <Link to='/'>Home</Link>
            <Link to='/workouts'>Workouts</Link>
            <Link to='/plans'>Plans</Link>
        </div>
    )
}

export default NavBar