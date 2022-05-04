import Start from "./components/Start";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Start />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
