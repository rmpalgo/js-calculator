"use strict";
let calculation = "";
function addToEv() {
    let bns = document.getElementsByTagName("button");
    for (let i = 0; i < bns.length; i++) {
        bns[i].addEventListener("click", function() {
            let data = this.getAttribute("data-id");
            if(data === "equals") {
                let total = eval(calculation);
                console.log(total);
                document.querySelector("#viewable").setAttribute("value", total);
                calculation = "";
                return;
            }
            calculation += data;
            console.log(data);
            console.log("firstNum " + calculation);
        });
    }
}

addToEv();