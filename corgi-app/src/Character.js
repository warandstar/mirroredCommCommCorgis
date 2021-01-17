import React from 'react';

function Character(props) {
    var characterAlt = props.name;

    const charStyle = {
        left: `${props.charState.x - props.charLength / 1.5}px`,
        top: `${props.charState.y - props.charLength / 1.5}px`
    };

    return(
        <img src="./assets/penguin-blue.jpg" class="character" alt = {characterAlt} style = {charStyle}/>
    )
}

export default Character;