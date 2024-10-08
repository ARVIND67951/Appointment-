document.addEventListener("DOMContentLoaded", function () {
  var popup = document.getElementById("popup");
  var container = document.getElementById("booking-container");
  var form = document.getElementById("appointment-form");
  var formInputs = document.querySelectorAll("#appointment-form input");

  // Function to pause animation
  function pauseAnimation() {
    container.classList.add("paused");
    popup.classList.add("paused");
  }

  // Function to resume animation
  function resumeAnimation() {
    container.classList.remove("paused");
    popup.classList.remove("paused");
  }

  // Event listener for mouse entering the container
  container.addEventListener("mouseenter", function () {
    pauseAnimation();
  });
    // Event listener for mouse leaving the container
  container.addEventListener("mouseleave", function () {
    resumeAnimation();
  });

  // Submit form event listener
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Pause animation while form is being submitted
    pauseAnimation();
    // Simulate form submission (replace with actual implementation)
    setTimeout(function () {
      // Show success message
      var messageDiv = document.getElementById("message");
      messageDiv.innerHTML = "Appointment booked successfully!";
      messageDiv.style.color = "green";
      // Clear form fields
      form.reset();
      // Resume animation after form submission is complete
      resumeAnimation();
    }, 1000); // Simulate server response time
  });
  // Pause animation when any form input is focused
  formInputs.forEach(function (input) {
    input.addEventListener("focus", pauseAnimation);
    input.addEventListener("blur", resumeAnimation);
  });
});
function sendEmail(){
Email.send({
    Host : "smtp.gmail.com",
    Username : "arvindkumarsikandra2002@gmail.com",
    Password : "A528380D68790CFD81AF433D726C8FAF5A48",
    To : 'arvindkumarsikandra2002@gmail.com',
    From : document.getElementId("email").value,
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}
