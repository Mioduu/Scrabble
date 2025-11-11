import { startMenu } from '../assets/Scripts/LaunchGame.js';
import { hideMenu, startGame } from '../assets/Scripts/Local.js';

startBtn.addEventListener("click", startMenu)
localBtn.addEventListener("click", hideMenu)
enterGame.addEventListener("click", startGame)