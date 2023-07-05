const scrollTop = document.querySelector(".scroll__top");

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 200) {
    scrollTop.style.display = "block";
  } else {
    scrollTop.style.display = "none";
  }
});

scrollTop.addEventListener("click", handleScrollTop);

function handleScrollTop() {
  document.documentElement.scrollTop = 0;
}
