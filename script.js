// SGPA Section
const sgpaInputs = [...Array(8)]
  .map((_, i) => `<input type="number" placeholder="Subject ${i + 1} Marks" id="subject${i}" />`)
  .join("");

document.getElementById("sgpa-calculator").innerHTML = `
  <h2>SGPA Calculator</h2>
  ${sgpaInputs}
  <br><button onclick="calculateSGPA()">Calculate SGPA</button>
  <p id="sgpa-result"></p>
`;

// CGPA Section
const cgpaInputs = [...Array(8)]
  .map((_, i) => `<input type="number" placeholder="Semester ${i + 1} SGPA" id="sem${i}" />`)
  .join("");

document.getElementById("cgpa-calculator").innerHTML = `
  <h2>CGPA Calculator</h2>
  ${cgpaInputs}
  <br><button onclick="calculateCGPA()">Calculate CGPA</button>
  <p id="cgpa-result"></p>
`;

// SGPA Calculation Logic
function calculateSGPA() {
  let total = 0, count = 0;
  for (let i = 0; i < 8; i++) {
    const val = parseFloat(document.getElementById(`subject${i}`).value);
    if (!isNaN(val)) {
      count++;
      if (val >= 90) total += 10;
      else if (val >= 80) total += 9;
      else if (val >= 70) total += 8;
      else if (val >= 60) total += 7;
      else if (val >= 50) total += 6;
      else if (val >= 40) total += 5;
      else total += 0;
    }
  }
  const sgpa = count ? (total / count).toFixed(2) : 0;
  document.getElementById("sgpa-result").innerText = `SGPA: ${sgpa}`;
}

// CGPA Calculation Logic
function calculateCGPA() {
  let total = 0, count = 0;
  for (let i = 0; i < 8; i++) {
    const val = parseFloat(document.getElementById(`sem${i}`).value);
    if (!isNaN(val)) {
      total += val;
      count++;
    }
  }
  const cgpa = count ? (total / count).toFixed(2) : 0;
  document.getElementById("cgpa-result").innerText = `CGPA: ${cgpa}`;
}
