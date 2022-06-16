const resultTitle = document.getElementById("result_title");
const resultValue = document.getElementById("result_value");
const img = document.getElementById("img");
const centimeterInput = document.getElementById("centimeter");
const kilogramsInput = document.getElementById("kilograms");
const form = document.getElementById("form");

function getImcRange(imc) {
  switch (true) {
    case imc < 18.5:
      return 0;
    case imc >= 18.5 && imc <= 25:
      return 1;
    case imc >= 25 && imc <= 30:
      return 2;
    case imc >= 30 && imc <= 35:
      return 3;
    case imc >= 35 && imc <= 40:
      return 4;
    case imc >= 40:
      return 5;
    default:
      return undefined;
  }
}

const resultText = [
  "Insuffisance pondérale (maigreur)",
  "Corpulence normale",
  "Surpoids",
  "Obésité modérée",
  "Obésité sévère",
  "Obésité morbide ou massive",
];

function calculateImc(centimeter, kilograms) {
  const imc = kilograms / (centimeter / 100) ** 2;
  return parseInt(imc);
}

function displayResult(imc) {
  const imcRange = getImcRange(imc);
  resultTitle.innerText = resultText[imcRange];
  resultValue.innerText = imc;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const centimeter = parseInt(centimeterInput.value);
  const killograms = parseInt(kilogramsInput.value);
  const imc = calculateImc(centimeter, killograms);
  displayResult(imc);
});
