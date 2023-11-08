import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  // const [currentMode,setCurrentMode] = useState('Enable DarkMode');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg : message,
      type : type   
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const DarkMode = () => {
    if(mode === 'dark'){
      // setMode('light')
      // document.body.style.backgroundColor = 'white'
      // showAlert('Light Mode has been enabled','success');
      // setCurrentMode('Enable Light Mode');
    }else{
      setMode('dark')
      document.body.style.backgroundColor = '#665a42'
      showAlert('Dark Mode has been enabled','success');
      document.title = 'TextUtils- A wonderful text analyzer[Dark Mode]'
      // setCurrentMode('Enable Dark Mode');
    }
  }
  const BlueMode = () => {
    if(mode == 'blue'){
      // setMode('light')
      // document.body.style.backgroundColor = 'white'
      // showAlert('Light Mode has been enabled','success');
      // setCurrentMode('Enable Light Mode');
    }else{
      setMode('blue')
      document.body.style.backgroundColor = '#042743'
      showAlert('Blue Mode has been enabled','success');
      document.title = 'TextUtils- A wonderful text analyzer[Blue Mode]'
      // setCurrentMode('Enable Dark Mode');
    }
  }
  const LightMode = () => {
    if(mode == 'light'){
      // setMode('light')
      // document.body.style.backgroundColor = 'white'
      // showAlert('Light Mode has been enabled','success');
      // setCurrentMode('Enable Light Mode');
    }else{
      setMode('light')
      document.body.style.backgroundColor = '#EDEADE'
      showAlert('Light Mode has been enabled','success');
      document.title = 'TextUtils- A wonderful text analyzer[Light Mode]'
      // setCurrentMode('Enable Dark Mode');
    }
  }
  const GreenMode = () => {
    if(mode == 'green'){
      // setMode('light')
      // document.body.style.backgroundColor = 'white'
      // showAlert('Light Mode has been enabled','success');
      // setCurrentMode('Enable Light Mode');
    }else{
      setMode('green')
      document.body.style.backgroundColor = '#19543E'
      showAlert('Green Mode has been enabled','success');
      document.title = 'TextUtils- A wonderful text analyzer[Green Mode]'
      // setCurrentMode('Enable Dark Mode');
    }
  }
  const RedMode = () => {
    if(mode == 'red'){
      // setMode('light')
      // document.body.style.backgroundColor = 'white'
      // showAlert('Light Mode has been enabled','success');
      // setCurrentMode('Enable Light Mode');
    }else{
      setMode('red')
      document.body.style.backgroundColor = '#8B0000'
      showAlert('Red Mode has been enabled','success');
      document.title = 'TextUtils- A wonderful text analyzer[Red Mode]'
      // setCurrentMode('Enable Dark Mode');
    }
  }
  const YellowMode = () => {
    if(mode == 'yellow'){
      // setMode('white')
      // document.body.style.backgroundColor = 'white'
      // showAlert('Light Mode has been enabled','success');
      // setCurrentMode('Enable Light Mode');
    }else{
      setMode('yellow')
      document.body.style.backgroundColor = '#DE970B'
      showAlert('Yellow Mode has been enabled','success');
      document.title = 'TextUtils- A wonderful text analyzer[Yellow Mode]'
      // setCurrentMode('Enable Dark Mode');
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar Home="Home" About="About" mode={mode} DarkMode={DarkMode} BlueMode={BlueMode} GreenMode={GreenMode} RedMode={RedMode} YellowMode={YellowMode}  LightMode={LightMode}/>
    <Alert alert={alert}/>
    <div className='container my-4'>
      {/* /* <Routes>
        <Route exact path = "/about" element ={
        {<About/>}/> }
         <Route exact path = "/" element={ */}
        <TextForm heading="Enter the text you want to analyze below" mode={mode} showAlert={showAlert}/> 
        
    </div>
        {/* </Routes> */}
    {/* </Router> */}
    </>
  );
}

export default App;
