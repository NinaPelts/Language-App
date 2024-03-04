import { useState } from "react"
import "./Home.scss"
import data from '../../data.json';
import RowDiv from "../../Components/RowDiv/RowDiv"

export default function Home() {
    // добавляем состояние для данных
    const [items, setItems] = useState(data);
    
    // функция удаления слов
    const handleDeleteWord = (id) => {
    const updateList = items.filter((item) => item.id !== id);
    setItems(updateList); 
    }
  
    // функция сохранения измененных слов
    const saveChanges = (id, editedEnglish, editedTranscription, editedRussian) => {
    const updateList = items.map((item) => {
    if (item.id === id) {
        return {
            ...item,
            english: editedEnglish,
            trancription: editedTranscription,
            russian: editedRussian
        };
    }
    return item;

  });

  setItems(updateList);
}
    return (
        <>
        <div>
        { items.map((item) => {
        return <RowDiv id={item.id} item={item} key={item.id} handleDeleteWord={() => handleDeleteWord(item.id)} saveChanges={saveChanges}/>;
        })}
        </div>
        </>
    )
}