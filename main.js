//headsImg = image.src
//tailsImg = image.src

const flipButton = document.querySelector("#Flip-Button");
const body = document.querySelector("body");
var textValue;

flipButton.addEventListener("click", function () {
  coin.flip();
  if ((this.coin.state = 0)) {
    heads();
  } else if ((this.coin.state = 1)) {
    tails();
  }
});

function heads() {
  coin.state;
  coin.toString;
  coin.toHTML;
}
function tails() {
  coin.state;
  coin.toString;
  coin.toHTML;
}
let coin = {
  state: 0,
  flip: function () {
    /* 1. Randomly set your coin object's "state" property to be either
           0 or 1: use "this.state" to access the "state" property on this object.*/
    this.state = 0;
    let randomNumber = Math.random();
    if (random <= 0.49) {
      this.state = 0;
    } else this.state = 1;
  },
  toString: function () {
    /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
  },
  toHTML: function () {
    /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
    let image = document.createElement("img");
    if (this.state === 0) {
      image.src = "./images/heads.jpg";
    } else image.src = "./images/flip.jpg";
    body.append(image);
  },
};
