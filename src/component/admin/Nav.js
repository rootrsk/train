import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <div>
            <NavLink to='/admin/create-train' >Create Train</NavLink>
            <NavLink to='/admin/create-dateTrain'>Create Date Train </NavLink>
        </div>
    )
}

export default Nav