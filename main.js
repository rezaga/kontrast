// calculate contrast amount based on weight
const calcContrast = weight => {
    if (weight < 5) {
        return null
    } else if (weight >= 5 && weight < 63) {
        return 5
    } else if (weight >= 63 && weight < 75) {
        return weight / 10.0
    } else {
        return 7.5
    }
}

const calcContrastDobble = weight => {
    if (weight < 5) {
        return null
    } else if (weight >= 5 && weight < 63) {
        return (weight / 10.0) * 2
    } else if (weight >= 63 && weight < 75) {
        return 12.5
    } else {
        return 15
    }
}

const calcContrastPrim = weight => {
    if (weight < 5) {
        return null
    } else if (weight < 100) {
        return weight / 10.0
    } else {
        return 10
    }
}

// function called on button click event
const onCalcContrast = () => {
    let weight = document.getElementById("weight-input").value
    let contrastAmount = calcContrast(weight)
    let contrastAmountPrim = calcContrastPrim(weight)
    let contrastAmountDob = calcContrastDobble(weight)
    let el = document.getElementById("result-text")
    let chk = document.getElementById("s1").checked
    if (weight == "") {
        el.innerHTML = "Skriv en vægt for beregning"
    } else if (weight < 5) {
        el.innerHTML = "konferere med din radiolog om mængden af kontrast"
    } else if (selector.options[selector.selectedIndex].value == "Primovist") {
        el.innerHTML = weight + " kg. =  " + contrastAmountPrim + " ml Primovist iv."
    } else if (chk == true) {
        el.innerHTML = weight + " kg. = " + contrastAmountDob + " ml Gadovist iv." 
    } else if (selector.options[selector.selectedIndex].value == "Gadovist") {
        el.innerHTML = weight + " kg. =  " + contrastAmount + " ml Gadovist iv."       
    } else {
        el.innerHTML = "konferere med din radiolog om mængden af kontrast"
    }
}
window.onload = function() {
    document.getElementById("weight-input").onkeypress = function searchKeyPress(event) {
       if (event.keyCode == 13) {
           document.getElementById("button").click();
       }
    }
}
const clearInputField = () => {
    document.getElementById("weight-input").value = "";
    document.getElementById("s1").checked = false;  
}
const disCheckBox = () => {
    if (selector.options[selector.selectedIndex].value == "Primovist") {
        document.getElementById("s1").hidden = true;
        document.getElementById("labs1").hidden = true;
    } else {
        document.getElementById("s1").hidden = false;
        document.getElementById("labs1").hidden = false;
    }
}

