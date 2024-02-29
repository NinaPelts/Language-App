import { useState, useEffect, useRef, forwardRef } from 'react';
import './Cards.scss'

export default function Cards({word, handleWords}) {
    const [pressed, setPressed] = useState(false);
  
    const handlePressed = () => {
        setPressed(!pressed);
    }
 
    useEffect(() => {
        setPressed(false);
    }, [word])

    return (<div className='card-container'>
   <h3 className='title'>{word.english}</h3>
        <p className='untertitle'>{word.transcription}</p>
        <div className='button-container'>
        {pressed ? <p className='translation'>{word.russian}</p> 
        : <button className='button' onClick={() => {
        handlePressed();
        handleWords()
        }}>Проверить</button>}
        </div>
    </div> 
)
    
}