// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(26, 26, 46, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(26, 26, 46, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Scroll reveal animation
const revealElements = document.querySelectorAll('.section-title, .skill-category, .portfolio-card, .contact-item, .contact-form');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('reveal');
        }
    });
};

// Initial check
revealOnScroll();

// Check on scroll
window.addEventListener('scroll', revealOnScroll);

// Add reveal styles dynamically
const style = document.createElement('style');
style.textContent = `
    .section-title, .skill-category, .portfolio-card, .contact-item, .contact-form {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .reveal {
        opacity: 1;
        transform: translateY(0);
    }
    
    .skill-category:nth-child(1) { transition-delay: 0.1s; }
    .skill-category:nth-child(2) { transition-delay: 0.2s; }
    .skill-category:nth-child(3) { transition-delay: 0.3s; }
    .skill-category:nth-child(4) { transition-delay: 0.4s; }
    .skill-category:nth-child(5) { transition-delay: 0.5s; }
    
    .portfolio-card:nth-child(1) { transition-delay: 0.1s; }
    .portfolio-card:nth-child(2) { transition-delay: 0.2s; }
    .portfolio-card:nth-child(3) { transition-delay: 0.3s; }
`;
document.head.appendChild(style);

// Active navigation link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add active link style
const activeStyle = document.createElement('style');
activeStyle.textContent = `
    .nav-link.active {
        color: #f093fb !important;
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(activeStyle);

// Form submission handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const formButton = this.querySelector('button[type="submit"]');
        const originalButtonText = formButton.textContent;
        
        // Show loading state
        formButton.textContent = '전송 중...';
        formButton.disabled = true;
        
        // Formspree 설정 완료 후 아래 주석을 해제하세요
        // 실제로 이메일을 전송하려면 formspree.io에서 계정을 만들고
        // index.html의 YOUR_FORM_ID를 실제 Form ID로 교체해야 합니다
        this.submit();
        
        /*
        // Formspree 설정 전 테스트용 (설정 완료 후 삭제)
        setTimeout(() => {
            alert('Formspree 설정이 필요합니다.\n\n1. https://formspree.io/에서 무료 계정 생성\n2. index.html의 YOUR_FORM_ID를 실제 Form ID로 교체\n3. 이 주석을 해제하고 위의 this.submit()을 활성화');
            
            formButton.textContent = originalButtonText;
            formButton.disabled = false;
        }, 1000);
        */
    });
}

// Mobile menu handling
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

if (navbarToggler) {
    navbarToggler.addEventListener('click', () => {
        setTimeout(() => {
            if (navbarCollapse.classList.contains('show')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        }, 300);
    });
}

// Close mobile menu when clicking on a link
const mobileNavLinks = document.querySelectorAll('.nav-link');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 992) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
            document.body.style.overflow = 'auto';
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-section');
    if (hero && scrolled < window.innerHeight) {
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
});

// Typing effect for hero title (optional enhancement)
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.innerHTML;
    heroTitle.innerHTML = '';
    let index = 0;
    
    const typeWriter = () => {
        if (index < text.length) {
            heroTitle.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        }
    };
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 500);
}

// Counter animation for stats (if you add them later)
const animateCounter = (element, target, duration) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
};

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    const loadingStyle = document.createElement('style');
    loadingStyle.textContent = `
        body {
            opacity: 0;
            transition: opacity 0.5s ease;
        }
        
        body.loaded {
            opacity: 1;
        }
    `;
    document.head.appendChild(loadingStyle);
});

// Mouse movement effect for hero section (optional)
document.addEventListener('mousemove', (e) => {
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        const profilePlaceholder = document.querySelector('.profile-placeholder');
        if (profilePlaceholder) {
            const moveX = (mouseX - 0.5) * 20;
            const moveY = (mouseY - 0.5) * 20;
            profilePlaceholder.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
    }
});

console.log('Portfolio website loaded successfully!');