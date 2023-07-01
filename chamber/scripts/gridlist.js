const buiscardsbutton = document.querySelector("#buiscards");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

buiscardsbutton.addEventListener("click", () => {
  // example using arrow function
  display.classList.add("buiscards");
  display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
  display.classList.add("list");
  display.classList.remove("buiscards");
}
