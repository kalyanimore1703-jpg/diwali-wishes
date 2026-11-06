function showWishes() {

    const wishes = document.getElementById("special-wishes");
    const button = document.getElementById("wishButton");

    if (wishes.classList.contains("hidden")) {

        wishes.classList.remove("hidden");

        button.innerHTML = "💖 Close Special Wishes 💖";

    } else {

        wishes.classList.add("hidden");

        button.innerHTML = "✨ Open Your Special Wishes ✨";

    }
}