
// Set current date for the file
const currentDate = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById('current-date').textContent = currentDate.toLocaleDateString('en-US', options);

// Set current year for the footer
document.getElementById('current-year').textContent = currentDate.getFullYear();

// Modal functionality
const modal = document.getElementById("password-modal");
const downloadBtn = document.getElementById("download-btn");
const closeBtn = document.querySelector(".close-btn");

// Open modal when download button is clicked
downloadBtn.addEventListener("click", function(e) {
  e.preventDefault(); // Prevent immediate download
  modal.style.display = "flex";
  
  // Add download start after viewing password
  setTimeout(() => {
    window.location.href = "/files/Mega.rar";
  }, 1500);
});

// Close modal when close button is clicked
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// Close modal when clicking outside the modal content
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Create animated stars in the background
function createStars() {
  const stars = document.getElementById('stars');
  const count = 80; // Number of stars
  
  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    
    // Random positioning
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    
    star.style.left = `${x}%`;
    star.style.top = `${y}%`;
    
    // Random size
    const size = Math.random() * 3 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    
    // Random animation delay
    const delay = Math.random() * 5;
    star.style.animationDelay = `${delay}s`;
    
    // Random animation duration
    const duration = Math.random() * 5 + 8;
    star.style.animationDuration = `${duration}s`;
    
    // Add star to container
    stars.appendChild(star);
  }
}

// Add ripple effect to download button
downloadBtn.addEventListener("click", function(e) {
  const ripple = document.createElement("span");
  const rect = this.getBoundingClientRect();
  
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  
  this.appendChild(ripple);
  
  setTimeout(() => {
    ripple.remove();
  }, 600);
});

// Initialize star animation
window.addEventListener('load', createStars);
