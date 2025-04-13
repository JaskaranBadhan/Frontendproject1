
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    hamburger.addEventListener('click', function() {
      navLinks.parentElement.classList.toggle('active');
      
      // Toggle hamburger icon between bars and times
      const icon = this.querySelector('i');
      if (navLinks.parentElement.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
    
    // Scroll effect for navbar
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.querySelector('.navbar').classList.add('scrolled');
      } else {
        document.querySelector('.navbar').classList.remove('scrolled');
      }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          // Close mobile menu if open
          navLinks.parentElement.classList.remove('active');
          hamburger.querySelector('i').classList.remove('fa-times');
          hamburger.querySelector('i').classList.add('fa-bars');
          
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Auth Modals
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const closeLoginModal = document.getElementById('closeLoginModal');
    const closeRegisterModal = document.getElementById('closeRegisterModal');
    const switchToRegister = document.getElementById('switchToRegister');
    const switchToLogin = document.getElementById('switchToLogin');
    
    function openModal(modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
    
    function closeModal(modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
    
    if (loginBtn) {
      loginBtn.addEventListener('click', function() {
        openModal(loginModal);
      });
    }
    
    if (registerBtn) {
      registerBtn.addEventListener('click', function() {
        openModal(registerModal);
      });
    }
    
    if (closeLoginModal) {
      closeLoginModal.addEventListener('click', function() {
        closeModal(loginModal);
      });
    }
    
    if (closeRegisterModal) {
      closeRegisterModal.addEventListener('click', function() {
        closeModal(registerModal);
      });
    }
    
    if (switchToRegister) {
      switchToRegister.addEventListener('click', function(e) {
        e.preventDefault();
        closeModal(loginModal);
        openModal(registerModal);
      });
    }
    
    if (switchToLogin) {
      switchToLogin.addEventListener('click', function(e) {
        e.preventDefault();
        closeModal(registerModal);
        openModal(loginModal);
      });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
      if (e.target === loginModal) {
        closeModal(loginModal);
      }
      if (e.target === registerModal) {
        closeModal(registerModal);
      }
    });
    
    // Form submissions
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (loginForm) {
      loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        // Here you would typically send this data to your backend
        console.log('Login attempt with:', { email, password });
        
        // Simulate successful login
        alert('Login successful! Redirecting to Soil anlysis page');
        closeModal(loginModal);
        window.open('soil.html', '_blank');
      });
    }
    
    if (registerForm) {
      registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('registerConfirmPassword').value;
        const farmType = document.getElementById('registerFarmType').value;
        
        if (password !== confirmPassword) {
          alert('Passwords do not match!');
          return;
        }
        
        // Here you would typically send this data to your backend
        console.log('Registration attempt with:', { name, email, password, farmType });
        
        // Simulate successful registration
        alert('Registration successful! Please login with your new credentials.');
        closeModal(registerModal);
        openModal(loginModal);
      });
    }
    
    // CTA buttons
    const heroTestBtn = document.getElementById('heroTestBtn');
    const heroLearnBtn = document.getElementById('heroLearnBtn');
    const ctaBtn = document.getElementById('ctaBtn');
    
    if (heroTestBtn) {
      heroTestBtn.addEventListener('click', function() {
        openModal(registerModal);
      });
    }
    
    if (heroLearnBtn) {
      heroLearnBtn.addEventListener('click', function() {
        document.querySelector('#how-it-works').scrollIntoView({ behavior: 'smooth' });
      });
    }
    
    if (ctaBtn) {
      ctaBtn.addEventListener('click', function() {
        openModal(registerModal);
      });
    }
    
    // Add animation on scroll
    const animateOnScroll = function() {
      const elements = document.querySelectorAll('.feature-card, .step, .testimonial-card');
      
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // If element is in viewport
        if(position.top < window.innerHeight && position.bottom >= 0) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    };
    
    // Set initial styles for animation
    document.querySelectorAll('.feature-card, .step, .testimonial-card').forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run animation check on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
  });
  