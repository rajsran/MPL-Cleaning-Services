document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    const email = form.querySelector('input[name="email"]').value;
    const name = form.querySelector('input[name="name"]').value;
    const message = form.querySelector('textarea[name="message"]').value;

    if (!email.includes("@") || name.trim() === "" || message.trim() === "") {
      alert("Please fill out the form correctly.");
      e.preventDefault();
    }
  });
});
