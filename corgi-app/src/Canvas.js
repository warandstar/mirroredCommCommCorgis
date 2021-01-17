import React from 'react';
import Character from './Character'

function Canvas(props) {
    const [canvasState, setCanvasState] = React.useState([0,0]);
    
    const [charState, setCharState] = React.useState({x: '50%', y: '50%'});
    
    var cursorX;
    var cursorY;
    var charLength = props.charLength;
    
    const onMove = (event) => {
        cursorX = event.clientX;
        cursorY = event.clientY;
        setCharState({x: cursorX, y: cursorY});
        
    }
    
    return(
        <div id="myCanvas" class="background-formatter" onClick={onMove}>
            <Character charState = {charState} setCharState = {setCharState} charLength = {props.charLength} x = {cursorX} y = {cursorY}/>
        </div>
    )
}


export default Canvas;