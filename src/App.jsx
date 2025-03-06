import React from 'react'
import { Login } from './pages/login';
import { display } from './pages/display';
import {Routes, Route} from "react-router-dom"
function App () {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/display" element={<display/>}/>
    </Routes>
    
  );
}
export default App;


