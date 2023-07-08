import React from "react";
import { Link } from 'react-router-dom';


const LandingPage = () => {
    return (
        <div id="mainSnapShot">
            <div id="snapShotHeading">
            SnapShot
            </div>
            <div>
                <input type='text' placeholder='Search' id="SearchInput"/>
                <button id="SearchButton">Search</button>
            </div>
            <div id="navigationButton">
                <Link to="/MountainNav" ><button id="Mountain" >Mountain</button></Link>
                <Link to="/BeachesNav" ><button id="Beaches">Beaches</button></Link>
                <Link to="/BirdsNav" ><button id="Birds">Birds</button></Link>
                <Link to="/FoodNav" ><button id="Food">Food</button></Link>
            </div>
        </div>
    )
}

export default LandingPage