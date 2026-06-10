(function () {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  document.querySelectorAll("form[data-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const message = form.querySelector(".form-message");
      if (message) {
        const type = form.dataset.form;
        message.textContent =
          type === "booking"
            ? "Thank you. Your Woolly Weekender enquiry is ready for the Green Glow team to review."
            : type === "feedback"
              ? "Thank you for sharing your Green Glow experience."
              : "Thank you. A Green Glow team member will respond within 1-24 hours.";
        message.classList.add("is-visible");
        message.focus();
      }

      form.reset();
    });
  });
})();
