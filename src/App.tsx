import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [key, setKey] = useState(0);
  const [text, setText] = useState("");
  return (
    <div>
      <div>Podaj klucz cezara</div>
      <input
        type="number"
        onChange={(e) => {
          setKey(e.target.valueAsNumber);
        }}
      />
      {/* <input type='checkbox'/>
      <span>Szyfrować?/deszyforować</span> */}
      <br />
      <br />
      <div>Podaj tekst:</div>
      <input
        type="text"
        onChange={(e) => {
          let length = e.target.value.length;
          let word = "";
          if (length !== 0) {
            for (let i = 0; i < length; i++) {
              //97 min
              //122 max
              if(e.target.value == " "){
                word += " ";
              }else{
                if(e.target.value.charCodeAt(i)<97 ||e.target.value.charCodeAt(i)>122){
                  word += String.fromCharCode(e.target.value.charCodeAt(i));
                  continue;
                }

                if(e.target.value.charCodeAt(i)+key > 122){
                  let temp = (e.target.value.charCodeAt(i)+key)-122;
                  word = String.fromCharCode(96+temp);
                }else if(e.target.value.charCodeAt(i)+key < 97){
                  let temp = 97-(e.target.value.charCodeAt(i)+key);
                  word = String.fromCharCode(123-temp);
                }else{
                  word += String.fromCharCode(e.target.value.charCodeAt(i)+key);
                }
              };
            }
          } else {
            word = "";
          }
          setText(word);
        }}
      />
      <div>Twój zaszyfrowany tekst to: <b>{text}</b></div>
    </div>
  );
}

export default App;
