/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React from 'react'
import './App.css';
import Navbar from './components/navbar'
import Inputfrom from './components/infrm'
function App() {
  return (
<>

<Navbar/>
<div className="container my-3">
<Inputfrom heading = "Type your text here"/>
</div>
</>
  );
}

export default App;
