const resultTitle = document.getElementById("result_title");
const resultValue = document.getElementById("result_value");
const img = document.getElementById("img");
const centimeterInput = document.getElementById("centimeter");
const kilogramsInput = document.getElementById("kilograms");
const form = document.getElementById("form");

function getImcRange(imc) {
  switch (true) {
    case imc < 18.5:
      return 0; // Insuffisance pondérale (maigreur)
    case imc >= 18.5 && imc <= 25:
      return 1; // Corpulence normale
    case imc >= 25 && imc <= 30:
      return 2; // Surpoids
    case imc >= 30 && imc <= 35:
      return 3; // Obésité modérée
    case imc >= 35 && imc <= 40:
      return 4; // Obésité sévère
    case imc >= 40:
      return 5; // Obésité morbide ou massive
    default:
      alert("Invalid IMC");
      throw new Error("Invalid IMC"); // Invalid IMC
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

  if (imcRange >= 5) {
    return img.setAttribute("src", `src/img${4}.png`);
  }

  img.setAttribute("src", `src/img${imcRange}.png`);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const centimeter = parseInt(centimeterInput.value);
  const killograms = parseInt(kilogramsInput.value);
  const imc = calculateImc(centimeter, killograms);
  displayResult(imc);
});
