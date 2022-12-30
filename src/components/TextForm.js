import React,{useState} from 'react'



export default function TextForm (props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked")
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase","success")
    }
    const handleLowClick=()=>{
        // console.log("lowercase was clicked")
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase","success")

    }
    const handleClrClick=()=>{
        // console.log("clear was clicked")
        setText('')
        props.showAlert("Text Cleared!","success")

    }
    
    const handleOnChange=(event)=>{
        // console.log("On change")
        setText(event.target.value)
        
    }
    const handleExtraSpaceClick=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("ExtraSpaces removed!","success")

        
    }
    const [text,setText]=useState('');
    // text="new text" //wrong way to change the state
    // setText("new text"); //Correct way to change the state

    let val=text.split(' ')
    // console.log(val)
    let len=0
    val.forEach(element => {
        console.log(element.length)
        if (element.length>0) {
            len=len+1;
        }
        
        
    });
    

        
    
  return (
    <>
    <div className='container'>
        <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
    <button className=" mx-2 btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to lowercase</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaceClick}>Remove ExtraSpaces</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleClrClick}>Clear</button>
    

    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>

        <p>{len} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length}Minutes read</p>
    </div>
    </>
  )
}
