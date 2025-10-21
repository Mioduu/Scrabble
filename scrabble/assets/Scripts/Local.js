import { elements } from "./dom.js";
import { sendAmmountData } from "./PlayerAmmount.js";

const { title, localBtn, onlineBtn, playersAmmount} = elements

export function hideMenu() {
    sendAmmountData()
    localBtn.classList.add("fade-out")
    onlineBtn.classList.add("fade-out")
    title.classList.add("fade-out")

    setTimeout(() => {
        title.classList.add("fade-out")
        localBtn.style.display = "none"
        onlineBtn.style.display = "none"
        title.textContent = "Lobby settings:"
        title.classList.remove("fade-out")
        title.classList.add("fade-in")
        playersAmmount.style.display = "flex"
        setTimeout(() => {
            localBtn.classList.remove("fade-in");
            onlineBtn.classList.remove("fade-out");
            title.classList.remove("fade-out");
        }, 300);
    }, 300);
}

export function startGame() {
    title.style.display = "none"
    playersAmmount.style.display = "none"
    
}