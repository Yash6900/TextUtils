
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

  // const removeBodyClasses =()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-warning')
  // }
  const toggleMode = (cls) => {
    // removeBodyClasses();
    document.body.classList.add('bg-'+ cls)
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
          <Route path="/about" element={ <About mode={mode}/>}/>
         
          <Route path="/TextUtils" element={<TextForm showAlert={showAlert} heading="Enter your Text Here"  mode={mode} />}/>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter your Text Here!"  mode={mode} />}/>
        </Routes>


</div>
</Router>

 </>
  );
}

export default App;
