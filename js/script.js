// Grid - Custom JavaScript
// Currently minimal JS needed as Bootstrap handles most interactions

document.addEventListener('DOMContentLoaded', function() {
  // Close mobile menu when a nav link is clicked
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      if (navbarCollapse.classList.contains('show')) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: true
        });
      }
    });
  });
});
