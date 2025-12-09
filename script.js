// Add a lot more game slots
const games = [
    { name: "Granny(PC ONLY)", src: "games/Granny(JavaScript)/index.html" },
    { name: "Space Shooter", src: "games/shooter/index.html" }
];

const gameListContainer = document.querySelector(".game-list");
const fullscreenContainer = document.getElementById("fullscreen-container");
const fullscreenIframe = document.getElementById("fullscreen-iframe");
const exitBtn = document.getElementById("exit-fullscreen");

// Load game cards dynamically
games.forEach(game => {
    const gameDiv = document.createElement("div");
    gameDiv.classList.add("game");

    const title = document.createElement("h2");
    title.textContent = game.name;

    const thumbnail = document.createElement("div");
    thumbnail.classList.add("game-thumbnail");
    thumbnail.textContent = ">>> CLICK TO PLAY <<<";

    gameDiv.appendChild(title);
    gameDiv.appendChild(thumbnail);
    gameListContainer.appendChild(gameDiv);

    gameDiv.addEventListener("click", () => {
        fullscreenIframe.src = game.src;
        fullscreenContainer.classList.remove("hidden");

        // Request fullscreen
        if (fullscreenContainer.requestFullscreen) fullscreenContainer.requestFullscreen();
        else if (fullscreenContainer.webkitRequestFullscreen) fullscreenContainer.webkitRequestFullscreen();
        else if (fullscreenContainer.msRequestFullscreen) fullscreenContainer.msRequestFullscreen();
    });
});

// Exit fullscreen
exitBtn.addEventListener("click", () => {
    if (document.fullscreenElement) document.exitFullscreen();
    fullscreenContainer.classList.add("hidden");
    fullscreenIframe.src = "";
});

document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
        fullscreenContainer.classList.add("hidden");
        fullscreenIframe.src = "";
    }
});
