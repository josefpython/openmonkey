import { isMobile } from "react-device-detect";
import React, {useRef, useState} from "react";
import "./App.css";

/* s/o

discord iamchomuwu

*/

var breakline = {
  display: "inline",
};

var justify = {
  justifyContent: "center",
};

if(isMobile) {
  breakline = {
    display: "block",
  };

  justify = {
    justifyContent: "top",
  };
}

function App() {

  return(

    <Gate />  

  );
}

function Gate() {

  return (

    <div className="App">

      <header className="App-header" style={justify}>

      <img src="https://media1.tenor.com/images/7410d68e41bc94717f26e492325e65d3/tenor.gif?itemid=16514438" width="400px" alt=""></img>
     
        <p>
          <b>openmonkey.eu</b>  
        </p> Open database of monkey media <p>
          funded by the European Union 
        </p>
        
        <ReturnButtons />

        <p class="subtext2" style={{bottom: "5px"}}>
          <i>build 210228.01</i>
        </p>

        <p class="subtext2">
           Got questions? <a href="mailto:contact@openmonkey.eu">contact@openmonkey.eu</a>
        </p>
      </header>
    </div>

  );
  
}

function ReturnButtons (mobile) {

    return(<>

        <p class="buttons">
        <p style={breakline}> <button>API dashboard</button> </p>
        <p style={breakline}> <button>Monkey AI</button> </p>
        <p style={breakline}> <button>About openmonkey</button> </p>
        </p>

    </>);

}

export default App;