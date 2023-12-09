import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    const { monograms } = useSelector(state => state.monograms)

    return (
        <nav className="navbar bg-body-tertiary sticky-top">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <NavLink className="navbar-brand" to="/">Monogramer</NavLink>
                <NavLink to="/monograms" className="d-flex justify-content-center align-items-center gap-1">
                    <span className="badge bg-primary">{monograms.length}</span>
                    <span>Monograms</span>
                </NavLink>
            </div>
        </nav>
    )
}
