function toggleSlide() {
  const el = document.getElementById("scrollText");
  el.classList.toggle("-translate-x-full");
  el.classList.toggle("translate-x-0");
  el.classList.toggle("opacity-0");
  el.classList.toggle("opacity-100");
}
