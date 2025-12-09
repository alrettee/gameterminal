// Add a lot more game slots
const games = [
    { name: "granny", src: "games/Granny(JavaScript)/index.html" },
    { name: "basket random", src: "games/basketrandom/index.html" },
    { name: "bit-life", src: "games/bitlife/index.html" },
    { name: "crazy cattle 3D", src: "games/crazycattle3d/index.html" },
    { name: "flappy bird", src: "games/flappybird/index.html" },
    { name: "minecraft 1.5.2", src: "games/minecraft1.5.2/index.html" },
    { name: "moto X3M 2", src: "games/motox3m2/index.html" },
    { name: "OvO", src: "games/ovo/index.html" },
    { name: "slope", src: "games/slope/index.html" },
    { name: "soccer random", src: "games/soccerrandom/index.html" },
    { name: "space invaders", src: "games/spaceinvaders/index.html" },
    { name: "tetris", src: "games/tetris/index.html" },
    { name: "volley random", src: "games/volleyrandom/index.html" },
    { name: "web-retro emulator", src: "games/webretro/index.html" },
    { name: "worlds hardest game", src: "games/worldshardestgame/index.html" },
    { name: "worlds hardest game 2", src: "games/worldshardestgame2/index.html" }
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
