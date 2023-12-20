let generated = false;

function generateRandomStrings(element) {
  if (!generated) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}|[]\\;\',./<>?';
    const length = 32;
    const lines = 8;
    let randomStrings = '';
    for (let i = 0; i < lines; i++) {
      let line = '';
      for (let j = 0; j < length; j++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        line += characters.charAt(randomIndex);
      }
      randomStrings += line + '\n';
    }
    element.value = randomStrings;
    document.getElementById('randomButton').disabled = false;
    generated = true;
  }
}

function selectRandomLines() {
  const textArea = document.querySelector('.random-string-field');
  const lines = textArea.value.split('\n').filter(line => line.trim() !== '');
  const selectedLines = [];
  while (selectedLines.length < 3 && lines.length > 0) {
    const randomIndex = Math.floor(Math.random() * lines.length);
    selectedLines.push(lines[randomIndex]);
    lines.splice(randomIndex, 1);
  }
  const selectedTextArea = document.getElementById('selected-lines');
  selectedTextArea.value = selectedLines.join('\n');
}
