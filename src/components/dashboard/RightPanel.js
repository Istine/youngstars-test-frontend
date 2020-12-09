import React from 'react'
import "../../sass/dashboard/_dashboard.scss"
import Care from "../../imgs/care.png"
import Goat from "../../imgs/goat.png";
import Cat from "../../imgs/cat.png";
import Dog from "../../imgs/dog.png";
//<a href='https://pngtree.com/so/care'>care png from pngtree.com</a>
export default function RightPanel() {
    return (
        <div className="right-panel">
            <div className="board"> 
                <img src={Care} alt="care"/>
            </div>
            <div className="second-board">
                <h3>My Channels</h3>
                <ul>
                    <li> <img src={Dog} alt="dog"/> Dogs</li>
                    <li> <img src={Cat} alt="cat"/> Cats</li>
                    <li> <img src={Goat} alt="goat"/> Goats</li>
                </ul>
            </div>
        </div>
    )
}
