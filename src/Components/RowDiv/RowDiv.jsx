import { useState, useEffect } from 'react'
import './RowDiv.scss'
import btnDelete from '../../assets/images/delete.png'
import btnEdit from '../../assets/images/edit.png'
import btnSave from '../../assets/images/save.png'
import btnCancel from '../../assets/images/cancel.png'


export default function RowDiv({item, handleDeleteWord, saveChanges}){

  const [isEditing, setIsEditing] = useState(false);
  const [editedWord, setEditedWord] =useState(
    {
      english: item.english,
      transcription: item.transcription,
      russian: item.russian
    }
  )

  // состояние отслеживания полей
   const [isField, setIsField] = useState(true);
   useEffect(() => {
    // Проверям пустые поля
    const isEmpty = Object.values(editedWord).some((value) => !value);
    setIsField(!isEmpty);
   }, [editedWord]);


  // включение кнопки редактирования 
  const handleEdit = () => {
    setIsEditing(true);
  }

  // отмена редактирования слов и возвращение в начальное состояние
  const handleCancel = () => {
    setIsEditing(false);
    setEditedWord({
      english: item.english,
      transcription: item.transcription,
      russian: item.russian
    })
  }
  // сохранение измененных слов
  const handleSave = () => {
    if (!isField) {
      console.log('поля не заполнены');
      return;
    }
    setIsEditing(false);
    saveChanges(item.id, editedWord.english, editedWord.transcription, editedWord.russian);
    console.log(editedWord);
  }
  // обновление временного состояния при изменении данных в инпутах
  const handleChange = (field, value) => {
    setEditedWord(prev => ({...prev, [field]: value}));
  }

  return (
    <div>
      {isEditing ? (
        <>
          <div className='table_row'>
          <span className='table_cell'><input type="text" className={`${!editedWord.english ? 'error' : ''}`} value={editedWord.english} onChange={(event)=>{handleChange('english', event.target.value)}}/></span>
          <span className='table_cell'><input type="text" className={`${!editedWord.transcription ? 'error' : ''}`} value={editedWord.transcription} onChange={(event)=>{handleChange('transcription', event.target.value)}}/></span>
          <span className='table_cell'><input type="text" className={`${!editedWord.russian ? 'error' : ''}`} value={editedWord.russian} onChange={(event)=>{handleChange('russian', event.target.value)}}/></span>
          <div className="buttons_container">
          <button className='table_button' onClick={handleSave}><img className='image'  src={btnSave} alt='Save button'></img></button> 
          <button className='table_button' onClick={handleCancel}><img className='image' src={btnCancel} alt='Cancel button'></img></button>
          </div>
          </div>
        </>  
        ) : (
        <>
          <div key={item.id} className='table_row'>
          <span className='table_cell'>{item.english}</span>
          <span className='table_cell'>{item.transcription}</span>
          <span className='table_cell'>{item.russian}</span>
          <div className="buttons_container">
          <button className='table_button' onClick={handleEdit}><img className='image' src={btnEdit} alt='Edit button'></img></button>
          <button className='table_button' onClick={handleDeleteWord}><img className='image' src={btnDelete} alt='Delete button'></img></button> 
          </div>
          </div>
        </>
        )
      }
    </div>
  )
  }