// added by AI suggestion, looked at repo for reference
const slides = [
    {
        title: "Shark facts",
        fact: "Sharks have existed longer than trees.",
        image: "../../images/shark.jpg",
        alt: "a great white shark",
        link: "fact.html"
    },
    {
        title: "Shark behaviors",
        fact: "Sharks are curious creatures, sometimes observed biting boats.",
        image: "../../images/GWB.webp",
        alt: "shark biting boat",
        link: "behavior.html"
    },
    {
        title: "Poaching and global warming",
        fact: "Around 100 million sharks are poached for their fins every year.",
        image: "../../images/globalwarm.jpg",
        alt: "global warming and the oceans",
        link: "pollution.html"
    },
    {
        title: "Shark subspecies",
        fact: "Basking sharks can reach 7 to 8.5 meters long.",
        image: "../../images/baskingshark.jpg",
        alt: "a basking shark, feeding",
        link: "subspecies.html"
    }
];

let current = 0;

const titleelement = document.getElementById("slidetitle");
const factelement = document.getElementById("slidefact");
const linkelement = document.getElementById("slidelink");
const imageelement = document.getElementById("slideimage");
const countelement = document.getElementById("slidecount");

function show(index) {
    // makes sure the slide goes back to the 1st page, added w AI help
    current = (index + slides.length) % slides.length;
    const slide = slides[current];
    titleelement.textContent = slide.title;
    factelement.textContent = slide.fact;
    linkelement.href = slide.link;
    linkelement.textContent = "Go to " + slide.title;
    imageelement.src = slide.image;
    imageelement.alt = slide.alt;
    countelement.textContent = (current + 1) + " / " + slides.length;
}

document.getElementById("prev").addEventListener("click", function () {
    show(current - 1);
});
document.getElementById("next").addEventListener("click", function () {
    show(current + 1);
});
show(0);