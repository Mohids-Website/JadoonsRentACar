/* ============================================
   JADOONS RENT A CAR - MAIN JS
============================================ */

// ---- LOADER ----
window.addEventListener('load', function () {
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('hide');
      setTimeout(() => { loader.remove(); }, 700);
    }, 900);
  }
});

// ---- NAVBAR SCROLL ----
const navbar = document.querySelector('.navbar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', function () {
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  if (backToTop) {
    if (window.scrollY > 400) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  }
});

if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ---- MOBILE MENU ----
const hamburger = document.querySelector('.nav-hamburger');
const mobileNav = document.querySelector('.nav-mobile');
const mobileLinks = document.querySelectorAll('.nav-mobile a');

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  });
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ---- ACTIVE NAV LINK ----
(function setActiveNavLink() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.nav-links a, .nav-mobile a');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

// ---- FADE-IN ON SCROLL ----
(function initFadeUp() {
  const els = document.querySelectorAll('.fade-up');
  if (!els.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => observer.observe(el));
})();

// ---- COUNTER ANIMATION ----
function animateCounter(el, target, duration) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      el.textContent = target + (el.dataset.suffix || '');
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(start) + (el.dataset.suffix || '');
    }
  }, 16);
}

(function initCounters() {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  if (!counters.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        animateCounter(el, parseInt(el.dataset.target), 1500);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(el => observer.observe(el));
})();

// ---- TOAST NOTIFICATION ----
function showToast(icon, message, duration = 3500) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    toast.innerHTML = `<span class="toast-icon"></span><span class="toast-text"></span>`;
    document.body.appendChild(toast);
  }
  toast.querySelector('.toast-icon').textContent = icon;
  toast.querySelector('.toast-text').textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

// ---- CAR DATA ----
window.CARS_DATA = [
  {
    id: 'civic-x',
    name: 'Honda Civic X',
    category: 'sedan',
    price: 8000,
    badge: 'Popular',
    specs: { seats: 5, fuel: 'Petrol', transmission: 'Auto' },
    color: '#1a1a2e',
    accentColor: '#C9A84C'
  },
  {
    id: 'yaris',
    name: 'Toyota Yaris',
    category: 'sedan',
    price: 6500,
    badge: 'Economy',
    specs: { seats: 5, fuel: 'Petrol', transmission: 'Auto' },
    color: '#1a1a2e',
    accentColor: '#7eb8f7'
  },
  {
    id: 'corolla-gli',
    name: 'Toyota Corolla GLi',
    category: 'sedan',
    price: 7000,
    badge: 'Classic',
    specs: { seats: 5, fuel: 'Petrol', transmission: 'Manual' },
    color: '#1a2e1a',
    accentColor: '#7ef7a0'
  },
  {
    id: 'hilux-revo',
    name: 'Toyota Hilux Revo',
    category: 'suv',
    price: 14000,
    badge: 'Premium',
    specs: { seats: 5, fuel: 'Diesel', transmission: 'Auto' },
    color: '#2e1a1a',
    accentColor: '#f7a07e'
  },
  {
    id: 'alto',
    name: 'Suzuki Alto',
    category: 'economy',
    price: 3500,
    badge: 'Budget',
    specs: { seats: 4, fuel: 'Petrol', transmission: 'Manual' },
    color: '#1a1a2e',
    accentColor: '#b07ef7'
  },
  {
    id: 'mehran',
    name: 'Suzuki Mehran',
    category: 'economy',
    price: 3000,
    badge: 'Value',
    specs: { seats: 4, fuel: 'Petrol', transmission: 'Manual' },
    color: '#2e2e1a',
    accentColor: '#f7e07e'
  }
];

