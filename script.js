let isDragging = false;
let previousX = 0;

document.getElementById('cube').addEventListener('mousedown', startDragging);
document.getElementById('cube').addEventListener('touchstart', startDragging);

document.addEventListener('mouseup', stopDragging);
document.addEventListener('touchend', stopDragging);

document.addEventListener('mousemove', drag);
document.addEventListener('touchmove', drag);

function startDragging(e) {
  isDragging = true;
  previousX = e.clientX || e.touches[0].clientX;
  cube.style.cursor = "-webkit-grab";
}

function stopDragging() {
  isDragging = false;
}

function drag(e) {
  if (!isDragging) return;
  
  let currentX;
  if (e.type === 'mousemove') {
    currentX = e.clientX;
  } else if (e.type === 'touchmove') {
    currentX = e.touches[0].clientX;
  }
  
  const delta = currentX - previousX;
  previousX = currentX;


  const cube = document.getElementById('cube');
  const rotation = cube.style.transform || 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)';
  const currentRotation = rotation.match(/rotate[XYZ]\((\d+)deg\)/g);
  const newRotationX = (currentRotation[0] ? parseInt(currentRotation[0].match(/\d+/)[0]) : 0) - delta;
  const newRotationY = (currentRotation[1] ? parseInt(currentRotation[1].match(/\d+/)[0]) : 0) + delta;
  const newRotationZ = (currentRotation[2] ? parseInt(currentRotation[2].match(/\d+/)[0]) : 0) + delta;
  cube.style.transform = `rotateX(${newRotationX}deg) rotateY(${newRotationY}deg) rotateZ(${newRotationZ}deg)`;
};
function cude1(){
  const cube = document.getElementById('cube');
  const rotation = cube.style.transform || 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)';
  const currentRotation = rotation.match(/rotate[XYZ]\((\d+)deg\)/g);
  const newRotationX = (currentRotation[0] ? parseInt(currentRotation[0].match(/\d+/)[0]) : 0) - delta;
  const newRotationY = (currentRotation[1] ? parseInt(currentRotation[1].match(/\d+/)[0]) : 0) + delta;
  const newRotationZ = (currentRotation[2] ? parseInt(currentRotation[2].match(/\d+/)[0]) : 0) + delta;
  cube.style.transform = `rotateX(${newRotationX}deg) rotateY(${newRotationY}deg) rotateZ(${newRotationZ}deg)`;
}