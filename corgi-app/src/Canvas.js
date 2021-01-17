import React from 'react';
import Character from './Character'

function Canvas(props) {    
    const [charState, setCharState] = React.useState({x: '50%', y: '50%'});
    
    var cursorX;
    var cursorY;
    
    const onMove = (event) => {
        cursorX = event.clientX;
        cursorY = event.clientY;
        setCharState({x: cursorX, y: cursorY});
        
    }
    
    return(
        <div id="myCanvas" class="background-formatter" onClick={onMove}>
            <Character charState = {charState} setCharState = {setCharState} charLength = {props.charLength} name = "character1" />
        </div>
    )
}


export default Canvas;