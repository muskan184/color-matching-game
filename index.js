const container = document.getElementById("container");
const colors = ["red", "green", "blue"];
const win = document.getElementById("sp");
const lose = document.getElementById("dp");
win.style.color = "black";
lose.style.color = "black";

for (i = 1; i <= 40; i++) {
  let random = Math.floor(Math.random() * colors.length);
  box = document.createElement("div");
  box.classList.add("road");
  box.classList.add(colors[random]);
  container.append(box);
}

let first;
let second;
let ind = 1;

container.addEventListener("click", (e) => {
  // if (!e.target.classList.contains("container")) {
  //   let currentcolor = e.target.classList[1];
  //   if (currentcolor) {
  // if (!e.target.classList.contains("container")) {
  if (!first) {
    first = e.target.classList[1];
    e.target.classList.add("selected");
  } else if (!second && second !== first) {
    second = e.target.classList[1];

    if (second === undefined) {
      document.getElementById("box").innerHTML =
        "dont choose one div again and again";
      document.getElementById("box").style.backgroundColor = "blue";
      document.getElementById("box").style.color = "white";
      document.getElementById("box").style.fontSize = "30px";
    } else if (first === second) {
      win.innerHTML = "😊😊win😊😊";
    } else {
      lose.innerHTML = "😔😔lose😔😔";
    }
    console.log(first);
    console.log(second);
    first = "";
    second = "";
  }
  //   }
  // }
});
