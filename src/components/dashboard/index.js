import React from 'react'
import "../../sass/dashboard/_dashboard.scss"
import LeftPanel from './LeftPanel'
import MiddlePanel from './MiddlePanel'
import RightPanel from './RightPanel'

export default function index() {
    return (
        <div className="dashboard-container">
            <LeftPanel />
            <MiddlePanel />
            <RightPanel />
        </div>
    )
}
