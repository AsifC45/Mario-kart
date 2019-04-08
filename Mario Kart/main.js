// MARIO KART ITEM BOX

// Add Event Listener
document.getElementById("item").addEventListener("click", getItem)
document.getElementById("plus100").addEventListener("click", run100)

let banana = 0;
let mushroom = 0;
let bullet = 0;
let green = 0;
let star = 0;

// Add Event Function
function getItem() {
   let randNum = Math.random();
   let position = Number(document.getElementById("position").value);

   if (position >= 1 && position <= 6) {
       if (randNum < 0.45) {
           banana++;
           document.getElementById("banana").innerHTML = "Banana: " + banana;
       } else if (randNum > 0.45 && randNum < 0.80) {
           green++;
           document.getElementById("green").innerHTML = "Green Shell: " + green;
       } else if (randNum > 0.80 && randNum < 0.95) {
           star++;
           document.getElementById("star").innerHTML = "Star: " + star;
       } else if (randNum > 0.95 && randNum < 0.99) {
           mushroom++;
           document.getElementById("mushroom").innerHTML = "Golden Mushroom: " + mushroom;
       } else {
           bullet++;
           document.getElementById("bullet").innerHTML = "Bullet Bill: " + bullet;
       }
   } else if (position >= 7 && position <= 12) {
       if (randNum < 0.05) {
           banana++;
           document.getElementById("banana").innerHTML = "Banana: " + banana;
       } else if (randNum > 0.05 && randNum < 0.10) {
           green++;
           document.getElementById("green").innerHTML = "Green Shell: " + green;
       } else if (randNum > 0.10 && randNum < 0.35) {
           star++;
           document.getElementById("star").innerHTML = "Star: " + star;
       } else if (randNum > 0.35 && randNum < 0.70) {
           mushroom++;
           document.getElementById("mushroom").innerHTML = "Golden Mushroom: " + mushroom;
       } else {
           bullet++;
           document.getElementById("bullet").innerHTML = "Bullet Bill: " + bullet;
       }
   }

}

function run100() {
   for (let n = 0; n < 100; n++) {
       getItem();
   }
}

