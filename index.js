var celsiusI = document.querySelector("#input1")
var FahrenheitI = document.querySelector("#input2")


celsiusI.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
        FahrenheitI.value = (celsiusI.value * 1.8)+32;
    }

})

FahrenheitI.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
        celsiusI.value = (FahrenheitI.value - 32)*.5556;
    }

})