import React from 'react';

function Button() {
    const handleClick = () => console.log("hello, mountains");

    return (
        <button onClick={handleClick}>click here</button>);
}

export default Button;