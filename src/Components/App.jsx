import { useState, useEffect } from 'react';
import {BrowserRouter as Router,
  Routes, Route} from "react-router-dom";
import Header from './Header/Header';
import data from '../data.json';
import '../style/App.scss'
import {Home, SliderWord, Error} from '../Pages'




function App() {
  const [words, setWords] = useState(data);
  const stateWords = {words, setWords}

  return (
    <Router>
      <div className="global_container">
    <header><Header/></header>
    <main>
       <Routes>
       <Route path="/" element={<Home stateWords={stateWords}/>}></Route>
      <Route path="/slider" element={<SliderWord stateWords={stateWords}/>}></Route>
      <Route path="*" element={<Error />}></Route>
       </Routes>
    </main>
    </div>
    </Router>
  )
}

export default App




// <div className='container'>
// <Table stateWords = {stateWords}/>
// <SliderWord stateWords = {stateWords}/>
// </div>