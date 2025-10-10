const startBtn = document.getElementById("startBtn")
const settingsBtn = document.getElementById("settingsBtn")
const title = document.getElementById("title")
const serversDiv = document.getElementById("serversDiv")

document.addEventListener("DOMContentLoaded", () => {
    startBtn.style.display = "flex"
    settingsBtn.style.display = "flex"
})

export function startGame() {
    console.log("Button clicked")
    startBtn.style.display = "none"
    settingsBtn.style.display = "none"
    title.textContent = "Servers:"
    serversDiv.style.display = "flex"
}