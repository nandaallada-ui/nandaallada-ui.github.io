document.getElementById("btn-speech").onclick = () => {
    const typedText = document.getElementById("txt-speech").value;
    const output = document.getElementById("p-speech-output");

    if (typedText.trim() === "") {
        output.innerHTML = "Type something first!";
    } else {
        output.innerHTML = `You said: "${typedText}"`;
    }
};

document.getElementById("sel-shark").onchange = (e) => {
    const choice = e.currentTarget.value;
    const response = document.getElementById("p-shark-response");

    if (choice === "") {
        response.innerHTML = "";
    } else {
        response.innerHTML = `the ${choice} shark? good shark.`;
    }
};

document.getElementById("btn-add-sticker").onclick = () => {
    const container = document.getElementById("sticker-container");

    const newSticker = document.createElement("span");
    newSticker.classList.add("sticker");
    newSticker.innerHTML = "&#9728;&#65039;"; 

    container.appendChild(newSticker);
};
