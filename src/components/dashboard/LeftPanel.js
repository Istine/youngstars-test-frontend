import React from 'react'
import "../../sass/dashboard/_dashboard.scss"
import Avatar from "../../imgs/pet.jpeg"

export default function LeftPanel() {
    return (
        <div className="left-panel">
            <img src={Avatar} alt="Avatar"/>
            <h3>JaneDoe@mail.com</h3>
            <ul>
                <li>Add channel</li>
                <li>All channels</li>
            </ul>
            <div className="logout">
                Logout
            </div>
        </div>
    )
}
