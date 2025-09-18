
document.addEventListener('DOMContentLoaded', function() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const form = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if (!name || !email || !message) {
        alert('Please fill in name, email (or WhatsApp) and a message.');
        return;
      }
      // Open user's email client with prefilled subject & body
      const subject = encodeURIComponent('Contact from website — ' + name);
      const body = encodeURIComponent(message + '\n\nContact: ' + email);
      // show note to user
      if (formNote) formNote.classList.remove('hidden');
      window.location.href = `mailto:contact@hstore.example?subject=${subject}&body=${body}`;
    });
  }
});
