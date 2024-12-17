document.getElementById("subscribe").addEventListener("submit", function (event) {
    event.preventDefault();  // Prevent default form submission
  
    const statusMessage = document.getElementById("statusMessage");
    statusMessage.innerText = "Submitting...";
    statusMessage.className = "text-blue-600 font-semibold pt-4";
  
    const email = document.getElementById("email").value;
  
    // Submit to Google Sheets via fetch
    const formData = new FormData(document.getElementById("subscribe"));
    fetch('https://script.google.com/macros/s/AKfycbyfMgoG6RwFOQcBwTY83zb2JyadDwnbA9mbVAyjzZpwGDGtonW9D42Tqp1uaKVPL4OasQ/exec', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      if (data.result === 'success') {
        statusMessage.innerText = "Thank you for subscribing!";
        statusMessage.className = "text-green-600 text-sm font-semibold pt-4";
  
        // Send the email via EmailJS
        return sendEmailJS(email);
      } else {
        throw new Error('Google Sheets submission failed.');
      }
    })
    .then(emailResult => {
      if (emailResult.status === 'success') {
        console.log(emailResult.message);
      } else {
        throw new Error(emailResult.message);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      statusMessage.innerText = "There was an error. Please try again.";
      statusMessage.className = "text-red-600 text-sm font-semibold pt-4";
    });
  });
  