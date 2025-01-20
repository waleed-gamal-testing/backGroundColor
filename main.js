function changeColor() {
  //pick random value from red
  let red = Math.floor(Math.random() * 256);

  //pick random value from green
  let green = Math.floor(Math.random() * 256);

  //pick random value from blue
  let blue = Math.floor(Math.random() * 256);

  //pick any random color
  let color = "rgb(" + red + "," + green + "," + blue + ")";

  //from html doc, JS will get the background div element by its id "bg"
  document.getElementById("bg").style.backgroundColor = color;
}
