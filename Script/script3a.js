function calculateAreaWithHeight() {
  const sideA = parseFloat(document.getElementById('sideA').value);
  const height = parseFloat(document.getElementById('height').value);
  const angle = Math.floor(Math.random() * (80 - 10 + 1)) + 10;
  let area;

  if (!isNaN(sideA) && !isNaN(height)) {
    if (sideA > 0 && height > 0) {
      area = sideA * height;
      area = Math.abs(area);
      drawParallelogram(sideA, height, angle);
      if (!isNaN(area)) {
        document.getElementById('result').textContent = area.toFixed(2);
      } else {
        document.getElementById('result').textContent = 'Please enter valid values';
      }
    } else {
      document.getElementById('result').textContent = 'Please enter non-negative and non 0 values for side A and height';
    }
  } else {
    document.getElementById('result').textContent = 'Please enter side A and height';
  }
}

function calculateAreaWithAngle() {
  const sideA = parseFloat(document.getElementById('sideA').value);
  const sideB = parseFloat(document.getElementById('sideB').value);
  const angle = parseFloat(document.getElementById('angle').value);

  let area;

  if (!isNaN(sideA) && !isNaN(sideB) && !isNaN(angle)) {
    if (sideA > 0 && sideB > 0 && angle > 0) {
      const radianAngle = (angle * Math.PI) / 180;
      area = sideA * sideB * Math.sin(radianAngle);
      area = Math.abs(area);
      drawParallelogram(sideA, sideB, angle);
      if (!isNaN(area)) {
        document.getElementById('result').textContent = area.toFixed(2);
      } else {
        document.getElementById('result').textContent = 'Please enter valid values';
      }
    } else {
      document.getElementById('result').textContent = 'Please enter non-negative and non zero values for side A, side B, and angle';
    }
  } else {
    document.getElementById('result').textContent = 'Please enter side A, side B, and angle';
  }
}

function drawParallelogram(a, b, angle) {
  const canvas = document.getElementById('parallelogramCanvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const radianAngle = (angle * Math.PI) / 180;

  let x1, y1, x2, y2, x3, y3, x4, y4;

  if (angle !== 90) {
    const scaleFactor = canvas.width / (a + b);
    const scaledA = a * scaleFactor;
    const scaledB = b * Math.cos(radianAngle) * scaleFactor;

    x1 = (canvas.width - scaledA - scaledB * Math.cos(radianAngle)) / 2;
    y1 = canvas.height / 2;
    x2 = x1 + scaledA;
    y2 = y1;
    x3 = x1 + scaledB * Math.cos(radianAngle);
    y3 = y1 - scaledB * Math.sin(radianAngle);
    x4 = x3 + scaledA;
    y4 = y3;
  } else { const aspectRatio = a / b;

  let width, height;

  if (canvas.width >= canvas.height * aspectRatio) {
    width = canvas.height * aspectRatio;
    height = canvas.height;
  } else {
    width = canvas.width;
    height = canvas.width / aspectRatio;
  }

  x1 = (canvas.width - width) / 2;
  y1 = (canvas.height - height) / 2;
  x2 = x1 + width;
  y2 = y1;
  x3 = x1;
  y3 = y1 + height;
  x4 = x2;
  y4 = y3;
}

  let colors = ['#FF0000', '#00FF00', '#0000FF'];
  let colorIndex = 0;

  setInterval(function() {
    ctx.strokeStyle = colors[colorIndex];
    ctx.stroke();
    colorIndex = (colorIndex + 1) % colors.length;
  }, 500);

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x4, y4);
  ctx.lineTo(x3, y3);
  ctx.closePath();
  ctx.stroke();
}
