
let Quotes = [
"Stuff",
"About",
"Home"
];
let x = Math.floor(Math.random() * 3);
let y = Quotes[x];
document.getElementById("Quote").innerHTML = y;
if (y != "Home") {
  let z = "https://simplebinary.github.io/" + y + ".html";
} else {
  let z = "https://simplebinary.github.io/";
}
document.querySelector("button").onclick = "link(" + z + ")";
