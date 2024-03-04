import { useState, useEffect  } from 'react';
import './SliderWord.scss'
import Cards from '../../Components/Cards/Cards';
import data from '../../data.json'



export default function SliderWord() {
    const [countSlide, setCountSlide] = useState(0);
    const [countWord, setCountWord] = useState(0);
    const handleWords = () => {
      setCountWord(countWord +1);
    }

    function nextSlide() {
       const isLastSlide = countSlide === data.length - 1;
       const newIndex = isLastSlide ? 0 : countSlide + 1;
       setCountSlide(newIndex);
    }
    function prevSlide() {
       const isFirstSlide = countSlide === 0;
       const newIndex = isFirstSlide ? data.length - 1 : countSlide - 1;
       setCountSlide(newIndex);
    }
   return <div className='slider_container'>
       <div className="slider">
       <button className='button-arrow' onClick={prevSlide}>&larr;</button>
       <Cards word={data[countSlide]} handleWords={handleWords} />
       <button className='button-arrow' onClick={nextSlide}>&rarr;</button>
       </div>
       <p>{countSlide + 1}/{data.length}</p>
       <p className='counWord'>Выучено новых слов: {countWord}</p>
   </div>
}