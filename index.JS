

var selected = Math.floor(1 + Math.random() * 7);

document
  .querySelector(".img1")
  .setAttribute("src", "./images/image" + selected + ".png");

var namer;

if (selected === 1){
    namer = "Poppy";
};
if (selected === 2){
    namer = "Rachel";
};
if (selected === 3){
    namer = "Julia";
};
if (selected === 4){
    namer = "Thomas";
};
if (selected === 5){
    namer = "Nanna";
};
if (selected === 6){
    namer = "Lorna";
};
if (selected === 7){
    namer = "Charlie";
};




  document.querySelector("#name").innerHTML=namer+"!";
