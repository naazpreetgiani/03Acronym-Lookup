//Acronym Lookup by Naazpreet Giani

//Button Event Listener
document.getElementById("search-btn").addEventListener("click", btnClicked);

function btnClicked() {
  //Get Search Input
  let name = document.getElementById("search-in").value.toLowerCase();

  //Test the Search Name
  if (name === "bogo") {
    document.getElementById("acro-info").innerHTML = `<h2 class= "name">
    Buy One, Get One (free)</h2>`;
  } else if (name === "asap") {
    document.getElementById(
      "acro-info"
    ).innerHTML = `<h2 class= "name">As Soon As Possible</h2>`;
  } else if (name === "btw") {
    document.getElementById(
      "acro-info"
    ).innerHTML = `<h2 class= "name">By The Way</h2>`;
  } else if (name === "brb") {
    document.getElementById(
      "acro-info"
    ).innerHTML = `<h2 class= "name">Be Right Back</h2>`;
  } else {
    document.getElementById(
      "acro-info"
    ).innerHTML = `<h2 class= "name">Sorry, I do not know that acronym.</h2>`;
  }
}
//INPUT

//PROCESS

//OUTPUT
