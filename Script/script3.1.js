function calculateAreaMethod1() {
    const sideLength = parseFloat(document.getElementById('sideLength').value);
    const height = parseFloat(document.getElementById('height').value);
  
    const area = sideLength * height;
    document.getElementById('resultMethod1').textContent = isNaN(area) ? '-' : area.toFixed(2);
  }
  
  function calculateAreaMethod2() {
    const sideA = parseFloat(document.getElementById('sideA').value);
    const sideB = parseFloat(document.getElementById('sideB').value);
    const angleInDegrees = parseFloat(document.getElementById('angle').value);
  
    const angleInRadians = (angleInDegrees * Math.PI) / 180;
    const area = sideA * sideB * Math.sin(angleInRadians);
    document.getElementById('resultMethod2').textContent = isNaN(area) ? '-' : area.toFixed(2);
  }
  