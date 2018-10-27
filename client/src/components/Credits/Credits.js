import React from "react";
import "./Credits.css";

const Credits = props => (
    <div className={`${props.creditsRoll} credits`}>

        <div className='wrapper'>
            <div className='gameTitle'>[GAME TITLE]</div>
            <div className='credit dev'>A Game by <br></br> [dev studio here]</div>
            <div className='credit'>James Kendall Bruce</div>
            <div className='credit'>Maybellin Burgos</div>
            <div className='credit'>Cody Covington</div>
            <div className='credit'>Andrew Park</div>
            <div className='credit'>Daniel Pruitt</div>
            <div className='thanks'>Thanks for playing!</div>
        </div>

    </div>
)

export default Credits;