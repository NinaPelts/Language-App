import { useState } from "react";
import './AddWord.scss';

export default function AddWord() {
    const [englishWord, setEnglishWord] = useState('');
    const [transcriptionWord, setTranscriptionWord] = useState('');
    const [russianWord, setRussianWord] = useState('');

    const isLatin = (text) => /^[a-zA-Z\s]+$/.test(text);
    const isCyrillic = (text) => /^[а-яА-Я\s]+$/.test(text);

    const sendWord = async() => {
        if (englishWord === '' || transcriptionWord === '' || russianWord === '') {
            console.log("Поля не заполнены");
            return;
        }
        if (!isLatin(englishWord) || !isLatin(transcriptionWord)) {
            console.log('Выделенные поля должны содержать только латинские символы');
            return;
        }
        if (!isCyrillic(russianWord)) {
            console.log('Выделенное поле должно содержать только символы кириллицы');
            return;
        }

        const newWord = {
            "english": englishWord,
            "transcription": transcriptionWord,
            "russian": russianWord
        }
        try {
            await fetch(`http://itgirlschool.justmakeit.ru/api/words/add.`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newWord),
            })
            .then((data) => {
                console.log("Данные успешно изменены:", data);
            });
        } catch(e) {
            console.error(e);
        }
    }

     return (
        <div className="table_row">
          <span className='table_cell'><input type="text" className={`${!isLatin(englishWord) ? 'empty' : ''}`} value={englishWord} onChange={(event)=>{setEnglishWord(event.target.value)}}/></span>
          <span className='table_cell'><input type="text" className={`${!isLatin(transcriptionWord) ? 'empty' : ''}`} value={transcriptionWord} onChange={(event)=>{setTranscriptionWord(event.target.value)}}/></span>
          <span className='table_cell'><input type="text" className={`${!isCyrillic(russianWord) ? 'empty' : ''}`} value={russianWord} onChange={(event)=>{setRussianWord(event.target.value)}}/></span>
          <div className="buttons_container"><button className="button_add" onClick={sendWord}><span>Добавить</span></button></div>

        </div>
     )
}