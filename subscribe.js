window.onload = function() {
    document.getElementById('subscribe').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting the default way
        // Show a loading message or disable the button
        const form = document.getElementById('subscribe');
        form.innerHTML = `<p class="text-blue-600 font-semibold">Submitting...</p>`;

        // Send form data via EmailJS
        emailjs.sendForm('service_8i4eff3', 'template_lt2w09u', this)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                //alert("Thank you for subscribing!");
                // Change the form's inner content to a "Thank you" message
                const form = document.getElementById('subscribe');
                form.innerHTML = `<p class="text-green-600 font-semibold">Thank you for subscribing!</p>`;
            }, function(error) {
                console.log('FAILED...', error);
                alert("Oops! Something went wrong: " + error.text);
            });
    });
    // Close the modal when the user clicks the 'Close' button
    document.getElementById('close-popup').addEventListener('click', function() {
        document.getElementById('popup-modal').classList.add('hidden');
    });
};