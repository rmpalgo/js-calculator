"use strict";
let firstNum = "";
let operator = "";
let secondNum = "";
function addToEv() {
    let bns = document.getElementsByTagName("button");
    for (let i = 0; i < bns.length; i++) {
        bns[i].addEventListener("click", function() {
            let data = this.getAttribute("data-id");
            if(operator === "" && (data !== "/" || data !== "-" || data !== "+" || data !== "*")) {
                firstNum += data;
            } else if (operator === "" && (data === "/" || data === "-" || data === "+" || data === "*") ) {
                operator = data;
            } else if(operator !== "" && (data !== "/" || data !== "-" || data !== "+" || data !== "*")) {
                secondNum = data;
            }
            console.log(data);
            console.log("firstNum " + firstNum);
            console.log("operator " + operator);
            console.log("secondNum " + secondNum);
        });
    }
}

addToEv();