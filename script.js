let image = document.getElementById("image");
let move = document.getElementById("move");
let wood1cap = document.getElementById("wood1cap");
let endPath = document.getElementById("endPath");
let centeredContent = document.querySelector(".centered-content");
let count = 0;
forests = ["Images/forest1.jpg", "Images/forest2.jpg", "Images/forest3.jpg"];
text = ["Beautiful forest", "The path is getting darker and darker.", "Jurney is almost over."];


function advanceScene() {
    move.addEventListener("click", function() {
        count++;
        image.src = forests[count];
        wood1cap.textContent = text[count];
        console.log(count)

        if(count == 3) {
            centeredContent.removeChild(image);
            centeredContent.removeChild(move);
            endPath.classList.remove("hidden");
            let endPathText = endPath.textContent = "You have reached the end of the path.";
            endPath.appendChild(endPathText); }
        else if(count > 3) {
            count = 0;
            }
        }
    )};

advanceScene();