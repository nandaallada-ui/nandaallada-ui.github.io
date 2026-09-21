// Homepage template behavior: Gateways dropdown and mobile menu button.
// Plain JavaScript, no libraries.

document.addEventListener("DOMContentLoaded", function () {
  var dropdownItems = document.querySelectorAll(".has-dropdown");
  var menuToggle = document.querySelector(".menu-toggle");
  var mainNav = document.getElementById("main-nav");

  // Close every dropdown except the one passed in (if any).
  function closeDropdowns(exceptItem) {
    dropdownItems.forEach(function (item) {
      if (item !== exceptItem) {
        item.classList.remove("open");
        var btn = item.querySelector(".dropdown-toggle");
        if (btn) btn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Click a dropdown button to open or close its menu.
  dropdownItems.forEach(function (item) {
    var button = item.querySelector(".dropdown-toggle");
    if (!button) return;

    button.addEventListener("click", function () {
      var isOpen = item.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
      closeDropdowns(item);
    });
  });

  // Clicking anywhere outside a dropdown closes them all.
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".has-dropdown")) {
      closeDropdowns(null);
    }
  });

  // Escape closes dropdowns and returns focus to the button that opened them.
  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;

    var openItem = document.querySelector(".has-dropdown.open");
    if (openItem) {
      var btn = openItem.querySelector(".dropdown-toggle");
      closeDropdowns(null);
      if (btn) btn.focus();
    }
  });

  // Mobile menu toggle (only visible on small screens).
  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
      var isOpen = mainNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }
});
