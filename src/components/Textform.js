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
        props.showAlert("Copied!","Sucess");
    }

    const handelExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert('Removed Extra Spaces..',"Sucess")
    }

    const handelFirstCapital = () => {
        //let newText=text.charAt(0).toUpperCase()+text.slice(1);
        let newText = text.replace(/\b\w/g, (match) => match.toUpperCase())
        setText(newText)
        props.showAlert("Converted","Sucess");
    }

    const handleClearClick = () => {
        let newText = text;
        if (newText.length >= 1) {
            if (window.confirm("Are you sure want to clear the box!")) {
                setText('');
                props.showAlert("Box Cleared...", "Success");
            }
            else {
                props.showAlert('Not cleared', "Sucess")
            }
        }
        else {
            alert('Enter text into the box..');
            props.showAlert("Enter text into the box");
        }
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className='container my-3'>
                <h4>{props.heading}</h4>
                <div className="mb-3">
                    <textarea className="form" value={text} onChange={handleOnChange} style={{ backgroundColor: (props.mode === 'dark' ? '#5a54769f' : 'rgb(226, 225, 230)'), color: (props.mode === 'dark' ? 'white' : 'black') }} id="myBox" rows={'4'}></textarea>
                </div>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-2' onClick={handleUpClick} >Upper Case</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-2 my-2' onClick={handleLoClick}>Lower Case</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-2 my-2' onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-2 my-2' onClick={handelExtraSpaces}>Remove Spaces</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-2 my-2' onClick={handelFirstCapital}>First Capital</button>
                <button className='btn btn-danger mx-2 my-2' onClick={handleClearClick}>Clear</button>
            </div>
            <div className="container my-3">
                <h5>Given Text Summary</h5>
                <textarea className="form-2" value={text.length > 0 ? text : "Nothing to preview.."} style={{ backgroundColor: (props.mode === 'dark' ? '#5a54769f' : 'rgb(226, 225, 230)'), color: (props.mode === 'dark' ? 'white' : 'black'), }} rows={'3'} readOnly></textarea>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters.</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes to take a read above Paragraph..</p>

            </div>
        </>
    )
}
