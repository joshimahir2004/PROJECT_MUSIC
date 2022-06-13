const Clickin = document.querySelector('.Click-in')
const Clickout = document.querySelector('.Click-out')
const sideBar = document.querySelector('.nav2#log2')

Clickin.addEventListener('click', function(){
    sideBar.style.marginLeft = "5.5rem";
});
Clickout.addEventListener('click', function(){
    sideBar.style.marginLeft = "-102px;";
});
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
