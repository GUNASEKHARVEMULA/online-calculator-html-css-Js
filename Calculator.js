let currentValue = '0';

function updateDisplay() {
 document.getElementById('display').innerText = currentValue;
}

function clearDisplay() {
 currentValue = '0';
 updateDisplay();
}

function appendValue(value) {
 if (currentValue === '0' && value !== '.') {
  currentValue = value;
 } else {
  currentValue += value;
 }
 updateDisplay();
}

function calculate() {
 try {
  const result = eval(currentValue);
  currentValue = result.toString();
  updateDisplay();
 } catch (error) {
  alert('Invalid Input');
  clearDisplay();
 }
}

updateDisplay();
