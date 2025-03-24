import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js'
import Alert from './components/Alert.js';
// import About from './components/About.js'
// import { BrowserRouter as Router, Switch,Link, Routes,Route } from "react-router-dom";
function App() {
  const [darkmode,setdarkmode] = useState('light')
  const [alert,setAlert] = useState(null)

  const showAlert = (message,type)=>{ 
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1000);
  }
  const toggleMode = ()=>{
    if(darkmode === 'light'){
      setdarkmode( 'dark');
      document.body.style.backgroundColor="#042743"
      document.title='TextUtils - Dark Mode'
      showAlert("Dark mode has beend enabled","success")
    }
    else{
      setdarkmode('light')
      document.body.style.backgroundColor="white"
      document.title='TextUtils - Light Mode'
      showAlert("Light mode has beend enabled","success")
    }
  }
  
  return (
    <>
      {/* <Router> */}
    <Navbar title ="TextUtils" aboutText="About" mode={darkmode}  toggleMode = {toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3" > 
      
          {/* <Routes> */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/" element={} /> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={darkmode}/>
          {/* </Routes> */}
     
      
    
    </div>
    {/* </Router> */}
    </>
  
  );
}

export default App;
