import './App.css';
import Home from './components/Home';
import Menu from './components/Menu';
import Review from './components/Review';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Heading from './components/Heading';
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
<BrowserRouter>
    <Routes>
      <Route path='/' element={<><Heading/><Home/><Menu/><Review/><Contact/><Footer/></>}/>
      <Route path='/about' element={<><Heading/><Home/><Menu/><Review/><Contact/><Footer/></>}/>
      <Route path='/menu' element={<><Heading/><Home/><Menu/><Review/><Contact/><Footer/></>}/>
      <Route path='/reviews' element={<><Heading/><Home/><Menu/><Review/><Contact/><Footer/></>}/>
      <Route path='/contact' element={<><Heading/><Home/><Menu/><Review/><Contact/><Footer/></>}/> 
    </Routes>
    </BrowserRouter>
  )
}

export default App;
