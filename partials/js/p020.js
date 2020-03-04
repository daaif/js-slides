function handleChange(evt) {
  const msg = "Vous avez sélectionné : <strong>"
    + evt.target.value
    + "</strong>";
  document.querySelector(".ctn .out1").innerHTML = msg;
}
function handleMove(evt) {
  const pos = "x : " + evt.clientX
    + " y : " + evt.clientY;
  document.querySelector(".ctn .out2").innerHTML = pos;
}