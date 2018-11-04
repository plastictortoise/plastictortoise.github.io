
let Quotes = [
"Stuff",
"About",
"Home"
];
let x = Math.floor(Math.random() * 3);
let y = Quotes[x];
let z = "";
document.getElementById("Quote").innerHTML = y;
if (y != "Home") {
  z = "https://simplebinary.github.io/" + y + ".html";
} else {
  z = "https://simplebinary.github.io/";
}
document.querySelector("button")..setAttribute( "onClick", "javascript: link(z);");
