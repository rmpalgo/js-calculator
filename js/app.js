"use strict";
let calculation = "";
let firstPart = "";
let secondPart = "";
function addToEv() {
    let bns = document.getElementsByTagName("button");
    for (let i = 0; i < bns.length; i++) {
        bns[i].addEventListener("click", function() {
            let data = this.getAttribute("data-id");
            calculate(data);
        });
    }
}

function calculate(data) {
    if(data === "AC") {
        console.log("AC CLICKED");
        calculation = "";
        document.querySelector("#viewable").setAttribute("value", "0");
        return;
    }
    if(data === "/" || data === "*" || data === "+" || data === "-") {
        firstPart = calculation;
        calculation = "";
    }
    if( data === "equals") {
        secondPart = calculation;
    }
    if(data === "equals") {
        console.log("Second part: " + secondPart);
        let total = eval(firstPart + secondPart);
        console.log(total);
        document.querySelector("#viewable").setAttribute("value", total);
        calculation = "";
        return;
    }
    calculation += data;
    console.log(data);
    console.log("calculation " + calculation);
    console.log("First part " + firstPart);
    console.log("Second part " + secondPart);

    document.querySelector("#viewable").setAttribute("value", calculation);
}

addToEv();