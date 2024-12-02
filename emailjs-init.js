// emailjs-init.js
(function() {
    emailjs.init("255k42oWLmBaaQqf8")
})();

document.getElementById("subscribe").addEventListener("submit", function(event) {
    event.preventDefault();

    // Show a loading message & disable the button
    const statusMessage = document.getElementById("statusMessage");
    statusMessage.innerText = "Submitting...";
    statusMessage.className = "text-blue-600 font-semibold pt-4";

    const email = document.getElementById("email").value;

    // EmailJS template parameters
    const templateParams = {
        email: email,
        form_link: "https://forms.gle/H3pAPkK6w12DD9K37"
    };

    emailjs.send("service_8i4eff3", "template_ngna1ak", templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response);
            statusMessage.innerText = `
                Thank you for subscribing!
                Please check your email for the next steps.
                If you don’t see it, please check your spam or junk folder.
            `;
            statusMessage.className = "text-green-600 text-sm font-semibold pt-4";
        }, function(error) {
            console.error("EmailJS Error:", error);
            statusMessage.innerText = "Failed to send the email. Please try again.";
            statusMessage.className = "text-red-600 text-sm font-semibold";
        });
});