/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
// eslint-disable-next-line react-hooks/rules-of-hooks

// eslint-disable-next-line react-hooks/rules-of-hooks




export default function infrm(props){
  
  const handelUpClick = () => {
    console.log("");
    let newText = text.toUpperCase();
    setText(newText)
}



  const handelUp1Click = ()=> {
    console.log(text);
    let  newlotext = text.toLowerCase();
    setText(newlotext);  
      }
      const cltext = ()=> {
        console.log(text);
        let  newlotext ='';
        setText(newlotext);  
          }

  const handelOnChange = (event) => {
    console.log("on change");
    setText(event.target.value)
     }


const[myStyle, setMystyle] = useState({
  color:'white',
  backgroundcolor: 'black',
});
const[btnText, setBtnText] = useState("Enable Dark mode")
      const [text, setText] = useState('');


const toogleStyle = () => {
if(myStyle.color === "white"){
  setMystyle({
    color:"black",
    backgroundcolor:"white",
border: "1px solid black",
  })
  setBtnText("enable light mode")
}
else {
  setMystyle({
      color: 'white',
      backgroundColor: 'black'
  })
  setBtnText("Enable Dark Mode")
}

}


const handleCopy = () => {
  var text = document.getElementById("myBox");
  text.select();
 
  navigator.clipboard.writeText(text.value);
  //eslint-disable-next-line
   alert("mybox"+" " + "YOUR TEXT IS copied")
}

const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
}


  return (
   
    <body style={myStyle}>
    <div>
      <h1  >{props.heading}</h1>
<div className="mb-3">

  <textarea className="form-control"  value={text} onChange={handelOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary"  onClick={handelUpClick}>UPPERCASE</button>
<button className="btn btn-primary mx-4"  onClick={handelUp1Click}>lowerCASE</button>
<button className="btn btn-primary mx-4"  onClick={cltext}>clear text</button>
<button className="btn btn-primary mx-4"  onClick={handleCopy}>copy</button>
<button className="btn btn-primary mx-4"  onClick={handleExtraSpaces}>remove space</button>

<button onClick={toogleStyle} type="button"  className="btn btn-primary my-4">Enable Dark Mode</button>
<div className="container my4">
  
  <h1 style={myStyle} >your text summary</h1>
  <p >{text.split(" ").length} words and {text.length} characters</p>
  <p >{0.008*text.split(" ").length} time to read</p>
  <h2 >preview</h2>
  <p >{text}</p>
</div>

    </div>
    </body>
  )
}
