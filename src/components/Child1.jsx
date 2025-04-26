import React from "react";

function Child1(props) {
    
    const handleClick = () => {
        props.changeColor();
    }

    return (
        <div>
            <button onClick={handleClick}>Change Color</button>
        </div>
    )
}

export default Child1;