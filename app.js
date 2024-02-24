const text = document.querySelector(".last-part");
const setText = () => {
  setTimeout(() => {
    text.textContent = "web development.";
  }, 0);
  setTimeout(() => {
    text.textContent = "learn new stuffs.";
  }, 4000);
};

setText();
setInterval(setText, 8000);

$("#myList a").on("click", function (e) {
  e.preventDefault();
  //console.log("hi");
  $(this).tab("show");
});
