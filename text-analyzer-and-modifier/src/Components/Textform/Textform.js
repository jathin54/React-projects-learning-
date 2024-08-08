import React ,{useState} from 'react'
import logo1 from './magicstick.png'
import "./Textform.css"

export default function Textform(props) {
    const [text,setText]=useState("Clear this and enter the text to modify...");
    const [mode,setMode]=useState(false);
    const [btntxt,Setbtntxt]=useState("Enable Darkmode");

    const upperCase =()=>{
        let convertedtext=text.toUpperCase();
        setText(convertedtext);
    }
    const lowerCase=()=>{
      let convertedtext=text.toLowerCase();
      setText(convertedtext);
    }
    const clear=()=>{
      setText('');
    }
    const changing=(event)=>{
     setText(event.target.value)
    }
    const toggle=()=>{
      if(mode===false){
        document.body.classList.add('darkmode');
        setMode(true);
        Setbtntxt("Enable Lightmode");
      }
      else{
     document.body.classList.remove('darkmode');
     setMode(false);
     Setbtntxt("Enable DarkMode");
      }
    };
  return (
    <>
<div>
<div className="mb-3">
<h3 className="heading">{props.title}</h3>
<img src={logo1} className="magicstick-pic" alt="logo"></img>
<textarea className="form-control" value={text} onChange={changing} rows="8"></textarea>
</div>
<div >
  <button className="btn btn-primary mx-4" onClick={upperCase}>Convert to UpperCase</button>
  <button className="btn btn-primary mx-4" onClick={lowerCase}>Convert to LowerCase</button>
  <button className="btn btn-primary mx-4" onClick={clear}>Clear</button>
  <button className="btn btn-primary mx-4" onClick={toggle}>{btntxt}</button>
  </div>
</div>
<div className="container my-4">
  <p id="summary-heading">Your Text Summary</p>
  <p id="words">Your Text Contains {text.split(" ").length} Words</p>
  <p id="characters">Your Text contains {text.length} characters</p>
</div>
</>
  )
}
