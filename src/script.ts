let seconds: number = 0;
const counterElement = document.getElementById("counter");

function updateCounter(): void {
  seconds++;
  if (counterElement) {
    counterElement.textContent = seconds.toString();
  }
}

setInterval(updateCounter, 1000);
