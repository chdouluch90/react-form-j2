import React from "react";
import ReactDOM from "react-dom";
import { Application } from "./Application";

const root = document.getElementById("root");
const actualDate = new Date();
ReactDOM.render(<Application propriete1= {actualDate} > 

<div>
    <h3>titre</h3>
    <p>paragraphe</p>



</div>


</Application>, root);