// ---- CAR SVG ICONS ----
function getCarSVG(carId, accentColor) {
  const svgs = {
    'civic-x': `<svg viewBox="0 0 280 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="140" cy="120" rx="120" ry="8" fill="rgba(0,0,0,0.3)"/>
      <path d="M30 90 L50 65 L90 50 L140 45 L190 50 L230 65 L250 90 L250 95 L30 95 Z" fill="#C0C0C0"/>
      <path d="M60 65 L80 50 L140 46 L200 50 L220 65 Z" fill="${accentColor}" opacity="0.8"/>
      <path d="M60 65 L80 50 L140 46 L200 50 L220 65 L200 70 L140 72 L80 70 Z" fill="rgba(180,220,255,0.5)"/>
      <rect x="30" y="90" width="220" height="12" rx="4" fill="#A0A0A0"/>
      <circle cx="75" cy="103" r="16" fill="#333"/>
      <circle cx="75" cy="103" r="10" fill="#555"/>
      <circle cx="75" cy="103" r="4" fill="${accentColor}"/>
      <circle cx="205" cy="103" r="16" fill="#333"/>
      <circle cx="205" cy="103" r="10" fill="#555"/>
      <circle cx="205" cy="103" r="4" fill="${accentColor}"/>
      <rect x="30" y="87" width="30" height="8" rx="3" fill="${accentColor}" opacity="0.9"/>
      <rect x="220" y="87" width="30" height="8" rx="3" fill="#FF4444" opacity="0.9"/>
      <path d="M100 68 L140 65 L180 68 L180 80 L100 80 Z" fill="rgba(180,220,255,0.25)" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/>
    </svg>`,

    'yaris': `<svg viewBox="0 0 280 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="140" cy="120" rx="115" ry="7" fill="rgba(0,0,0,0.3)"/>
      <path d="M35 88 L55 62 L95 48 L140 44 L185 48 L225 62 L245 88 L245 93 L35 93 Z" fill="#B8B8C8"/>
      <path d="M65 63 L90 49 L140 45 L190 49 L215 63 Z" fill="${accentColor}" opacity="0.8"/>
      <path d="M65 63 L90 49 L140 45 L190 49 L215 63 L195 69 L140 71 L85 69 Z" fill="rgba(180,220,255,0.45)"/>
      <rect x="35" y="88" width="210" height="10" rx="4" fill="#9898A8"/>
      <circle cx="78" cy="100" r="15" fill="#333"/>
      <circle cx="78" cy="100" r="9" fill="#555"/>
      <circle cx="78" cy="100" r="3.5" fill="${accentColor}"/>
      <circle cx="202" cy="100" r="15" fill="#333"/>
      <circle cx="202" cy="100" r="9" fill="#555"/>
      <circle cx="202" cy="100" r="3.5" fill="${accentColor}"/>
      <rect x="35" y="85" width="28" height="7" rx="3" fill="${accentColor}" opacity="0.9"/>
      <rect x="217" y="85" width="28" height="7" rx="3" fill="#FF4444" opacity="0.9"/>
    </svg>`,

    'corolla-gli': `<svg viewBox="0 0 280 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="140" cy="120" rx="118" ry="7" fill="rgba(0,0,0,0.3)"/>
      <path d="M28 90 L48 64 L88 50 L140 46 L192 50 L232 64 L252 90 L252 95 L28 95 Z" fill="#C8C8C8"/>
      <path d="M58 65 L85 50 L140 46 L195 50 L222 65 Z" fill="${accentColor}" opacity="0.75"/>
      <path d="M58 65 L85 50 L140 46 L195 50 L222 65 L205 71 L140 73 L75 71 Z" fill="rgba(180,220,255,0.4)"/>
      <rect x="28" y="90" width="224" height="11" rx="4" fill="#A8A8A8"/>
      <circle cx="72" cy="103" r="16" fill="#2a2a2a"/>
      <circle cx="72" cy="103" r="10" fill="#444"/>
      <circle cx="72" cy="103" r="4" fill="${accentColor}"/>
      <circle cx="208" cy="103" r="16" fill="#2a2a2a"/>
      <circle cx="208" cy="103" r="10" fill="#444"/>
      <circle cx="208" cy="103" r="4" fill="${accentColor}"/>
      <rect x="28" y="87" width="32" height="7" rx="3" fill="${accentColor}" opacity="0.9"/>
      <rect x="220" y="87" width="32" height="7" rx="3" fill="#FF4444" opacity="0.9"/>
      <text x="140" y="36" font-size="9" fill="${accentColor}" text-anchor="middle" font-family="serif" opacity="0.6">2013-2014</text>
    </svg>`,

    'hilux-revo': `<svg viewBox="0 0 280 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="140" cy="132" rx="125" ry="9" fill="rgba(0,0,0,0.35)"/>
      <rect x="25" y="55" width="230" height="70" rx="6" fill="#888"/>
      <rect x="25" y="55" width="130" height="50" rx="6" fill="#999"/>
      <path d="M25 65 L155 65 L155 55 L90 48 L25 55 Z" fill="${accentColor}" opacity="0.7"/>
      <path d="M35 62 L155 62 L155 55 L90 49 L35 57 Z" fill="rgba(180,220,255,0.4)"/>
      <rect x="155" y="68" width="100" height="40" rx="3" fill="#888"/>
      <rect x="25" y="108" width="230" height="18" rx="5" fill="#777"/>
      <circle cx="72" cy="120" r="18" fill="#2a2a2a"/>
      <circle cx="72" cy="120" r="11" fill="#444"/>
      <circle cx="72" cy="120" r="4.5" fill="${accentColor}"/>
      <circle cx="208" cy="120" r="18" fill="#2a2a2a"/>
      <circle cx="208" cy="120" r="11" fill="#444"/>
      <circle cx="208" cy="120" r="4.5" fill="${accentColor}"/>
      <rect x="25" y="104" width="36" height="8" rx="3" fill="${accentColor}" opacity="0.9"/>
      <rect x="219" y="104" width="36" height="8" rx="3" fill="#FF4444" opacity="0.9"/>
      <rect x="158" y="80" width="95" height="28" rx="3" fill="rgba(180,220,255,0.15)" stroke="rgba(255,255,255,0.1)"/>
    </svg>`,

    'alto': `<svg viewBox="0 0 240 130" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="120" cy="114" rx="100" ry="7" fill="rgba(0,0,0,0.3)"/>
      <path d="M20 85 L35 60 L65 45 L120 40 L175 45 L205 60 L220 85 L220 90 L20 90 Z" fill="#B8B0C8"/>
      <path d="M45 61 L70 46 L120 41 L170 46 L195 61 Z" fill="${accentColor}" opacity="0.75"/>
      <path d="M45 61 L70 46 L120 41 L170 46 L195 61 L175 67 L120 69 L65 67 Z" fill="rgba(180,220,255,0.4)"/>
      <rect x="20" y="85" width="200" height="10" rx="4" fill="#9890A8"/>
      <circle cx="60" cy="97" r="14" fill="#2a2a2a"/>
      <circle cx="60" cy="97" r="8" fill="#444"/>
      <circle cx="60" cy="97" r="3" fill="${accentColor}"/>
      <circle cx="180" cy="97" r="14" fill="#2a2a2a"/>
      <circle cx="180" cy="97" r="8" fill="#444"/>
      <circle cx="180" cy="97" r="3" fill="${accentColor}"/>
      <rect x="20" y="82" width="25" height="7" rx="3" fill="${accentColor}" opacity="0.9"/>
      <rect x="195" y="82" width="25" height="7" rx="3" fill="#FF4444" opacity="0.9"/>
    </svg>`,

    'mehran': `<svg viewBox="0 0 230 125" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="115" cy="110" rx="95" ry="7" fill="rgba(0,0,0,0.3)"/>
      <path d="M18 82 L32 58 L58 44 L115 40 L172 44 L198 58 L212 82 L212 87 L18 87 Z" fill="#C0B850"/>
      <path d="M42 59 L65 45 L115 41 L165 45 L188 59 Z" fill="${accentColor}" opacity="0.7"/>
      <path d="M42 59 L65 45 L115 41 L165 45 L188 59 L170 64 L115 66 L60 64 Z" fill="rgba(180,220,255,0.35)"/>
      <rect x="18" y="82" width="194" height="10" rx="4" fill="#A8A038"/>
      <circle cx="57" cy="95" r="13" fill="#2a2a2a"/>
      <circle cx="57" cy="95" r="8" fill="#444"/>
      <circle cx="57" cy="95" r="3" fill="${accentColor}"/>
      <circle cx="173" cy="95" r="13" fill="#2a2a2a"/>
      <circle cx="173" cy="95" r="8" fill="#444"/>
      <circle cx="173" cy="95" r="3" fill="${accentColor}"/>
      <rect x="18" y="79" width="24" height="7" rx="3" fill="${accentColor}" opacity="0.9"/>
      <rect x="188" y="79" width="24" height="7" rx="3" fill="#FF4444" opacity="0.9"/>
    </svg>`
  };
  return svgs[carId] || svgs['civic-x'];
}

