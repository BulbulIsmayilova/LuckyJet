const boyContainer = document.getElementById("boyContainer");
const coin1 = document.getElementById("coin1");
const coin2 = document.getElementById("coin2");
const coin3 = document.getElementById("coin3");


function updateBoyContainerPosition() {
  if (window.innerWidth > 480) {
    let kod = (window.innerWidth - 480) / 2;
    boyContainer.style.left = `${kod}px`;
  } else if (window.innerWidth === 480) {
    boyContainer.style.left = `0px`;
  }
  if (window.innerWidth > 959) {
    let kod = window.innerWidth / 2 - 20;
    boyContainer.style.left = `${kod}px`;
    let cn1 = window.innerWidth / 2 + 100;
    let cn2 = window.innerWidth / 2 + 20;
    let cn3 = window.innerWidth / 2 + 500;
    coin1.style.left = `${cn1}px`;
    coin2.style.left = `${cn2}px`;
    coin3.style.left = `${cn3}px`;
  }
}

window.addEventListener("resize", updateBoyContainerPosition);

updateBoyContainerPosition();

