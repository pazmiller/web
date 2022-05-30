function lengthConverter(feet){
    let meter = feet / 3.28
    document.getElementById("length").textContent = meter    
}

function volumeConverter(gallon){
    let liter = gallon * 3.7854
    document.getElementById("volume").textContent = liter    
}

function massConverter(pound){
    let kilo = pound/2.2046
    document.getElementById("mass").textContent = kilo
}
