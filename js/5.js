// const clickCount = 0;

// function handleClick() {
//   clickCount++;
//   document.getElementById("clickCounter").textContent = "Clicks: " + clickCount;
// }

// document.addEventListener("DOMContentLoaded", function() {
//   document.addEventListener("click", handleClick);
// });

const clickCount = 0;

const handleClick = () => {
  clickCount++;
  document.getElementById("clickCounter").textContent = "Clicks: " + clickCount;
}

document.addEventListener("DOMContentLoaded", function() {
  document.addEventListener("click", handleClick);
});