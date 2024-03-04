import {BrowserRouter as Router,
  Routes, Route} from "react-router-dom";
import Header from './Header/Header';
import '../style/App.scss'
import {Home, SliderWord, Error} from '../Pages'




function App() {

  return (
    <Router>
      <div className="global_container">
    <header><Header/></header>
    <main>
       <Routes>
       <Route path="/" element={<Home />}></Route>
      <Route path="/slider" element={<SliderWord />}></Route>
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