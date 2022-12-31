console.log("js is running");

function vanish() {
  let h = document.getElementById("headingtop");
  console.log("button clicked");
  h.style.animation = "vanish2 1s ";
  setTimeout(() => {
    h.innerHTML = "WELCOME";
    h.style.fontSize = "1000%";
  }, 250);

  let c = document.getElementById("change");
  c.style.animation = "vanish 1s";
  setTimeout(() => {
    c.innerHTML = "23";
    // c.style.fontSize = "900%";
  }, 250);

  let d1 = document.getElementById("celeb1");
  let d2 = document.getElementById("celeb2");
  d1.style.display = "none";
  d2.style.display = "none";

  setTimeout(() => {
    let i1 = document.getElementById("Lhand");
    let i2 = document.getElementById("Rhand");
    // if (i1.src == "./hand.png") {
    //   i1.src = "./confetti.png";
    // } else {
    //   i1.src = "./hand.png";
    // }
    i1.src = "./confetti.png";
    i2.src = "./confetti.png";
    i1.style.transform = "rotate(-90deg)";
    d1.style.display = "block";
    d2.style.display = "block";
  }, 700);

  setTimeout(() => {
    let s1 = document.getElementById("star1");
    let s2 = document.getElementById("star2");
    s1.style.display = "block";
    s2.style.display = "block";
  }, 700);

  setTimeout(() => {
    let year = document.getElementById("headingbottom");
    let b1 = document.getElementById("btnTag");
    let cont = document.getElementById("container");
    cont.style.backgroundImage = "url(./gradient.svg)";
    b1.innerHTML = "Reached!";
    year.style.animation = "colr 1.5s linear infinite";
  }, 500);
}
