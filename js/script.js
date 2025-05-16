// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize portfolio modal functionality
    initializePortfolioModal();
    
    // Initialize form validation
    initializeFormValidation();
    
    // Add fade-in animation to sections
    addFadeInAnimation();
});

// Portfolio modal functionality
function initializePortfolioModal() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const modal = document.querySelector('.modal');
    const modalContent = document.querySelector('.modal-content');
    const closeModal = document.querySelector('.close-modal');

    if (portfolioItems && modal && modalContent && closeModal) {
        portfolioItems.forEach(item => {
            item.addEventListener('click', () => {
                const title = item.querySelector('h3').textContent;
                const description = item.getAttribute('data-description');
                const technologies = item.getAttribute('data-technologies');

                modalContent.innerHTML = `
                    <span class="close-modal">&times;</span>
                    <h2>${title}</h2>
                    <p>${description}</p>
                    <h3>Technologies Used:</h3>
                    <p>${technologies}</p>
                `;

                modal.style.display = 'block';
            });
        });

        // Close modal when clicking the close button
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
}

// Form validation
function initializeFormValidation() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = contactForm.querySelector('#name').value;
            const email = contactForm.querySelector('#email').value;
            const message = contactForm.querySelector('#message').value;
            
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            if (!isValidEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Here you would typically send the form data to a server
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
}

// Email validation helper function
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Add fade-in animation to sections
function addFadeInAnimation() {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    });
    
    sections.forEach(section => {
        observer.observe(section);
    });
}
