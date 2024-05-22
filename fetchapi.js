let btn = document.getElementById("btn");
let btn_post = document.getElementById("btn_post");
let name = document.querySelector(".name1");
let res = name.value;
btn_post.addEventListener('click', () => {
  let xhttp = new XMLHttpRequest();
  // Asynchronously
  xhttp.open("POST", `${res}`, true);

  xhttp.onload = () => {
    document.getElementById("id1").innerHTML = this.responseText;
  }

  xhttp.send();
});
btn.addEventListener('click', () => {
  const XhttpR = new XMLHttpRequest();

  XhttpR.open('GET', "ajx_info.txt");

  XhttpR.onload = () => {
    document.getElementById("id").innerHTML = XhttpR.responseText;
  }
  XhttpR.send();

});