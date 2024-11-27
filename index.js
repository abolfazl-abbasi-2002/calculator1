// calculator
const safe = document.getElementById("safe");

function tosafe(input) {
  safe.value += input;
}
function poww(input1, input2) {
  safe.value = Number(Math.pow(input1, 2));
}
function cl() {
  safe.value = " ";
}

function cuc() {
  try {
    safe.value = eval(safe.value);
  } catch (error) {
    safe.value = "Error";
  }
}
