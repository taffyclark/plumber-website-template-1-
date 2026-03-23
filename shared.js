/* shared.js — navigation, mobile menu, fade-up, FAQ */

/* ── CONFIG: update these for each client ── */
const SITE = {
  name:    "Plumbwise",
  tagline: "Plumbing · Heating · Multi-Trade",
  phone:   "07304 303493",
  email:   "info@plumbwise-carlisle.co.uk",
  town:    "Carlisle",
  fb:      "https://facebook.com/plumbwisecarlisle",
  google:  "https://maps.google.com/maps?q=Plumbwise+Carlisle+CA1+2LH",
  checka:  "https://www.checkatrade.com/trades/plumbwise15001977",
  gasNo:   "[GAS SAFE NUMBER]",
  year:    new Date().getFullYear()
};

/* ── Inject topbar ── */
function injectTopbar() {
  const el = document.getElementById('topbar');
  if (!el) return;
  el.innerHTML = `
    <div class="container">
      <div class="topbar__inner">
        <div class="topbar__left">
          📍 Serving <strong style="color:rgba(255,255,255,.85);margin:0 3px">${SITE.town}</strong> &amp; surrounding areas
        </div>
        <div class="topbar__right">
          <span class="topbar__badge">🛡️ Gas Safe Registered</span>
          <span class="topbar__badge">✅ Checkatrade Listed</span>
          <a href="tel:${SITE.phone}">📞 ${SITE.phone}</a>
        </div>
      </div>
    </div>`;
}

/* ── Inject navbar ── */
function injectNavbar(activePage) {
  const el = document.getElementById('navbar');
  if (!el) return;
  const pages = [
    { href: 'index.html',    label: 'Home'     },
    { href: 'about.html',    label: 'About'    },
    { href: 'services.html', label: 'Services' },
    { href: 'gallery.html',  label: 'Gallery'  },
    { href: 'contact.html',  label: 'Contact'  },
  ];
  const links = pages.map(p =>
    `<a href="${p.href}" class="${p.label.toLowerCase() === activePage ? 'active' : ''}">${p.label}</a>`
  ).join('');
  const mobileLinks = pages.map(p =>
    `<a href="${p.href}" onclick="closeMobileNav()">${p.label}</a>`
  ).join('');

  el.innerHTML = `
    <div class="container">
      <div class="navbar__inner">
        <a href="index.html" class="navbar__logo">
          ${SITE.name}
          <small>${SITE.tagline}</small>
        </a>
        <nav class="navbar__nav">${links}</nav>
        <div class="navbar__actions">
          <a href="tel:${SITE.phone}" class="navbar__phone">${SITE.phone}</a>
          <a href="contact.html" class="btn btn--primary">Free Quote</a>
        </div>
        <button class="hamburger" onclick="openMobileNav()" aria-label="Open menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
    <!-- Mobile overlay -->
    <div class="mobile-nav" id="mobileNav">
      <button class="mobile-nav__close" onclick="closeMobileNav()">✕</button>
      ${mobileLinks}
      <a href="tel:${SITE.phone}" class="btn btn--red mobile-nav__phone" style="margin-top:12px;font-size:1.1rem">📞 ${SITE.phone}</a>
    </div>`;
}

/* ── Inject footer ── */
function injectFooter() {
  const el = document.getElementById('footer');
  if (!el) return;
  el.innerHTML = `
    <div class="container">
      <div class="footer__grid">
        <div>
          <div class="footer__logo">${SITE.name}</div>
          <p class="footer__desc">Reliable, multi-trade plumbing and heating business based in Carlisle, serving the city and surrounding Cumbrian areas. Quality workmanship, transparent pricing, and genuine care for every customer.</p>
          <div class="footer__social">
            <a href="${SITE.fb}"     class="social-btn" aria-label="Facebook">f</a>
            <a href="${SITE.google}" class="social-btn" aria-label="Google">G</a>
            <a href="${SITE.checka}" class="social-btn" aria-label="Checkatrade">C</a>
          </div>
        </div>
        <div>
          <div class="footer__col-title">Quick Links</div>
          <div class="footer__links">
            <a href="index.html">Home</a>
            <a href="about.html">About Us</a>
            <a href="services.html">Services</a>
            <a href="gallery.html">Gallery</a>
            <a href="contact.html">Contact</a>
          </div>
        </div>
        <div>
          <div class="footer__col-title">Services</div>
          <div class="footer__links">
            <a href="services.html">Boiler Installation</a>
            <a href="services.html">Boiler Repairs</a>
            <a href="services.html">Bathroom Fitting</a>
            <a href="services.html">Blocked Drains</a>
            <a href="services.html">Water Leak Detection</a>
            <a href="services.html">Emergency Callouts</a>
          </div>
        </div>
        <div>
          <div class="footer__col-title">Contact Us</div>
          <div class="footer__contact-row">📞 <div><strong><a href="tel:${SITE.phone}">${SITE.phone}</a></strong></div></div>
          <div class="footer__contact-row">📍 <div><span>29 Alexander Street, Carlisle, CA1 2LH</span></div></div>
          <div class="footer__contact-row">🕐 <div><span>Mon–Fri 7am–6pm<br>Sat 8am–4pm</span></div></div>
          <div style="margin-top:14px">
            <a href="tel:${SITE.phone}" class="btn btn--red" style="font-size:.8rem;padding:10px 18px">🚨 24/7 Emergency</a>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <p>© ${SITE.year} ${SITE.name}. All rights reserved. Gas Safe Reg No: ${SITE.gasNo}</p>
        <div class="footer__legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </div>`;
}

/* ── Mobile nav helpers ── */
function openMobileNav()  { document.getElementById('mobileNav').classList.add('open'); }
function closeMobileNav() { document.getElementById('mobileNav').classList.remove('open'); }

/* ── FAQ accordion ── */
function initFaq() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const open = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!open) item.classList.add('open');
    });
  });
}

/* ── Scroll fade-up ── */
function initFadeUp() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 70);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
}

/* ── Init on load ── */
document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page || 'home';
  injectTopbar();
  injectNavbar(page);
  injectFooter();
  initFaq();
  initFadeUp();
});
