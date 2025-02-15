document.addEventListener("DOMContentLoaded", function () {
    const puzzleContainer = document.querySelector(".puzzle");
    const rows = 3, cols = 3;

    // Load audio file
    const clickSound = new Audio('./click-sound.mp3'); // Change filename if needed

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const piece = document.createElement("div");
            piece.classList.add("puzzle-piece");
            piece.style.top = `${i * 33.33}%`;
            piece.style.left = `${j * 33.33}%`;
            piece.style.backgroundImage = "url('./Images/piece " + (i * cols + j + 1) + ".png')";
            piece.style.backgroundSize = "100% 100%";
            piece.style.backgroundPosition = "center";

            piece.addEventListener("click", function () {
                this.style.opacity = 0;
                clickSound.play();  // Play sound when clicked
            });

            puzzleContainer.appendChild(piece);
        }
    }
});
