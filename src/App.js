import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from './home/home';
import Whatis from './Pages/whatis';
import Educators from './Pages/educators';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="/whatis" element={<Whatis/>}/>
          <Route path="/educators" element={<Educators/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
