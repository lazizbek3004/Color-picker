import React, { useState } from "react";

function ColorPicker(){
    const [color, setColor] = useState("#FFFFFF")

    function changeColor(event){
        setColor(event.target.value)
    }

    return(
        <div className="container">
            <h1>Pick a color</h1>
            <div className="middle" style={{backgroundColor:color}}>
                <p>The color: {color}</p>
            </div>
            <form action="" className="form">
            <label>Colors:</label>
            <input type="color" defaultValue={"#FFFFFF"} onChange={changeColor} />
            </form>
        </div>
    );
}

export default ColorPicker



