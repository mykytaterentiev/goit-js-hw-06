const nameInput = document.getElementById('name-input');

const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', updateGreeting);

function updateGreeting() {
  const trimmedName = nameInput.value.trim();
  const outputName = trimmedName === '' ? 'Anonymous' : trimmedName;
  nameOutput.textContent = outputName;
}