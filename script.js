// script.js

// Get references to DOM elements
const form = document.getElementById('portfolioForm');
const cardsContainer = document.getElementById('portfolioCards');

// Load existing portfolios from localStorage
let portfolios = JSON.parse(localStorage.getItem('portfolios')) || [];

// Function to render all portfolio cards
function renderPortfolios() {
  cardsContainer.innerHTML = '';
  portfolios.forEach((portfolio, index) => {
    // Get initials for avatar
    const initials = portfolio.name.split(' ').map(n => n[0]).join('').toUpperCase();
    const card = document.createElement('div');
    card.className = 'col-md-6 col-lg-4';
    card.innerHTML = `
      <div class="card card-portfolio h-100 shadow-lg border-0">
        <div class="card-header card-header-gradient d-flex align-items-center justify-content-center">
          <div class="avatar-circle me-2">${initials}</div>
          <span class="fw-bold text-white">${portfolio.name}</span>
        </div>
        <div class="card-body">
          <h6 class="card-subtitle mb-2 text-muted"><i class="bi bi-mortarboard"></i> ${portfolio.college}</h6>
          <p><i class="bi bi-lightbulb"></i> <strong>Project:</strong> ${portfolio.project}</p>
          <p><i class="bi bi-calendar-event"></i> <strong>Event:</strong> ${portfolio.event}</p>
          <p><i class="bi bi-trophy"></i> <strong>Achievements:</strong> ${portfolio.achievements}</p>
          <a href="${portfolio.certificate}" class="btn btn-sm btn-success mt-2" target="_blank"><i class="bi bi-link-45deg"></i> View Certificate</a>
        </div>
      </div>
    `;
    cardsContainer.appendChild(card);
  });
}

// Handle form submission
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const portfolio = {
    name: form.name.value,
    college: form.college.value,
    project: form.project.value,
    event: form.event.value,
    certificate: form.certificate.value,
    achievements: form.achievements.value
  };
  portfolios.push(portfolio);
  localStorage.setItem('portfolios', JSON.stringify(portfolios));
  renderPortfolios();
  form.reset();
});

// Initial render
renderPortfolios(); 