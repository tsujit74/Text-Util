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
        <Navbar about="About Us" />
        <div className="container my-4">
          <Alert alert={alert} />
          {/* <Routes>
            <Route exact path="/about" element={<About />}></Route> */}
            {/* <Route exact path="/" element={ }></Route> */}
            <Textform showAlert={showAlert} heading="Enter Text to analyze " />
          {/* </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
