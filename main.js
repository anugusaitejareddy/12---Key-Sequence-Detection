const keySequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "B",
  "Shift",
  "A",
  "Shift",
];

const secretCode = "wesbos";
let keys = [];
let match = true;

function checkSequence(e) {
  keys.push(e.key);
  // splice(startIndex, deleteCount?, replace?)
  keys.splice(-secretCode.length - 1, keys.length - secretCode.length);
  if (keys.join("").includes(secretCode)) {
    cornify_add();
  }
}

window.addEventListener("keyup", checkSequence);
