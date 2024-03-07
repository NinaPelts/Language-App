import { useContext, useState, useEffect  } from 'react';
import './SliderWord.scss'
import Cards from '../../Components/Cards/Cards';
import { ContextWords } from '../../Context/ContextWords';




export default function SliderWord() {
   const [countSlide, setCountSlide] = useState(0);
   const [countWord, setCountWord] = useState(0);
   const {dataServer, setDataServer} = useContext(ContextWords);
    const handleWords = () => {
      setCountWord(countWord +1);
    }

    function nextSlide() {
       const isLastSlide = countSlide === dataServer.length - 1;
       const newIndex = isLastSlide ? 0 : countSlide + 1;
       setCountSlide(newIndex);
    }
    function prevSlide() {
       const isFirstSlide = countSlide === 0;
       const newIndex = isFirstSlide ? dataServer.length - 1 : countSlide - 1;
       setCountSlide(newIndex);
    }
   return <div className='slider_container'>
       <div className="slider">
       <button className='button-arrow' onClick={prevSlide}>&larr;</button>
       <Cards word={dataServer[countSlide]} handleWords={handleWords} />
       <button className='button-arrow' onClick={nextSlide}>&rarr;</button>
       </div>
       <p>{countSlide + 1}/{dataServer.length}</p>
       <p className='counWord'>Выучено новых слов: {countWord}</p>
   </div>
}