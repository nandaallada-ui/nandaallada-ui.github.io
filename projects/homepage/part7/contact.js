const form = document.getElementById("contactform");
const result = document.getElementById("formresult");

function wait(milliseconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, milliseconds);
    });
}

function showResult(message, type) {
    result.textContent = message;
    result.className = type;
}

async function sendForm(event) {
    event.preventDefault();
    showResult("Sending...", "pending");

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Accept": "application/json" },
            body: new FormData(form)
        });
        const data = await response.json();
        await wait(1000);

        if (response.ok && data.success) {
            showResult("Thank you! Your message was sent.", "success");
            form.reset();
        } else {
            showResult("Sorry, your message could not be sent. Please try again.", "error");
        }
    } catch (error) {
        await wait(1000);
        showResult("Sorry, something went wrong. Please try again.", "error");
    }

    setTimeout(function () {
        showResult("", "");
    }, 4000);
}

form.addEventListener("submit", sendForm);