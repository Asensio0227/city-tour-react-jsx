import './App.scss';
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Error
} from './pages'
import {
  Navbar, Footer
} from "./components"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
