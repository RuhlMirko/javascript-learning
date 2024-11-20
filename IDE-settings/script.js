// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// TODO:

console.log(1992 - 2001);

// debugging

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("Degrees celsius: ")),
  };

  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());
