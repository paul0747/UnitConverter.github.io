let inputValue = document.getElementById("input");
let convertBtn = document.getElementById("convertBtn");
let resetBtn = document.getElementById("resetBtn");
let swapBtn = document.getElementById("swapBtn");
let meterOption = document.getElementById("meter");
let selectOptionInput = document.getElementById("selectOptionInput");
let selectOptionOutput = document.getElementById("selectOptionOutput");
let outputValue = document.getElementById("outputValue");

// const centimeterToKilometer = 1.0 * Math.pow(10, 5);

// console.log(selectOption.value);

unitMeasureConversion = () => {
  // Milimeter conversion
  if (selectOptionInput.value === "Milimeter") {
    if (selectOptionOutput.value === "Milimeter") {
      outputValue.innerHTML = `Output:  ${inputValue.value * 0} ${
        selectOptionOutput.value
      }`;
    } else if (selectOptionOutput.value === "Centimeter") {
      outputValue.innerHTML = `Output: ${inputValue.value * 0.1} ${
        selectOptionOutput.value
      }`;
    } else if (selectOptionOutput.value === "Meter") {
      outputValue.innerHTML = `Output: ${inputValue.value * 0.001} ${
        selectOptionOutput.value
      }`;
    } else if (selectOptionOutput.value === "Kilometer") {
      const milimeterToKilometer = 1.0 * Math.pow(10, 6);

      outputValue.innerHTML = `Output: ${
        inputValue.value / milimeterToKilometer
      } ${selectOptionOutput.value}`;
    }

    //Centimeter conversion
  } else if (selectOptionInput.value === "Centimeter") {
    if (selectOptionOutput.value === "Milimeter") {
      outputValue.innerHTML = `Output: ${inputValue.value * 10} ${
        selectOptionOutput.value
      }`;
    }
    if (selectOptionOutput.value === "Centimeter") {
      outputValue.innerHTML = `Output: ${inputValue.value * 0} ${
        selectOptionOutput.value
      }`;
    } else if (selectOptionOutput.value === "Meter") {
      outputValue.innerHTML = `Output: ${inputValue.value * 0.01} ${
        selectOptionOutput.value
      }`;
    } else if (selectOptionOutput.value === "Kilometer") {
      outputValue.innerHTML = `Output: ${inputValue.value * 0.00001} ${
        selectOptionOutput.value
      }`;
    }
    // Meter conversion
  } else if (selectOptionInput.value === "Meter") {
    if (selectOptionOutput.value === "Milimeter") {
      const meterToMilimeter = inputValue.value * 1000;
      outputValue.innerHTML = `Output: ${meterToMilimeter} ${selectOptionOutput.value}`;
    } else if (selectOptionOutput.value === "Centimeter") {
      outputValue.innerHTML = `Output: ${inputValue.value * 100}${
        selectOptionOutput.value
      }`;
    } else if (selectOptionOutput.value === "Meter") {
      outputValue.innerHTML = `Output: ${inputValue.value * 0}${
        selectOptionOutput.value
      }`;
    } else if (selectOptionOutput.value === "Kilometer") {
      outputValue.innerHTML = `Output: ${inputValue.value * 0.001}${
        selectOptionOutput.value
      }`;
    }
  }
  // Kilometer Conversion
  else if (selectOptionInput.value === "Kilometer") {
    if (selectOptionOutput.value === "Milimeter") {
      outputValue.innerHTML = `Output: ${inputValue.value * 1000000}${
        selectOptionOutput.value
      }`;
    } else if (selectOptionOutput.value === "Centimeter") {
      outputValue.innerHTML = `Output: ${inputValue.value * 100000} ${
        selectOptionOutput.value
      }`;
    } else if (selectOptionOutput.value === "Meter") {
      outputValue.innerHTML = `Output: ${inputValue.value * 1000}${
        selectOptionOutput.value
      }`;
    } else if (selectOptionOutput.value === "Kilometer") {
      outputValue.innerHTML = `Output: ${inputValue.value * 0}${
        selectOptionOutput.value
      }`;
    }
  }
};

// Swap the measurements
document.getElementById("swapBtn").onclick = function () {
  let input = selectOptionInput;
  let output = selectOptionOutput;
  let temp = input.value;

  input.value = output.value;
  output.value = temp;
};
