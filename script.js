/* ── TERMINAL TYPEWRITER ─────────────────────────────────────────── */
const lines = [
  { delay: 0,    html: '<div class="t-line"><span class="t-prompt">velasco@arch</span> <span class="t-cmd">cat</span> <span class="t-out">profile.json</span></div>' },
  { delay: 500,  html: '<div class="t-line"><span class="t-out">{</span></div>' },
  { delay: 700,  html: '<div class="t-line">&nbsp;&nbsp;<span class="t-key">"name"</span><span class="t-out">:</span> <span class="t-val">"Velasco Dendy"</span><span class="t-out">,</span></div>' },
  { delay: 900,  html: '<div class="t-line">&nbsp;&nbsp;<span class="t-key">"role"</span><span class="t-out">:</span> <span class="t-val">"EE Student @ UB"</span><span class="t-out">,</span></div>' },
  { delay: 1100, html: '<div class="t-line">&nbsp;&nbsp;<span class="t-key">"focus"</span><span class="t-out">:</span> <span class="t-blue">[</span></div>' },
  { delay: 1250, html: '<div class="t-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="t-val">"Computer Vision"</span><span class="t-out">,</span></div>' },
  { delay: 1400, html: '<div class="t-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="t-val">"Edge AI"</span><span class="t-out">,</span></div>' },
  { delay: 1550, html: '<div class="t-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="t-val">"AIoT"</span><span class="t-out">,</span></div>' },
  { delay: 1700, html: '<div class="t-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="t-val">"Embedded Systems"</span></div>' },
  { delay: 1850, html: '<div class="t-line">&nbsp;&nbsp;<span class="t-blue">]</span><span class="t-out">,</span></div>' },
  { delay: 2000, html: '<div class="t-line">&nbsp;&nbsp;<span class="t-key">"os"</span><span class="t-out">:</span> <span class="t-val">"Arch Linux btw"</span></div>' },
  { delay: 2200, html: '<div class="t-line"><span class="t-out">}</span></div>' },
  { delay: 2500, html: '<div class="t-line" style="margin-top:.4rem"><span class="t-prompt">velasco@arch</span> <span class="t-comment"># ready to build</span> <span class="t-cursor"></span></div>' }
];

const body = document.getElementById('terminalBody');

lines.forEach(({ delay, html }) => {
  setTimeout(() => {
    body.insertAdjacentHTML('beforeend', html);
  }, delay + 400);
});

/* ── SCROLL ANIMATIONS ───────────────────────────────────────────── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

/* ── NAV ACTIVE STATE ────────────────────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) a.classList.add('active');
  });
});

/* ── MOBILE MENU ─────────────────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMobile() {
  mobileMenu.classList.remove('open');
}

/* ── COPY EMAIL ──────────────────────────────────────────────────── */
function copyEmail() {
  const email = 'velascodendy2@gmail.com';
  navigator.clipboard.writeText(email).then(() => {
    const btn = document.getElementById('copyEmailBtn');
    btn.textContent = 'Copied!';
    btn.style.color = '#7EE787';
    setTimeout(() => {
      btn.textContent = 'Copy';
      btn.style.color = '';
    }, 2000);
  });
}
