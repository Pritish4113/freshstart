import { useState } from 'react';
import './Playbtn.css';

function Playbtn({onPlay, onPause, children}){
    const [playpause, setPlaypause] = useState(false);
    let handleClick = (e) =>{
        e.stopPropagation();
        if(!playpause){
            onPlay();
            setPlaypause(true);
        }
        else{
            onPause();
            setPlaypause(false);
        }
    }
    return(
        <button className = 'btn' onClick = {handleClick}>{children} {playpause ? '||' : '>'}</button>
    );
} 

export default Playbtn;