
let countPass = document.getElementById("countPassengers")

let add = document.getElementById("addPerson")

let out = document.getElementById("outcomes")
let count = 0

function addPers(){
    count = count + 1
    countPass.innerText = count
}

function savePeo(){
    let numbers = count + " - "
    out.innerText += numbers

    // resetting the timer
    countPass.innerText = 0
    count = 0
}