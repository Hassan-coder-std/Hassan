// Simple form submission handling
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    // You can add more functionality here, like sending the form data to a server
});