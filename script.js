// ============= menu icon ===============
const menuicon = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".nav-menu");

menuicon.addEventListener("click", function () {
  menuicon.classList.toggle("active");
  navMenu.classList.toggle("active");
});



const $ = document.querySelector.bind(document),
  $$ = document.querySelectorAll.bind(document);

const titleContent = $$(".title-item"),
  boxContent = $$(".box-item");

titleContent.forEach((title, index) => {
  const boxed = boxContent[index];
  title.onclick = function () {
    $(".title-item.active").classList.remove("active");
    $(".box-item.active").classList.remove("active");
    this.classList.add("active");
    boxed.classList.add("active");
  };
});

function LinkTo(){
  location.href='https://www.hay8811.com/?inviteCode=1766861';
}