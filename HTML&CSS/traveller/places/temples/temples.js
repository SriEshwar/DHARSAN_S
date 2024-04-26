document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("overlay");
    const bookingForm = document.getElementById("booking-form");
    const bookLinks = document.querySelectorAll(".book-link");
    const closeBtn = document.querySelector(".close-btn");

    bookLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        overlay.style.display = "block";
        bookingForm.style.display = "block";
      });
    });

    closeBtn.addEventListener("click", function () {
      overlay.style.display = "none";
      bookingForm.style.display = "none";
    });
  });