const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
// const cards = document.querySelector(".buiscards");

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject["prophets"];
    prophets.forEach(displayProphets);
  });

function displayProphets(prophet) {
  // Create elements to add to the document
  let card = document.createElement("section");
  let h2 = document.createElement("h2");
  let portrait = document.createElement("img");

  let dob = document.createElement("p");
  let birthplace = document.createElement("p");

  // Change the textContent property of the h2 element to contain the prophet's full name
  h2.textContent = `${prophet.name} ${prophet.lastname}`;

  dob.textContent = `Date of Birth: ${prophet.birthdate}`;
  birthplace.textContent = `Birthplace: ${prophet.birthplace}`;

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  portrait.setAttribute("src", prophet.imageurl);
  portrait.setAttribute(
    "alt",
    `Portrait of ${prophet.name} ${prophet.lastname}`
  );
  portrait.setAttribute("loading", "lazy");
  portrait.setAttribute("width", "340");
  portrait.setAttribute("height", "440");

  // Add/append the section(card) with the h2 element
  card.appendChild(h2);
  card.appendChild(portrait);
  card.appendChild(dob);
  card.appendChild(birthplace);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector("div.cards").appendChild(card);
}
