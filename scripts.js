document.getElementById('surveyForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert("Survey submitted! Thank you for your feedback.");
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert("Message sent successfully!");
});
