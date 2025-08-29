let heartCount = 0;
let copyCount = 2;
// let coins = 100;

const heartDisplay = document.getElementById("heart-count");
const copyDisplay = document.getElementById("copy-count");
// const coinDisplay = document.getElementById("coin-count");
// const historyList = document.getElementById("history-list");
// const clearHistoryBtn = document.getElementById("clear-history");

// heart icon
// let heartCount = 0;
// const heartDisplay = document.getElementById("heart-count");
const heartIcons = document.getElementsByClassName("heart-icon");
for (let icon of heartIcons) {
  icon.addEventListener("click", function () {
    heartCount++;
    heartDisplay.innerText = heartCount;
  });
}

// copy button
// let copyCount = 2;
// const copyDisplay = document.getElementById("copy-count");
const copyButtons = document.getElementsByClassName("copy-button");
for (let button of copyButtons) {
  button.addEventListener("click", function () {
    const number = button
      .closest(".card")
      .querySelector(".service-number").innerText;

    navigator.clipboard.writeText(number);

    alert(`${number} number copied to clipboard`);

    copyCount++;
    copyDisplay.innerText = copyCount;
  });
}

// call button
let coins = 100;
const coinDisplay = document.getElementById("coin-count");
const historyList = document.getElementById("history-list");
const callButtons = document.getElementsByClassName("call-button");
for (let btn of callButtons) {
  btn.addEventListener("click", function () {
    const card = btn.closest(".card");
    const name = card.querySelector(".service-name").innerText;
    const number = card.querySelector(".service-number").innerText;

    if (coins < 20) {
      alert("You don't have enough coins to make a call.");
      return;
    }

    coins -= 20;
    coinDisplay.innerText = coins;

    alert(`📞 Calling ${name} ${number}...`);

    const time = new Date().toLocaleTimeString();

    const item = document.createElement("div");
    item.className =
      "flex items-center justify-between bg-[gray]/10 px-3 py-2 rounded-md shadow-sm";

    const left = document.createElement("div");

    left.className = "flex items-center gap-2";

    const text = document.createElement("div");
    text.innerHTML = `<p class="font-bold">${name}</p><p class="text-xs text-gray-600">${number}</p>`;

    left.appendChild(text);

    const timeText = document.createElement("p");
    timeText.className = "text-xs text-gray-500";
    timeText.innerText = time;

    item.appendChild(left);
    item.appendChild(timeText);
    historyList.prepend(item);
  });
}

//  Clear history
const clearHistoryBtn = document.getElementById("clear-history");
clearHistoryBtn.addEventListener("click", function () {
  historyList.innerHTML = "";
});
