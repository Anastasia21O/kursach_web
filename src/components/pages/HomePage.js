import React from "react";
import Slider from "./sections/Slider";
import News from './sections/News';

function HomePage (){
    return(
        <div className={"virsta-div-home"}>
            <Slider/>
            <News/>
        </div>
    )
}
export default HomePage;