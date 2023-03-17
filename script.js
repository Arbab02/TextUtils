let text = document.getElementById('text');


function bold() {
  text.classList.toggle('bold');

}

function italic() {

  text.classList.toggle('italic');
}


function up() {

  document.getElementById('text').style.textTransform = "uppercase";
}

function low() {

  document.getElementById('text').style.textTransform = "lowercase";
}

function Cap() {

  document.getElementById('text').style.textTransform = "capitalize";

}

function center() {

  document.getElementById('text').style.textAlign = "center";
}

function left() {

  document.getElementById('text').style.textAlign = "left";
}

function right() {

  document.getElementById('text').style.textAlign = "right";
}

function justify() {

  document.getElementById('text').style.textAlign = "justify";
}

function underline() {

  text.classList.toggle('underline');
}

function color() {
  let color = document.getElementById('color').value;
  document.getElementById('text').style.color = color;
}

function bg() {
  let bgColor = document.getElementById('bgColor').value;
  document.getElementById('text').style.backgroundColor = bgColor;
}

function erase() {

  document.getElementById('text').value = "";
}

function sizer() {
  let sizer = document.getElementById('sizer').value;
  document.getElementById('text').style.fontSize = sizer;
}

function family() {
  let family = document.getElementById('family').value;
  document.getElementById('text').style.fontFamily = family;
}

function words() {
  let lb1 = document.getElementById('lb1');
  let text1 = text.value;
  let wordLength = text1.split(" ")
  lb1.innerHTML = wordLength.length;
}


function letters() {
  let lb2 = document.getElementById('lb2');
  let text2 = text.value;
  let letterLength = text2.split("")
  lb2.innerHTML = letterLength.length;
}


