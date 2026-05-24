/* ============================================
   JADOONS RENT A CAR - COMPONENTS JS
   Injects shared navbar + footer + WhatsApp btn
============================================ */

(function initComponents() {
  // ---- NAVBAR HTML ----
  const page = window.location.pathname.split('/').pop() || 'index.html';

  function navLink(href, label) {
    const active = (href === page) ? ' class="active"' : '';
    return `<a href="${href}"${active}>${label}</a>`;
  }

  const navbarHTML = `
    <nav class="navbar" id="navbar">
      <a href="index.html" class="nav-logo">
        <div class="nav-logo-icon">🚗</div>
        <div class="nav-logo-text">
          <span>Jadoons</span>
          <span>Rent A Car</span>
        </div>
      </a>
      <div class="nav-links">
        ${navLink('index.html', 'Home')}
        ${navLink('cars.html', 'Our Fleet')}
        ${navLink('booking.html', 'Book Now')}
        ${navLink('contact.html', 'Contact')}
        <a href="booking.html" class="nav-cta">Reserve Now</a>
      </div>
      <div class="nav-hamburger" id="hamburger">
        <span></span><span></span><span></span>
      </div>
    </nav>
    <div class="nav-mobile" id="mobileNav">
      ${navLink('index.html', 'Home')}
      ${navLink('cars.html', 'Our Fleet')}
      ${navLink('booking.html', 'Book Now')}
      ${navLink('contact.html', 'Contact')}
      <a href="booking.html" class="nav-cta btn btn-primary">Reserve Now</a>
    </div>
  `;

  // ---- FOOTER HTML ----
  const footerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="nav-logo">
              <div class="nav-logo-icon">🚗</div>
              <div class="nav-logo-text">
                <span>Jadoons</span>
                <span>Rent A Car</span>
              </div>
            </div>
            <p>Premium car rental services in Abbottabad. We provide comfortable, reliable vehicles for every journey — from city drives to mountain adventures.</p>
            <div class="footer-social">
              <a href="https://wa.me/923001234567" target="_blank" title="WhatsApp">💬</a>
              <a href="#" title="Facebook">📘</a>
              <a href="#" title="Instagram">📸</a>
              <a href="tel:+923001234567" title="Call Us">📞</a>
            </div>
          </div>
          <div>
            <div class="footer-title">Quick Links</div>
            <div class="footer-links">
              <a href="index.html">Home</a>
              <a href="cars.html">Our Fleet</a>
              <a href="booking.html">Book a Car</a>
              <a href="contact.html">Contact Us</a>
            </div>
          </div>
          <div>
            <div class="footer-title">Our Fleet</div>
            <div class="footer-links">
              <a href="cars.html">Honda Civic X</a>
              <a href="cars.html">Toyota Yaris</a>
              <a href="cars.html">Toyota Corolla GLi</a>
              <a href="cars.html">Toyota Hilux Revo</a>
              <a href="cars.html">Suzuki Alto</a>
              <a href="cars.html">Suzuki Mehran</a>
            </div>
          </div>
          <div>
            <div class="footer-title">Contact Us</div>
            <div class="footer-contact-item">
              <span class="footer-contact-icon">📍</span>
              <span class="footer-contact-text">Abbottabad, Khyber Pakhtunkhwa, Pakistan</span>
            </div>
            <div class="footer-contact-item">
              <span class="footer-contact-icon">📞</span>
              <span class="footer-contact-text">+92 300 123 4567<br>+92 311 987 6543</span>
            </div>
            <div class="footer-contact-item">
              <span class="footer-contact-icon">⏰</span>
              <span class="footer-contact-text">24/7 Service Available</span>
            </div>
            <div class="footer-contact-item">
              <span class="footer-contact-icon">✉️</span>
              <span class="footer-contact-text">jadoonsrentacar@gmail.com</span>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© 2025 <span>Jadoons Rent A Car</span>. All Rights Reserved.</p>
          <p>Made with ❤️ in Abbottabad, Pakistan</p>
        </div>
      </div>
    </footer>
  `;

  // ---- WHATSAPP FLOAT ----
  const waHTML = `
    <div class="whatsapp-float">
      <div class="whatsapp-tooltip">Chat on WhatsApp</div>
      <a href="https://wa.me/923001234567?text=Hello! I want to book a car." target="_blank" class="whatsapp-btn" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.121 1.532 5.852L.072 23.928a.5.5 0 00.624.624l6.083-1.46A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.681-.511-5.21-1.404l-.374-.22-3.878.932.943-3.875-.234-.388A9.954 9.954 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
      </a>
    </div>
    <button id="backToTop" aria-label="Back to top">↑</button>
  `;

  // ---- INJECT ----
  const navContainer = document.getElementById('navbar-placeholder');
  if (navContainer) navContainer.outerHTML = navbarHTML;

  const footerContainer = document.getElementById('footer-placeholder');
  if (footerContainer) footerContainer.outerHTML = footerHTML;

  document.body.insertAdjacentHTML('beforeend', waHTML);
})();

function renderCarCard(car) {
  return `
    <div class="card" onclick="openCar('${car.id}')">
      <img src="${car.img}" alt="${car.name}" />
      <div class="card-content">
        <h3>${car.name}</h3>
        <p>Rs ${car.price.toLocaleString()} / day</p>
      </div>
    </div>
  `;
}