// Dark Mode Toggle Script
document.getElementById('dark-mode-toggle').addEventListener('click', function () {
  document.body.classList.toggle('bg-dark');
  document.body.classList.toggle('text-light');
  let sections = document.querySelectorAll('.navbar, #home, #about, #projects, #contact');
  sections.forEach(function (section) {
      section.classList.toggle('bg-dark');
      section.classList.toggle('text-light');
  });

  if (document.body.classList.contains('bg-dark')) {
      this.textContent = 'Light Mode';
  } else {
      this.textContent = 'Dark Mode';
  }
});
