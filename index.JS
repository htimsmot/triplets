function updateSite(n) {
  document
    .querySelector(".img1")
    .setAttribute("src", "./images/image" + n + ".png");

  var namer;

  if (n === 1) {
    namer = "Poppy";
  }
  if (n === 2) {
    namer = "Rachel";
  }
  if (n === 3) {
    namer = "Julia";
  }
  if (n === 4) {
    namer = "Charlie";
  }
  if (n === 5) {
    namer = "Thomas";
  }
  if (n === 6) {
    namer = "Lorna";
  }
  if (n === 8) {
    namer = "Nanna";
  }

  document.querySelector("#name").innerHTML = namer + "!";
}

document.querySelector("#person").addEventListener("click", function () {
  var selectedPerson = Math.floor(1 + Math.random() * 6);
  updateSite(selectedPerson);
});

document.querySelector("#triplet").addEventListener("click", function () {
  var selectedTriplet = Math.floor(1 + Math.random() * 3);
  updateSite(selectedTriplet);
});

document.querySelector("#child").addEventListener("click", function () {
  var selectedChild = Math.floor(1 + Math.random() * 4);
  updateSite(selectedChild);
});

document.querySelector("#adult").addEventListener("click", function () {
  var selectedAdult = Math.floor(5 + Math.random() * 2);
  updateSite(selectedAdult);
});

document.querySelector("#top").addEventListener("click", function () {
  const date = new Date();
  var atTop = Math.floor((date.getTime() / (60000 * 60 * 24) + 1) % 3);
  updateSite(atTop);
  });
