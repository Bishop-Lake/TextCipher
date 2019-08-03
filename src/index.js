import domtoimage from "dom-to-image";

const characterPallete = {
  a: ["magenta", "red", "lime", "yellow", "blue", "cyan"],

  b: ["red", "magenta", "lime", "yellow", "blue", "cyan"],

  c: ["red", "lime", "magenta", "yellow", "blue", "cyan"],

  d: ["red", "lime", "yellow", "magenta", "blue", "cyan"],

  e: ["red", "lime", "yellow", "blue", "magenta", "cyan"],

  f: ["red", "lime", "yellow", "blue", "cyan", "magenta"],

  g: ["lime", "red", "yellow", "blue", "cyan", "magenta"],

  h: ["lime", "yellow", "red", "blue", "cyan", "magenta"],

  i: ["lime", "yellow", "blue", "red", "cyan", "magenta"],

  j: ["lime", "yellow", "blue", "cyan", "red", "magenta"],

  k: ["lime", "yellow", "blue", "cyan", "magenta", "red"],

  l: ["yellow", "lime", "blue", "cyan", "magenta", "red"],

  m: ["yellow", "blue", "lime", "cyan", "magenta", "red"],

  n: ["yellow", "blue", "cyan", "lime", "magenta", "red"],

  o: ["yellow", "blue", "cyan", "magenta", "lime", "red"],

  p: ["yellow", "blue", "cyan", "magenta", "red", "lime"],

  q: ["blue", "yellow", "cyan", "magenta", "red", "lime"],

  r: ["blue", "cyan", "yellow", "magenta", "red", "lime"],

  s: ["blue", "cyan", "magenta", "yellow", "red", "lime"],

  t: ["blue", "cyan", "magenta", "red", "yellow", "lime"],

  u: ["blue", "cyan", "magenta", "red", "lime", "yellow"],

  v: ["cyan", "blue", "magenta", "red", "lime", "yellow"],

  w: ["cyan", "magenta", "blue", "red", "lime", "yellow"],

  x: ["cyan", "magenta", "red", "blue", "lime", "yellow"],

  y: ["cyan", "magenta", "red", "lime", "blue", "yellow"],

  z: ["cyan", "magenta", "red", "green", "yellow", "blue"],

  "0": ["black", "grey", "white", "black", "grey", "white"],

  "1": ["grey", "black", "white", "black", "grey", "white"],

  "2": ["grey", "white", "black", "black", "grey", "white"],

  "3": ["grey", "white", "black", "grey", "black", "white"],

  "4": ["grey", "white", "black", "grey", "white", "black"],

  "5": ["white", "grey", "black", "grey", "white", "black"],

  "6": ["white", "black", "grey", "grey", "white", "black"],

  "7": ["white", "black", "grey", "white", "grey", "black"],

  "8": ["white", "black", "grey", "white", "black", "grey"],

  "9": ["black", "white", "grey", "white", "black", "grey"],

  ".": ["black", "white", "white", "black", "black", "white"],

  ",": ["white", "black", "black", "white", "white", "black"],

  " ": ["black", "black", "black", "black", "black", "black"],

  "?": ["white", "white", "white", "white", "white", "white"]
};

function drawCharacter(letter) {
  const character = document.createElement("div");
  character.classList.add("character");

  const cellOne = document.createElement("div");
  const cellTwo = document.createElement("div");
  const cellThree = document.createElement("div");
  const cellFour = document.createElement("div");
  const cellFive = document.createElement("div");
  const cellSix = document.createElement("div");
  const charKey = document.createElement("p");

  character.appendChild(cellOne);
  character.appendChild(cellTwo);
  character.appendChild(cellThree);
  character.appendChild(cellFour);
  character.appendChild(cellFive);
  character.appendChild(cellSix);
  if (document.querySelector(".key-check").checked === true) {
    character.appendChild(charKey);
  }

  cellOne.classList.add("pixel");
  cellTwo.classList.add("pixel");
  cellThree.classList.add("pixel");
  cellFour.classList.add("pixel");
  cellFive.classList.add("pixel");
  cellSix.classList.add("pixel");
  charKey.classList.add("key");

  cellOne.style.background = characterPallete[letter][0];
  cellTwo.style.background = characterPallete[letter][1];
  cellThree.style.background = characterPallete[letter][2];
  cellFour.style.background = characterPallete[letter][3];
  cellFive.style.background = characterPallete[letter][4];
  cellSix.style.background = characterPallete[letter][5];
  charKey.textContent = letter;

  return document.querySelector(".character-container").appendChild(character);
}

document
  .querySelector(".translate")
  .addEventListener("click", renderTranslation);

function renderTranslation() {
  document.querySelector(".new-image-wrapper").style.display = "none";
  document.querySelector(".new-image").innerHTML = "";
  document.querySelector(".character-container").innerHTML = "";
  const stringToTranslate = document
    .querySelector(".text-to-translate")
    .value.toLowerCase()
    .trim("  ")
    .split("");
  stringToTranslate.forEach(char => drawCharacter(char));
  document.querySelector(".text-to-translate").value = "";
}

//create image from generated translation
document.querySelector(".create-image").addEventListener("click", () => {
  let preImg = document.querySelector(".generated-translation");
  document.querySelector(".new-image").innerHTML = "";
  domtoimage.toPng(preImg).then(function(dataUrl) {
    let img = new Image();
    img.src = dataUrl;
    document.querySelector(".new-image-wrapper").style.display = "block";
    document.querySelector(".new-image").appendChild(img);
  });
});
