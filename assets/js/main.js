// JavaScript otimizado para performance

// Inicializa Lucide Icons
document.addEventListener('DOMContentLoaded', function() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

// Lógica para alternar tema (Dark/Light Mode)
const themeToggle = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;

const setTema = (theme) => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
        htmlEl.classList.add('dark');
    } else {
        htmlEl.classList.remove('dark');
    }
}

// Event listener otimizado com debounce
let themeToggleTimeout;
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        clearTimeout(themeToggleTimeout);
        themeToggleTimeout = setTimeout(() => {
            const currentTheme = localStorage.getItem('theme') || 'dark';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTema(newTheme);
        }, 100);
    });
}

// Inicialização do tema
const initialTheme = localStorage.getItem('theme') || 'dark';
setTema(initialTheme);

// Lógica para animação de fade-in das seções com Intersection Observer
const sections = document.querySelectorAll('.section-fade-in');
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Remove o observer após a animação para melhor performance
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Lógica para FAQ (abrir/fechar) otimizada
document.querySelectorAll('details').forEach((detail) => {
    detail.addEventListener('toggle', (event) => {
        const icon = event.target.querySelector('summary i');
        if (icon) {
            if (event.target.open) {
                icon.style.transform = 'rotate(180deg)';
            } else {
                icon.style.transform = 'rotate(0deg)';
            }
        }
    });
});

// Lazy loading otimizado para imagens
const lazyImages = document.querySelectorAll('img[loading="lazy"]');

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '50px 0px'
});

lazyImages.forEach(img => {
    imageObserver.observe(img);
});

// Smooth scroll otimizado para navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Performance: Debounce para scroll events
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        // Lógica de scroll se necessário
    }, 100);
});

// Preload de recursos críticos
const preloadCriticalResources = () => {
    const criticalImages = [
        'assets/images/placeholder.svg'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
};

// Executa preload quando a página estiver carregada
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', preloadCriticalResources);
} else {
    preloadCriticalResources();
}

// Service Worker para cache (opcional para GitHub Pages)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Analytics e métricas de performance
window.addEventListener('load', () => {
    // Métricas de performance
    if ('performance' in window) {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log('Tempo de carregamento:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
    }
    
    // Métricas de Core Web Vitals
    if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                console.log(`${entry.name}: ${entry.value}`);
            }
        });
        
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    }
}); 