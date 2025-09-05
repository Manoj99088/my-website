const form = document.getElementById('newsletter-form');
const status = document.getElementById('newsletter-status');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  try {
    const res = await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (res.ok) {
      status.textContent = "🎉 Thank you for subscribing!";
      status.style.color = "green";
      form.reset();
    } else {
      status.textContent = "⚠️ Oops! Something went wrong.";
      status.style.color = "red";
    }
  } catch (err) {
    status.textContent = "⚠️ Network error. Try again.";
    status.style.color = "red";
  }
});
