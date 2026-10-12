const jsonurl = "https://nandaallada-ui.github.io/json/sharks.json";
const imagefolder = "/images/";

async function getSharks() {
    try {
        const response = await fetch(jsonurl);
        if (!response.ok) {
            throw new Error("Request failed: " + response.status);
        }
        return await response.json();
    } catch (error) {
        console.log(error);
        return null;
    }
}

function buildShark(shark) {
    const article = document.createElement("article");
    article.className = "species";
    article.id = "shark" + shark._id;

    const heading = document.createElement("h2");
    heading.textContent = shark.name;
    article.append(heading);

    const image = document.createElement("img");
    image.src = imagefolder + shark.image;
    image.alt = shark.alt;
    article.append(image);

    const list = document.createElement("ul");
    const details = [
        ["Lifespan", shark.lifespan],
        ["Size", shark.size],
        ["Habitat", shark.habitat],
        ["Diet", shark.diet]
    ];
    details.forEach(function (detail) {
        const item = document.createElement("li");
        item.textContent = detail[0] + ": " + detail[1];
        list.append(item);
    });
    article.append(list);

    return article;
}

async function showSharks() {
    const grid = document.getElementById("speciesgrid");
    const sharks = await getSharks();
    if (sharks == null) {
        grid.textContent = "Sorry, the shark list could not be loaded.";
        return;
    }
    sharks.forEach(function (shark) {
        grid.append(buildShark(shark));
    });
}

showSharks();