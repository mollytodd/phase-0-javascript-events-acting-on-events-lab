const dodger = document.querySelector('#dodger')
dodger.style.backgroundColor = "#000000"
dodger.style.backgroundColor = "#FF69B4";

function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px","");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left-1}px`;
    }
};

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

function moveDodgerRight(){
    const rightNumbers = dodger.style.left.replace("px","");
    const right = parseInt(rightNumbers, 10);

    const containerWidth = window.innerWidth;
    const dodgerWidth = dodger.offsetWidth;
    if (right + dodgerWidth < containerWidth) {
        dodger.style.left = `${right + 1}px`;
    }
};

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});
