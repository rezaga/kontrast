// calculate contrast amount based on weight
const calcContrast = weight => {
    if (weight < 5) {
        return null
    } else if (weight >= 5 && weight < 63) {
        return 5
    } else if (weight >= 63 && weight < 75) {
        return weight / 10
    } else {
        return 7.5
    }
}

// function called on button click event
const onCalcContrast = () => {
    let weight = document.getElementById("weight-input").value
    let contastAmount = calcContrast(weight)
    let el = document.getElementById("result-text")
    if (weight < 5) {
        el.innerHTML = "konferere med din radiolog om mængden af kontrast"
    if (weight == "") {
        el.innerHTML = "Skriv en vægt for beregning"
    }
    } else {
        el.innerHTML = contastAmount + ' ml Gadovist iv.';
    }
}
window.onload = function() {
    document.getElementById("weight-input").onkeypress = function searchKeyPress(event) {
       if (event.keyCode == 13) {
           document.getElementById("button").click();
       }
    }
}
function clearInputField() {
    document.getElementById("weight-input").value = "";
    
}
