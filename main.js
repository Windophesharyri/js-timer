let userInput = document.querySelector(".input")
let userButton = document.querySelector(".button")
let text = document.querySelector(".timer")
let stp = document.querySelector(".stop")
let cont = document.querySelector(".cont")
function Timer() {
    if (text.textContent != "0") {
        clearInterval(delay)
    } 
    text.textContent = userInput.value
        function counter() {
            if (text.textContent == "0") {
                clearInterval(delay)
            }
            else {
                text.textContent = text.textContent - 1                
            }
    }
    delay = setInterval(counter, 1000)
}
function Stop() {
    clearInterval(delay)
}
function Cont() {
    function counter() {
        if (text.textContent == "0") {
            clearInterval(delay)
        }
        else {
            text.textContent = text.textContent - 1                
        }
    }
    del = setInterval(counter, 1000)
}
userButton.addEventListener('click', Timer)
stp.addEventListener('click', Stop)
cont.addEventListener('click', Cont)