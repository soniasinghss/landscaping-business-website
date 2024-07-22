
document.querySelector('form').addEventListener('submit', function(event) {
    alert('Thank you for your message. We will get back to you shortly.');
    event.preventDefault(); // Prevent the form from submitting to see the alert
});

