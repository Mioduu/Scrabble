export function sendAmmountData() {
    const playersValue = document.querySelectorAll('input[name="players"]')

    playersValue.forEach(radio => {
        radio.addEventListener("change", (event) => {
            const selectedValue = event.target.value
            console.log(`Wybrano ${selectedValue} graczy`)

            localStorage.setItem("playersCount", selectedValue)
    })
})
}

