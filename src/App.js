
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = ( message, type) =>{
    setAlert({
      msg: message,
      type:type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#0a0d10';
      showAlert("Dark Mode has been activated" , "success");
    }
      else{
        setMode('light')
        document.body.style.backgroundColor = 'white';
       showAlert("Light mode has been activated" , "success");

      }
    

  }
  return (
 <>
 <Router>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>

  <Alert alert = {alert}/>
  <div className="container my-3">
  <Routes>
          <Route path="/about" element={ <About />}/>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter your Text Here"  mode={mode} />}/>
        </Routes>


</div>
</Router>

 </>
  );
}

export default App;
