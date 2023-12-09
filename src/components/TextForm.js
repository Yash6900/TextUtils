import React , {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=> {
       
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert(" Converted to Upper Case" , "success")
    }
    const handleLoClick = ()=> {
       
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert(" Converted to Lower Case" , "success")
    }
    const handleOnChange = (event)=> {
        
        setText(event.target.value)
    }

    const handleClearClick = ()=>{
        let newText = "";
        setText(newText)
        props.showAlert(" Your Text has been cleared" , "success")
    }
    const [text, setText] = useState('Enter text here');
  return (
    <>
   <div className='conatiner'>
     
<div className="mb-3">
<h1 className={`text-${props.mode==='dark'?'light':'dark'}`}>{props.heading }</h1>
  
  <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="10" style={{backgroundColor:props.mode === 'light'?'white': '#0a0d10', color:props.mode === 'light'?'black': 'white'}}></textarea>
</div>
    <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleUpClick}>
        Convert to Uppercase
    </button>
    <button disabled={text.length===0}className="btn btn-primary mx-3 my-1" onClick={handleLoClick}>
        Convert to Lower Case
    </button>
    <button disabled={text.length===0}className="btn btn-primary mx-3 my-1" onClick={handleClearClick}>
        Clear Text
    </button>
   
</div>
<div className="container my-3">
    <h1 className={`text-${props.mode==='dark'?'light':'dark'}`}>Your Text Summary</h1>
    <p className={`text-${props.mode==='dark'?'light':'dark'}`}> {text.split(" ").filter((element)=>{
        return element.length!==0
    }).length} words <br /> {text.length} character</p>
    <p className={`text-${props.mode==='dark'?'light':'dark'}`}> {text.split(".").filter((element)=>{
        return element.length!==0
    }).length} Number of Sentences </p>
    <p className={`text-${props.mode==='dark'?'light':'dark'}`}>{0.008 * text.split(" ").filter((element)=>{
        return element.length!==0
    }).length } minutes to read</p>
    <h2 className={`text-${props.mode==='dark'?'light':'dark'}`}>Preview</h2>
    <p className={`text-${props.mode==='dark'?'light':'dark'}`}>{text.length>0?text: "Nothing to Preview"}</p>
</div>
</>
  )
}
