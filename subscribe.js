window.onload = function() {
    document.getElementById('subscribe').addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form from submitting the default way

        // Show a loading message or disable the button
        const form = document.getElementById('subscribe');
        form.innerHTML = `<p class="text-blue-600 font-semibold">Submitting...</p>`;

        // Get user email from the form
        const email = document.querySelector('input[name="email"]').value;

        // Send email data via EmailJS
        emailjs.send('service_8i4eff3', 'template_lt2w09u', { email: email })
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                // Change the form's inner content to a "Thank you" message
                form.innerHTML = `<p class="text-green-600 font-semibold">Thank you for subscribing!</p>`;
            }, function(error) {
                console.log('FAILED...', error);
                alert("Oops! Something went wrong: " + error.text);
            });
    });
};