import { useState } from 'react'
import './RowDiv.scss'
import btnDelete from '../../assets/images/delete.png'
import btnEdit from '../../assets/images/edit.png'
import RowInput from '../RowInput/RowInput'

export default function RowDiv({item}) {
const [edit, setEdit] = useState(true);
    return (
        <>
        {edit ? (
            <div key={item.id} className='table_row'>
            <span className='table_cell'>{item.english}</span>
            <span className='table_cell'>{item.transcription}</span>
            <span className='table_cell'>{item.russian}</span>
            <div className="buttons_container">
              <button className='button' onClick={() => setEdit(false)}><img className='image' src={btnEdit} alt='Edit button'></img></button>
              <button className='button'><img className='image' src={btnDelete} alt='Delete button'></img></button>
            </div>
          </div>
        ) : <RowInput word={item} setEdit={setEdit} />
        }
      </>
    );
}