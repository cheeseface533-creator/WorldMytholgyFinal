// 1. Create the floating button element dynamically
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerText = '↑ Back to Top';

// 2. Style it perfectly to match your theme
Object.assign(scrollTopBtn.style, {
  position: 'fixed',
  bottom: '30px',
  right: '30px',
  padding: '12px 20px',
  fontSize: '1rem',
  fontFamily: "'Quantico', sans-serif",
  fontWeight: 'bold',
  backgroundColor: '#13f3ff',
  color: 'black',
  border: 'none',
  borderRadius: '50px',
  cursor: 'pointer',
  boxShadow: '0 0 15px rgba(19, 243, 255, 0.5)',
  zIndex: '10000',
  transition: 'opacity 0.4s ease, transform 0.2s ease',
  opacity: '0', // Hidden by default
  pointerEvents: 'none'
});

document.body.appendChild(scrollTopBtn);

// 3. Control button visibility based on scroll distance
window.addEventListener('scroll', () => {
  if (window.scrollY > 900) {
    scrollTopBtn.style.opacity = '1';
    scrollTopBtn.style.pointerEvents = 'auto';
  } else {
    scrollTopBtn.style.opacity = '0';
    scrollTopBtn.style.pointerEvents = 'none';
  }
});

// 4. Smooth hover animation effects
scrollTopBtn.addEventListener('mouseenter', () => {
  scrollTopBtn.style.transform = 'scale(1.1)';
  scrollTopBtn.style.boxShadow = '0 0 25px rgba(19, 243, 255, 0.9)';
});
scrollTopBtn.addEventListener('mouseleave', () => {
  scrollTopBtn.style.transform = 'scale(1)';
  scrollTopBtn.style.boxShadow = '0 0 15px rgba(19, 243, 255, 0.5)';
});

// 5. Scroll smoothly back to top when clicked
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
