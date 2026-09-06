document.addEventListener("DOMContentLoaded", function () {
  var sidebar = document.querySelector(".sidebar");
  var toggle = document.querySelector(".sidebar-toggle");
  var closeBtn = document.querySelector(".sidebar-close");
  if (toggle && sidebar) {
    toggle.addEventListener("click", function () {
      sidebar.classList.add("open");
    });
  }
  if (closeBtn && sidebar) {
    closeBtn.addEventListener("click", function () {
      sidebar.classList.remove("open");
    });
  }

  var modeBtns = document.querySelectorAll(".mode-toggle, .mobile-theme-toggle");
  var modeLabel = document.querySelector(".mode-toggle .mode-label");
  var saved = localStorage.getItem("mm-theme");
  if (saved === "light") {
    document.body.classList.add("light");
    if (modeLabel) modeLabel.textContent = "Dark mode";
  }
  modeBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var isLight = document.body.classList.toggle("light");
      localStorage.setItem("mm-theme", isLight ? "light" : "dark");
      if (modeLabel) modeLabel.textContent = isLight ? "Dark mode" : "Light mode";
    });
  });

  var contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.getElementById("cf-name").value.trim();
      var email = document.getElementById("cf-email").value.trim();
      var subjectField = document.getElementById("cf-subject").value.trim();
      var message = document.getElementById("cf-message").value.trim();
      var subject = subjectField || ("Portfolio inquiry from " + name);
      var body = message + "\n\nFrom: " + name + " (" + email + ")";
      var mailto = "mailto:maisha.mahfuza13@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
      window.location.href = mailto;
    });
  }

  // Scroll-reveal animations (fade + rise into view)
  var revealSelector = [
    ".hero-text", ".hero-photo-wrap", ".card", ".cert-card", ".tile-card",
    ".tile-card2", ".entry", ".role-block", ".tl-entry", ".skill-group",
    ".stat-grid > div", ".page-intro"
  ].join(", ");
  var revealTargets = document.querySelectorAll(revealSelector);
  if ("IntersectionObserver" in window && revealTargets.length) {
    revealTargets.forEach(function (el) { el.classList.add("reveal"); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealTargets.forEach(function (el) { io.observe(el); });
  }

  // Animate skill bars filling up when they scroll into view
  var skillBars = document.querySelectorAll(".skill-bar > span");
  if (skillBars.length) {
    skillBars.forEach(function (bar) {
      bar.dataset.target = bar.style.width;
      bar.style.width = "0%";
    });
    if ("IntersectionObserver" in window) {
      var barIo = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var bar = entry.target;
            requestAnimationFrame(function () {
              bar.style.width = bar.dataset.target;
            });
            barIo.unobserve(bar);
          }
        });
      }, { threshold: 0.4 });
      skillBars.forEach(function (bar) { barIo.observe(bar); });
    } else {
      skillBars.forEach(function (bar) { bar.style.width = bar.dataset.target; });
    }
  }
});
