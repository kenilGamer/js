
const cube = document.querySelector(".cub-1");
window.addEventListener("mousemove", (e) => {
  if (cube.dataset.state == "1") {
    let x = e.clientX;
    let y = e.clientY;
    cube.style = `--y:${e.clientX};` + `--x:${e.clientY};`;
  }
});
// window.addEventListener("touchmove", (e) => {
//   if (cube.dataset.state == "1") {
//     let touch = e.touches[0]; // Get the first touch point
//        let x = touch.clientX;
//        let y = touch.clientY;
//     cube.style = `--y:${e.clientX};` + `--x:${e.clientY};`;
//   }
// });
window.addEventListener("touchmove", (e) => {
  if (cube.dataset.state == "1") {
    let touch = e.touches[0]; // Get the first touch point
    let x = touch.clientX;
    let y = touch.clientY;
    cube.style = `--y:${y};` + `--x:${x};`;
  }
  
});
function showfront() {
 alert("ok")
  if (cube.dataset.state == "1") {
    cube.dataset.state = "0";
    cube.style.transform = ` rotateY(70deg) rotateX(60deg)`;
  } else {
    cube.dataset.state = "1";
    // cube.style.transform = `rotateY(${y} * 0.9deg) rotateX(${x} * 0.2deg)`;
  }
}


//new code not work

// const cube = document.querySelector(".cub-1");

// window.addEventListener("mousemove", (e) => {
//   if (cube.dataset.state == "1") {
//     let x = e.clientX;
//     let y = e.clientY;
//     cube.style = `--y:${y}px;` + `--x:${x}px;`;
//     console.log(x);
//   }
// });

// window.addEventListener("touchmove", (e) => {
//   if (cube.dataset.state == "1") {
//     let touch = e.touches[0]; // Get the first touch point
//     let x = touch.clientX;
//     let y = touch.clientY;
//     cube.style = `--y:${y}px;` + `--x:${x}px;`;
//   }
// });

// function showfront(y, z, x, indx) {
//   if (cube.dataset.state == "1") {
//     cube.dataset.state = "0";
//     cube.style.transform = `rotateY(70deg) rotateX(60deg)`;
//   } else {
//     cube.dataset.state = "1";
//     cube.style.transform = `rotateY(${y * 0.9}deg) rotateX(${x * 0.2}deg)`;
//   }
// }
