// Initialize EmailJS
(function() {
  emailjs.init("RuheZ3DkaRLstRHmF"); // 🔑 Replace with your Public Key
})();

// Handle form submission
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");
const submitBtn = form?.querySelector("button[type='submit']");

form?.addEventListener("submit", function(e) {
  e.preventDefault();

  // Show loading status
  status.innerText = "⏳ Sending...";
  status.style.color = "blue";
  submitBtn.disabled = true;
  submitBtn.innerText = "Sending...";

  emailjs.sendForm("service_4km361f", "template_009oq7x", this)
    .then(() => {
        
      status.innerText = "✅ Message sent successfully!";
      status.style.color = "green";
      window.location.href = "thankyou.html"; // ✅ redirect after success
      form.reset();
    }, (err) => {
      status.innerText = "❌ Failed to send message. Try again!";
      status.style.color = "red";
      console.error(err);
    })
    .finally(() => {
      // Re-enable the button
      submitBtn.disabled = false;
      submitBtn.innerText = "Send";
    });
});
