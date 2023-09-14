// Binary to Decimal Converter
const binaryConvertButton = document.querySelector("#binary-convert-btn");
const binaryInput = document.querySelector("#binary-input");
const decimalOutput = document.querySelector("#decimal-output");

binaryConvertButton.addEventListener("click", () => {
  const binary = binaryInput.value.trim();
  
  if (binary === "") {
    decimalOutput.textContent = "Decimal: ";
    return alert("Please enter a binary number.");
  }

  if (!/^[01]+$/.test(binary)) {
    decimalOutput.textContent = "Decimal: ";
    return alert("Please enter a valid binary number.");
  }

  const decimal = parseInt(binary, 2);
  
  decimalOutput.textContent = `Decimal: ${decimal}`;
});

// Decimal to Binary Converter
const decimalConvertButton = document.querySelector("#decimal-convert-btn");
const decimalInput = document.querySelector("#decimal-input");
const binaryOutput = document.querySelector("#binary-output");

decimalConvertButton.addEventListener("click", () => {
  const decimal = decimalInput.value.trim();
  
  if (decimal === "") {
    binaryOutput.textContent = "Binary: ";
    return alert("Please enter a decimal number.");
  }

  if (!/^\d+$/.test(decimal)) {
    binaryOutput.textContent = "Binary: ";
    return alert("Please enter a valid decimal number.");
  }

  const binary = decimalToBinary(decimal);
  
  binaryOutput.textContent = `Binary: ${binary}`;
});

function decimalToBinary(decimal) {
  let binary = "";

  while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
  }

  return binary === "" ? "0" : binary;
}

// Toggle Navigation Bar on Hover
const navbar = document.querySelector(".navbar");
const navbarMenu = document.querySelector(".navbar-menu");

navbar.addEventListener("mouseenter", () => {
  navbarMenu.classList.add("open");
});

navbar.addEventListener("mouseleave", () => {
  navbarMenu.classList.remove("open");
});