// ---- RENDER CAR CARD ----
function renderCarCard(car, linkToBooking = true) {
  const bookUrl = `booking.html?car=${car.id}`;
  return `
    <div class="car-card fade-up" data-category="${car.category}">
      <div class="car-card-image" style="background: linear-gradient(135deg, ${car.color}88, ${car.color}44);">
        ${getCarSVG(car.id, car.accentColor)}
        <div class="car-card-badge">${car.badge}</div>
      </div>
      <div class="car-card-body">
        <div class="car-card-name">${car.name}</div>
        <div class="car-card-specs">
          <div class="car-spec"><span class="car-spec-icon">👤</span> ${car.specs.seats} Seats</div>
          <div class="car-spec"><span class="car-spec-icon">⛽</span> ${car.specs.fuel}</div>
          <div class="car-spec"><span class="car-spec-icon">⚙️</span> ${car.specs.transmission}</div>
        </div>
        <div class="car-card-footer">
          <div class="car-price">
            <span class="car-price-amount">Rs ${car.price.toLocaleString()}</span>
            <span class="car-price-label">per day</span>
          </div>
          <a href="${bookUrl}" class="btn btn-primary btn-sm">Book Now</a>
        </div>
      </div>
    </div>
  `;
}

// ---- EXPOSE GLOBALLY ----
window.getCarSVG = getCarSVG;
window.renderCarCard = renderCarCard;