import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper Case", "Success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case", "Success");
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        navigator.clipboard.writeText(text.value);
        
        props.showAlert("Copied !");
    }

    const handelExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handelFirstCapital=()=>{
        //let newText=text.charAt(0).toUpperCase()+text.slice(1);
        let newText=text.replace(/\b\w/g, (match)=>match.toUpperCase())
        setText(newText)
    }

    const handleClearClick = () => {
        setText("");
        props.showAlert("Box Cleared...", "Success");
    }

    const handleOnChange = (event) => {
        console.log("On change")
        setText(event.target.value);
    }

    const [mStyle] = useState(
        {
            color: 'white'
        }
    )
    
    const [text, setText] = useState('');
    return (
        <>
            <div className='container my-3'>
                <h4 style={mStyle}>{props.heading}</h4>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="5"></textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to upper case</button>
                <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to lower case</button>
                <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
                <button className='btn btn-primary mx-2' onClick={handelExtraSpaces}>Remove spaces</button>
                <button className='btn btn-primary mx-2' onClick={handelFirstCapital}>First Capital</button>
                <button className='btn btn-danger mx-2' onClick={handleClearClick}>Clear</button>
            </div>
            <div style={mStyle} className="container my-3">

                <h5>Preview</h5>
                <p>{text.length>0?text:"Enter Some Thing in the TextBox.. "}</p>
                <h5>Given Text Summary</h5>
                <p>{text.split(" ").length} words and {text.length} characters.</p>
                <p>{0.008 * text.split(" ").length} Minutes to take a read above Paragraph..</p>

            </div>
        </>
    )
}
