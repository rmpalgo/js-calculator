"use strict";
let calculation = "";
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
    if(data === "undefined") {
        document.querySelector("#viewable").setAttribute("value", "0");
        calculation = "";
    }
    if(data === "AC") {
        console.log("AC CLICKED");
        calculation = "";
        document.querySelector("#viewable").setAttribute("value", "0");
        return;
    }
    if(data === "equals") {
        try {
            let total = eval(calculation);
            document.querySelector("#viewable").setAttribute("value", total);
            calculation = "";
            return;
        } catch (err) {
            document.querySelector("#viewable").setAttribute("value", "error");
            calculation = "";
            return;
        }
    }
    calculation += data;
    console.log(data);
    console.log("calculation " + calculation);
    document.querySelector("#viewable").setAttribute("value", calculation);
}

addToEv();