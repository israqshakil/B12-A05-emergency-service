let heartCount = 0;
let copyCount = 0;
let coinNumber = 100;

const heartDisplay = document.getElementById("heart-count");

// heart icon click
const heartIcons = document.getElementsByClassName("heart-icon");
for (let icon of heartIcons) {
  icon.addEventListener("click", function () {
    heartCount++;
    heartDisplay.innerText = heartCount;
  });
}
// const heartIcons = document.querySelectorAll(".heart-icon");

// for (let icon of heartIcons) {
//   icon.addEventListener("click", function () {
//     heartCount++;
//     heartDisplay.innerText = heartCount;
//   });
// }
