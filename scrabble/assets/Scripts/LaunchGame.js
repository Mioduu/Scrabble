const startBtn = document.getElementById("startBtn")
const settingsBtn = document.getElementById("settingsBtn")
const title = document.getElementById("title")
const localBtn = document.getElementById("localBtn")
const onlineBtn = document.getElementById("onlineBtn")


document.addEventListener("DOMContentLoaded", () => {
    localBtn.style.display = "none"
    onlineBtn.style.display = "none"
})

export function startGame() {
    console.log("Button clicked")
    startBtn.classList.add("fade-out")
    settingsBtn.classList.add("fade-out")

    setTimeout(() => {
        startBtn.style.display = "none"
        settingsBtn.style.display = "none"
        title.textContent = "Servers:"
        title.classList.add("fade-in")
        localBtn.style.display = "flex"
        onlineBtn.style.display = "flex"
        localBtn.classList.add("fade-in")
        onlineBtn.classList.add("fade-in")
    }, 300);
    
}