var inputs = document.getElementsByClassName("input");
var celcius = document.getElementById("celcius");
var fahrenheit = document.getElementById("fahrenheit");
var kelvin = document.getElementById("kelvin");

for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener("input", function (n) {
        let value = parseFloat(n.target.value);
        
        switch (n.target.name) {
            case "celcius":
                fahrenheit.value = (value * 1.8) + 32;
                kelvin.value = value + 273.15;
                break;
            case "fahrenheit":
                celcius.value = (value - 32) / 1.8;
                kelvin.value = ((value - 32) / 1.8) + 273.15;
                break;
            case "kelvin":
                celcius.value = value - 273.15;
                fahrenheit.value = ((value - 273.15) * 1.8) + 32;
                break;
        }
    });
}
