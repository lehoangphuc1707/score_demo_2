let home = document.getElementById("home-el")
let guest = document.getElementById("guest-el")

home = 0
guest = 0

function homeplus1() {
    console.log("+1 clicked")
    home += 1
    document.getElementById("home-el").textContent = home.textContent
}