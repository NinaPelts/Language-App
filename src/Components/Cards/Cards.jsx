import { useState, useEffect } from 'react';
import './Cards.scss'

export default function Cards({word, handleWords}) {
    const [translation, setTranslation] = useState(false);
    const [isAdded, setIsAdded] = useState(false);
  
    const showTranslation = () => {
        setTranslation(true);
        if (isAdded) {
            setIsAdded(true)
        }

    }
 
    useEffect(() => {
        setTranslation(false);
    }, [word])

    return (<div className='card-container'>
   <h3 className='title'>{word.english}</h3>
        <p className='untertitle'>{word.transcription}</p>
        <div className='button-container'>
        {translation ? <p className='translation'>{word.russian}</p> 
        : <button className='button' onClick={()=> {
            handleWords()
            showTranslation()
        }}>Проверить</button>}
        </div>
    </div> 
)
    
}