import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from './home/home';
import Whatis from './Pages/whatis';
import Educators from './Pages/educators';
import HowItWorks from './Pages/howItWorks';
import Lesson from './Pages/lesson';
import JoinClass from './Pages/joinClass';
import PageNotAvailable from './Pages/pageNotAvailable';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="/whatis" element={<Whatis/>}/>
          <Route path="/lessons" element={<Lesson/>}/>
          <Route path="/howitworks" element={<HowItWorks/>}/>
          <Route path="/educators" element={<Educators/>}/>
        </Route>
      <Route path="/join-class" element={<JoinClass/>}/>
      <Route path="*" element={<PageNotAvailable/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
