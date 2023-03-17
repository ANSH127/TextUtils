import React,{useState} from 'react'

// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
	BrowserRouter as Router,
	Routes,
	Route
	// Link
} from 'react-router-dom';


// let name="ansh";
function App() {
  const [Mode, setMode] = useState('light') // weather the dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const [aboutstyle,setaboutstyle]=useState(
    {
        color:'black',
        backgroundColor:'white'
    }

);


  const showAlert =(message,type)=>{
    setAlert(
      {
        msg:message,
        type:type
      }
    )
    setTimeout(() => {
      setAlert(null)
      
    }, 1500);

  }
  const  toggleMode=()=>{
    if (Mode==='light') {
      setMode('dark')
      document.body.style.backgroundColor='black';
      showAlert("Dark mode has been enabled","success")
      // document.title='TextUtils - Dark Mode';
      setaboutstyle(
        {
            color:'white',
            backgroundColor:'black'
        }

    )
    
      
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success")
      // document.title='TextUtils - Home';
      setaboutstyle(
        {
            color:'black',
            backgroundColor:'white'
        }

    )
    



    }

  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" AboutText="About Us" mode={Mode} toggleMode={toggleMode}/>
      {/* <Navbar/> */}
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
      <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={Mode}/>} />
      <Route exact path="/about" element={<About mystyle={aboutstyle} />} />
          
      
      </Routes>



          
      {/* <About/> */}
      </div>
      </Router>
    </>
  );
}

export default App;
