<<<<<<< HEAD
import {startMenu} from '../assets/Scripts/LaunchGame.js'
import {hideMenu, startGame} from '../assets/Scripts/Local.js'
=======
import {startGame} from '../assets/Scripts/LaunchGame.js';
const imgOne = document.getElementById("img1");
imgOne.src = "../assets/images/skrable.jpg";
imgOne.onerror = () => console.log("Nie mogę załadować obrazka");
const imgTwo = document.getElementById("img2");
imgTwo.src = "../assets/images/skrable.jpg";
imgTwo.onerror = () => console.log("Nie mogę załadować obrazka");

startBtn.addEventListener("click", startGame)
>>>>>>> f5ce282 (Dodano obrazki do menu)

startBtn.addEventListener("click", startMenu)
localBtn.addEventListener("click", hideMenu)
enterGame.addEventListener("click", startGame)

