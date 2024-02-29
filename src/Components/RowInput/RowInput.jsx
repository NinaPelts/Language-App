import { useState, useEffect } from 'react'
import './RowInput.scss'
import btnSave from '../../assets/images/save.png'
import btnCancel from '../../assets/images/cancel.png'

export default function RowInput({word, setEdit}) {
    const [english, setEnglish] = useState("");
    const [transcription, setTranscription] = useState("");
    const [russian, setRussian] = useState("");
  
    useEffect(() => {
      setEnglish(word.english);
      setTranscription(word.transcription);
      setRussian(word.russian);
    }, [word]);

    return( 
        <div className='table_row'>
        <span className='table_cell'><input type="text" value={english} onChange={(event)=>{setEnglish(event.target.value)}}/></span>
        <span className='table_cell'><input value={transcription} onChange={(event)=>{setTranscription(event.target.value)}}/></span>
        <span className='table_cell'><input type="text" value={russian} onChange={(event)=>{setRussian(event.target.value)}}/></span>
        <div className="buttons_container">
          <button className='button'><img className='image' src={btnSave} alt='Save button'></img></button>
          <button className='button' onClick={() => setEdit(true)}><img className='image' src={btnCancel}></img></button>
        </div>
      </div>
    )
   
}