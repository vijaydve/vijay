const wrapper = document.getElementById("wrapper");
const question = document.getElementById("question");
const gif = document.getElementById("gif");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "yes i love too igloo!";
  gif.src = " ";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
// var n = 4
// var a = ""
// var t = 0
// for (var i = 1; i <= n; i++) {
//     for (var k = n; k > i; k--) {
//         a += " "
//     }
//     for (var j = 1; j <= i; j++) {
//         t++
//         a += t + " "
//     }

//     console.log(a)
//     a = ""
//     // console.log()
// }

// var n = 5
// var a = ""
// for (var i = 1; i <= n; i++) {
//     for (var j = 1; j <=i; j++) {
//         a += " *"
//     }
//     console.log(a)
//     a = ""
//     // console.log()
// }