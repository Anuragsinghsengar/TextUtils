import React,{ useState} from 'react'

export default function TextForm(props) {
    let c = 0;
    const handleUpClick = () => {
        console.log("uppercase was clicked");
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert('Text converted to uppercase','success');
    }
    const handleDownClick = () => {
        console.log("lowercase was clicked");
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert('Text converted to lowercase','success');
    }
    const handleUpChange = (event) => {
        console.log("change occured");
        setText(event.target.value);
    }
    const handleClear = () => {
        console.log("text was cleared");
        let newtext = "";
        setText(newtext);
        props.showAlert('Text cleared','success');
    }
    const handleSpaces = () => {
        console.log("spaces have been handles");
        let z = text.split(" ").length;
        if(z != 1){
            let newtext = text.replaceAll(' ','_');
            setText(newtext);
            props.showAlert('Spaces have been handled','success');
        }else{
            let newtext = text.replaceAll('_',' ');
            setText(newtext);
            props.showAlert('Spaces have been reinstated','success');
        }
    }
    const highlightVowels = () => {
        console.log("Vowels have been replaced");
        let i = text.split("|").length
            if(i == 1){
            let newtext = text.replaceAll('a',' |a| ').replaceAll('e',' |e| ').replaceAll('i',' |i| ').replaceAll('o',' |o| ').replaceAll('u',' |u| ');
            setText(newtext);
        }else{
            let newtext = text.replaceAll(' |','').replaceAll('| ','');
            setText(newtext);
        }
        props.showAlert('Vowels have been handled','success');
    }
    const handleCopy = () => {
        console.log("text was copied");
        var a = document.getElementById('myBox');
        a.select();
        navigator.clipboard.writeText(a.value); 
        props.showAlert('Text has been handled','success');
    }
    const handleExtraSpaces = () => {
        console.log('extra spaces have been handled');
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Extra spaces have been handled','success');
    }
    const [text,setText] = useState("Enter the text here");
  return (
   <>
   <div className="container my-3" style ={{color :props.mode ==='light'?'black':'white'}}>
   <h2>{props.heading}</h2>
   <textarea className="form-control" id="myBox" rows="8" style={{backgroundColor:props.mode ==='light'?'white':'grey',color:props.mode ==='light'?'black':'white'}} value={text} onChange={handleUpChange}></textarea>
   <button className="btn btn-primary my-3" onClick = {handleUpClick}>Convert to UpperCase</button>
   <button className="btn btn-success my-3 mx-1" onClick = {handleDownClick}>Convert to LowerCase</button>
   <button className="btn btn-danger my-3 mx-1" onClick = {handleClear}>Clear text</button>
   <button className="btn btn-info my-3 mx-1" onClick = {handleSpaces}>Handle Spaces</button>
   <button className="btn btn-secondary my-3 mx-1" onClick = {highlightVowels}>Highlight Vowels</button>
   <button className="btn btn-success my-3 mx-1" onClick = {handleCopy}>Copy text</button>
   <button className="btn btn-info my-3 mx-1" onClick = {handleExtraSpaces}>Handle Extra Spaces</button>

   </div>
   <div className='container my-2' style ={{color :props.mode ==='light'?'black':'white'}}>
   <b><h2>Summary</h2></b>
   <b><p>Number Of Characters = {text.length}</p></b>
   <b><p>Number Of Words = {text == "" ? 0 : text.charAt(text.length-1) == " " ? text.split(" ").length -1 :  text.split(" ").length}</p></b>
   <b><h2>Preview</h2></b>
   <b><p>{text}</p></b>
   <b><p>{0.008 * text.split(" ").length} Minutes read</p></b>
   </div>
   </>
  )
}
