const myHeading = document.querySelector(".myHeading");
const countValue = document.querySelector(".countValue");
const decreaseButton = document.querySelector(".decreaseButton");
const increaseButton = document.querySelector(".increaseButton");
const resetButton = document.querySelector(".resetButton");

let myCount = 0;

function increaseCountFn() {
  myCount++;
  countValue.textContent = myCount;
  if (myCount > 0) {
    countValue.style.color = "green";
  } else if (myCount < 0) {
    countValue.style.color = "red";
  } else {
    countValue.style.color = "black";
  }
}

function decreaseCountFn() {
  myCount--;
  countValue.textContent = myCount;
  if (myCount > 0) {
    countValue.style.color = "green";
  } else if (myCount < 0) {
    countValue.style.color = "red";
  } else {
    countValue.style.color = "black";
  }
}

function resetCountFn() {
  myCount = 0;
  countValue.textContent = myCount;
  if (myCount > 0) {
    countValue.style.color = "green";
  } else if (myCount < 0) {
    countValue.style.color = "red";
  } else {
    countValue.style.color = "black";
  }
}
increaseButton.addEventListener("click", increaseCountFn);
decreaseButton.addEventListener("click", decreaseCountFn);
resetButton.addEventListener("click", resetCountFn);
