const readline = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});
readline.question(' ', tempInCelsius => {
    const celsius_to_fahrenheit = (C) => {
        const f = (C * 9/5) + 32;
        return Math.round(f);
    }
    const temperature_c = parseInt(tempInCelsius);
    const temperature_f = celsius_to_fahrenheit(temperature_c);
    console.log(temperature_f);
    readline.close();
});