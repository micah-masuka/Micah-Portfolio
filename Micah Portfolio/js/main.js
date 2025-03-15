// Page loader
window.addEventListener('load', function() {
    // Simulate loading delay for better effect (optional)
    setTimeout(() => {
        document.body.classList.add('loaded');
        
        // Make hero section visible immediately
        document.querySelector('.hero').classList.add('visible');
        checkSections();
    }, 500);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact button functionality
document.querySelector('.contact-btn').addEventListener('click', function() {
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
});

// Section animation on scroll
const sections = document.querySelectorAll('section');

function checkSections() {
    const triggerBottom = window.innerHeight * 0.8;
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        
        if (sectionTop < triggerBottom) {
            section.classList.add('visible');
        }
    });
}

// Initialize section visibility
window.addEventListener('load', function() {
    // Make hero section visible immediately
    document.querySelector('.hero').classList.add('visible');
    checkSections();
});

window.addEventListener('scroll', checkSections);

// Portfolio navigation
const portfolioNav = document.querySelector('.portfolio-nav');
const portfolioButtons = portfolioNav.querySelectorAll('button');
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        portfolioButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        // Add filter functionality
        const filter = this.textContent.trim().toLowerCase();
        
        if (filter === 'browse all') {
            portfolioItems.forEach(item => {
                item.style.display = 'block';
            });
        } else {
            portfolioItems.forEach(item => {
                // Here you would normally check if the item has the relevant tag/category
                // For now we'll just simulate filtering
                const shouldShow = Math.random() > 0.5; // Random for demo
                item.style.display = shouldShow ? 'block' : 'none';
            });
        }
    });
});

// Go back up button functionality
document.querySelector('.go-up-btn').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Add your form submission logic here
    console.log('Form submitted:', data);
    
    // Reset form
    this.reset();
    
    // Show success message
    const successMsg = document.createElement('div');
    successMsg.className = 'success-message';
    successMsg.innerHTML = 'Thank you for your message! I will get back to you soon.';
    successMsg.style.backgroundColor = 'rgba(0, 184, 148, 0.8)';
    successMsg.style.color = 'white';
    successMsg.style.padding = '15px';
    successMsg.style.borderRadius = '10px';
    successMsg.style.textAlign = 'center';
    successMsg.style.marginTop = '20px';
    
    this.appendChild(successMsg);
    
    setTimeout(() => {
        successMsg.style.opacity = '0';
        successMsg.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            this.removeChild(successMsg);
        }, 500);
    }, 3000);
});

// Add scroll reveal animations
window.addEventListener('scroll', reveal);

function reveal() {
    const reveals = document.querySelectorAll('.stage, .skill-item, .portfolio-item');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Initialize animations on page load
reveal();

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        this.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    if (navLinks.classList.contains('active') && 
        !e.target.closest('.nav-links') && 
        !e.target.closest('.mobile-menu-toggle')) {
        navLinks.classList.remove('active');
        if (mobileMenuToggle) {
            mobileMenuToggle.classList.remove('active');
        }
        document.body.classList.remove('menu-open');
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a, .contact-btn').forEach(item => {
    item.addEventListener('click', function() {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            if (mobileMenuToggle) {
                mobileMenuToggle.classList.remove('active');
            }
            document.body.classList.remove('menu-open');
        }
    });
}); 