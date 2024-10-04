window.onload = function() {
    document.getElementById('subscribe-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting the default way

        // Send form data via EmailJS
        emailjs.sendForm('service_8i4eff3', 'template_lt2w09u', this)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert("Thank you for subscribing!");
            }, function(error) {
                console.log('FAILED...', error);
                alert("Oops! Something went wrong: " + error.text);
            });
    });
};