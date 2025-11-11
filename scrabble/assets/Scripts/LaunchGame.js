import { elements } from "./dom.js"
const { startBtn, settingsBtn, title, localBtn, onlineBtn, playersAmmount } = elements

document.addEventListener("DOMContentLoaded", () => {
    localBtn.style.display = "none"
    onlineBtn.style.display = "none"
})

export function startMenu() {
    console.log("Button clicked")
    startBtn.classList.add("fade-out")
    settingsBtn.classList.add("fade-out")
    title.classList.add("fade-out")

    setTimeout(() => {
        title.classList.remove("fade-out")
        title.textContent = "Servers:"
        title.classList.add("fade-in")
        startBtn.style.display = "none"
        settingsBtn.style.display = "none"
        localBtn.style.display = "flex"
        onlineBtn.style.display = "flex"
        localBtn.classList.add("fade-in")
        onlineBtn.classList.add("fade-in")
        setTimeout(() => {
            localBtn.classList.remove("fade-in");
            onlineBtn.classList.remove("fade-in");
            title.classList.remove("fade-in");
        }, 300);
    }, 300);
    
}