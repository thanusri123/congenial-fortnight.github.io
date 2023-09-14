// Add an event listener to the "Submit" button of the contact form
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            // You can add JavaScript code here to handle form submission,
            // such as sending data to a server or displaying a confirmation message.
        });
    }
});

