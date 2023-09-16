//import { useState } from 'react';
import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
//import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  //const [mode, setDarkMode] = useState('light');//wheather dark mode is enabled or not
  const [alert, setAlert] = useState("");
  const [mode, setMode] = useState('light');

  const toogleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.color='white'
      document.body.style.backgroundColor = '#424569'
  }
  else{
      setMode('light');
      document.body.style.color='black'
      document.body.style.backgroundColor = 'rgb(226, 225, 230)'
  }
  }


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert('');
    }, 2000);
  }
  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar mode={mode}  toogleMode={toogleMode} />
        <div className="container my-4">
          <Alert alert={alert} />
          {/* <Routes>
            <Route exact path="/about" element={<About />}></Route> */}
            {/* <Route exact path="/" element={ }></Route> */}
            <Textform showAlert={showAlert} mode={mode} toogleMode={toogleMode} heading="Enter Text to analyze " />
          {/* </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
