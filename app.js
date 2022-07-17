// https://calculator.swiftutors.com/free-fall-calculator.html
// https://www.omnicalculator.com/physics/free-fall

// there still another variable initial velocity (v₀) that needs to be added to the calculator if it is present
// s = v₀t + (1/2)gt²
// v = v₀ + gt

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const heightRadio = document.getElementById('heightRadio');
const gravitationalAccelerationRadio = document.getElementById('gravitationalAccelerationRadio');
const timeToFallRadio = document.getElementById('timeToFallRadio');
const velocityRadio = document.getElementById('velocityRadio');

let height;
let gravitationalAcceleration = v1;
let timeToFall = v2;
let velocity;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

heightRadio.addEventListener('click', function() {
  variable1.textContent = 'Gravitational acceleration (g)';
  variable2.textContent = 'Time to fall (t)';
  gravitationalAcceleration = v1;
  timeToFall = v2;
});

gravitationalAccelerationRadio.addEventListener('click', function() {
  variable1.textContent = 'Height (h)';
  variable2.textContent = 'Time to fall (t)';
  height = v1;
  timeToFall = v2;
});

timeToFallRadio.addEventListener('click', function() {
  variable1.textContent = 'Height (h)';
  variable2.textContent = 'Gravitational acceleration (g)';
  height = v1;
  gravitationalAcceleration = v2;
});

velocityRadio.addEventListener('click', function() {
  variable1.textContent = 'Gravitational acceleration (g)';
  variable2.textContent = 'Time to fall (t)';
  gravitationalAcceleration = v1;
  timeToFall = v2;
});


btn.addEventListener('click', function() {
  
  if(heightRadio.checked)
    result.textContent = `Height = ${computeHeight().toFixed(2)} (m)`;

  else if(gravitationalAccelerationRadio.checked)
    result.textContent = `Gravitational acceleration = ${computeGravitationalAcceleration().toFixed(2)} (m/s²)`;

  else if(timeToFallRadio.checked)
    result.textContent = `Time to fall = ${computeTimeToFall().toFixed(2)} (sec)`;

  else if(velocityRadio.checked)
    result.textContent = `Velocity = ${computeVelocity().toFixed(2)} (m/s)`;
})

// calculation

function computeHeight() {
  return 0.5 * Number(gravitationalAcceleration.value) * Math.pow(Number(timeToFall.value), 2);
}

function computeGravitationalAcceleration() {
  return (2 * Number(height.value)) / Math.pow(Number(timeToFall.value), 2);
}

function computeTimeToFall() {
  return Math.sqrt((2 * Number(height.value)) / Number(gravitationalAcceleration.value));
}

function computeVelocity() {
  return Number(gravitationalAcceleration.value) * Number(timeToFall.value);
}