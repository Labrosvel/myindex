function temperature(){
    // To convert Celsius to Farenheit
    // (CEL * 9/5) + 32
    var c = document.getElementById('c').value;
    var f = (c * 9/5) + 32;
    document.getElementById('f').value = f;
}

function weight() {
    // To convert kilograms to pounds
    // (kg * 2.205)
    var kg = document.getElementById('kg').value;
    var lbs = kg*2.205;
    document.getElementById('lbs').value = lbs;
}

function distance() {
    // To convert kilometers to miles
    // (km / 1.609)
    var km = document.getElementById('km').value;
    var m = km/1.609;
    document.getElementById('m').value = m;
}