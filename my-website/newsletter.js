const newsletterForm = document.getElementById("newsletter-form");
const newsletterStatus = document.getElementById("newsletter-status");

newsletterForm?.addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("newsletter-email").value;

  // Simple mock (you can later connect Mailchimp, ConvertKit, etc.)
  if (email.includes("@")) {
    newsletterStatus.innerText = "✅ Subscribed successfully!";
    newsletterStatus.style.color = "green";
    newsletterForm.reset();
  } else {
    newsletterStatus.innerText = "❌ Please enter a valid email.";
    newsletterStatus.style.color = "red";
  }
});
