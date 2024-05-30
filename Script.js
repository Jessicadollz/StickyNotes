let color_text = document.querySelector(".color-text").children;
let input = color_text[1].children[0];
input.value = "#B6D0E2";
let button = document.querySelector(".buttonss button");
let right_container = document.querySelector(".right-container-notes");
let textarea = document.querySelector("#textarea");

let button2 = document.querySelectorAll(".buttons");

button.addEventListener("click", () => {
  if (textarea.value == "") {
    textarea.classList.add("animate__shakeX");
    alert("Enter Some Text");
    return;
  }
  textarea.classList.remove("animate__shakeX");
  addNotes(textarea.value, input.value);
  textarea.value = "";
  document.querySelector(".notesNotAdded").style.display = "none";
  button2 = document.querySelectorAll(".buttons");
  removeNotes();
});

function addNotes(note, color) {
  let div1 = document.createElement("div");
  div1.innerHTML = `<p>${note}</p> <button class="buttons">X</button>`;
  div1.style.backgroundColor = `${color}`;
  div1.classList.add("notes");
  right_container.appendChild(div1);
  let allNotes = document.querySelectorAll(".notes");
  console.log("all notes=", allNotes);
}

function removeNotes() {
  button2 = document.querySelectorAll(".buttons");
  button2.forEach((val, idx) => {
    val.addEventListener("click", () => {
      val.parentElement.remove();
    });
  });
}