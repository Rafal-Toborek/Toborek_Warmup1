let image = document.getElementById("image");
let move = document.getElementById("move");
let wood1cap = document.getElementById("wood1cap");
let endPath = document.getElementById("endPath");
let centeredContent = document.querySelector(".centered-content");
let count = 0;
forests = ["images/forest1.jpg", "images/forest2.jpg", "images/forest3.jpg"];
text = ["Beautiful forest", "The path is getting darker and darker.", "You have reached the end of the path."];




move.addEventListener("click", function() {
    count++;
    image.src = forests[count];
    wood1cap.textContent = text[count];
    console.log(count)

    if(count == 3) {
        centeredContent.removeChild(image);
        centeredContent.removeChild(move);
        endPath.classList.remove("hidden");
    };});
