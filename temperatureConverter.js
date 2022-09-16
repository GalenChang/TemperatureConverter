function temperatureConverter(temperature, temperatureType) {
    if (temperatureType === "C") {
        return (temperature * 9/5) + 32;
    } else if (temperatureType === "F") {
        return (temperature - 32) * 5/9;
    } else {
        return "llegal temperature type."
    }
}


console.log(temperatureConverter(212, "F"));     // 100
console.log(temperatureConverter(0, "C"));       // 32
console.log(temperatureConverter(0, "X"));       // Illegal temperature type