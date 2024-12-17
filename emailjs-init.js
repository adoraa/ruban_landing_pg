(function () {
  emailjs.init("255k42oWLmBaaQqf8"); // Initialize EmailJS with your user ID
})();

// Function to handle sending the email via EmailJS
function sendEmailJS(email) {
  const templateParams = {
    email: email,
    form_link: "https://docs.google.com/forms/d/e/1FAIpQLSck0xIjXRyO-0dWZXRgwKWQ_sk-3bTbBlv-WGkcOjbLLTMzRw/viewform?usp=sf_link"
  };

  return emailjs.send("service_1dars0b", "template_ngna1ak", templateParams)
    .then(function(response) {
      console.log("EmailJS SUCCESS!", response);
      return { status: "success", message: "Email sent successfully." };
    })
    .catch(function(error) {
      console.error("EmailJS Error:", error);
      return { status: "error", message: "Failed to send the email. Please try again." };
    });
}
