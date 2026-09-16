
document.getElementById("speech-trigger").onclick = () => {
    const bubbleContainer = document.getElementById("speech-bubble-container");

    if (bubbleContainer.innerHTML === "") {
        bubbleContainer.innerHTML = '<div class="speech-bubble">Hi</div>';
    } else {
        bubbleContainer.innerHTML = "";
    }
};


document.getElementById("sel-shark").onchange = (e) => {
    const choice = e.currentTarget.value;
    const response = document.getElementById("p-shark-response");

    if (choice === "") {
        response.innerHTML = "";
    } else {
        response.innerHTML = `the ${choice} shark. Good choice.`;
    }
};

document.getElementById("btn-add-sticker").onclick = () => {
    const container = document.getElementById("sticker-container");

    const newSticker = document.createElement("img");
    newSticker.src = "../../images/fish2.png"; 
    newSticker.classList.add("sticker");
    newSticker.alt = "fish sticker";

    container.appendChild(newSticker);
};
