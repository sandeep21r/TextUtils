import React,{useState} from 'react';


function TextForm(props){
    const handleupClick =()=>{
        console.log("upper was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to upper case","success")
        
    }
    const handledownClick =()=>{
        console.log("Lower was clicked"+text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lower case","success")
        
        
        
    }
    const handleonClick = (event)=>{
        console.log("ong change");
        setText(event.target.value)
        
    }
    const handleclearClick =()=>{
        console.log("clear was clicked"+text);
        let newText = ""
        setText(newText);
        props.showAlert("Text Clear","success")
        
        
        
    }
    const [text,setText] = useState("");

    return (
        <>
       <div className="container" style={{color:props.mode === 'dark' ? 'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3"> 
            <textarea className="form-control" value ={text} onChange={handleonClick} style={{backgroundColor:props.mode === 'dark' ? 'grey':'white',color:props.mode === 'dark' ? 'white':'black'}} id="myBox" rows="3"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleupClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handledownClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear</button>
      </div>
      <div className="container my-2" style={{color:props.mode === 'dark' ? 'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox to preview it here"} </p>
      </div>
      </>
    )
}



  export default  TextForm