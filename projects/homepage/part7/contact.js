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

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };
    try {
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Accept": "application/json" 
            },
            body: JSON.stringify(data)
        });

        await wait(1000);

        if (response.ok) {
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