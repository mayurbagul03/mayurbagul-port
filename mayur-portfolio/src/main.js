// const el = document.getElementById("text");
// let position_left = 400;
// let animationId;
// // let position_right = 600;

// function animate() {
//   position_left += 3;
//   if (position_left > window.innerWidth) position_left = -el.offsetWidth;
//   el.style.transform = `translateX(${position_left}px)`;
//   animationId = requestAnimationFrame(animate);
// }
// animate();

// el.addEventListener("mouseenter", () => {
//   cancelAnimationFrame(animationId);
// });

// el.addEventListener("mouseenter", () => {
//   animate();
// });

const el = document.getElementById("text");
let position_left = 400;
let animationId;

function animate() {
  position_left += 2;

  if (position_left > window.innerWidth) {
    position_left = -el.offsetWidth;
  }

  el.style.transform = `translateX(${position_left}px)`;
  animationId = requestAnimationFrame(animate);
}

// Start animation
animate();

// Stop on hover
el.addEventListener("mouseenter", () => {
  cancelAnimationFrame(animationId);
});

// Resume on mouse leave
el.addEventListener("mouseleave", () => {
  animate();
});
