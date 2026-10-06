/* Ditur Exclusive - Longines prototype. Fælles data, header, kurv. */

const PRODUCTS = [
  { id: 'master-blue-leather', name: 'Master Collection', ref: 'L2.950.4.93.2', col: 'Master Collection', price: 2800, img: 'img/mc-l2950932.jpg', hover: 'img/p17.jpg', mm: 40, gender: 'Men', strap: 'Leather', tag: 'Exclusive', pop: 1,
    gallery: ['img/mc-l2950932.jpg', 'img/p17.jpg'] },
  { id: 'conquest-41-blue', name: 'Conquest', ref: 'L3.830.4.92.6', col: 'Conquest', price: 3580, img: 'img/g9.jpg', mm: 41, gender: 'Men', strap: 'Steel', pop: 2 },
  { id: 'la-grande-classique', name: 'La Grande Classique', ref: 'L4.512.2.87.8', col: 'La Grande Classique', gold: true, price: 3245, img: 'img/g2.jpg', hover: 'img/g11.jpg', mm: 29, gender: 'Ladies', strap: 'Steel', pop: 3 },
  { id: 'legend-diver-l3764507', name: 'Legend Diver', ref: 'L3.764.4.50.7', col: 'Legend Diver', price: 3070, img: 'img/ld-l3764507.jpg', hover: 'img/col-legend-diver.jpg', mm: 39, gender: 'Men', strap: 'Steel', tag: 'New', pop: 4 },
  { id: 'mini-dolcevita', name: 'Mini DolceVita', ref: 'L5.200.4.71.6', col: 'DolceVita', price: 3250, img: 'img/g12.jpg', mm: 21, gender: 'Ladies', strap: 'Steel', tag: 'New', pop: 5 },
  { id: 'conquest-classic-blue', name: 'Conquest Classic', ref: 'L2.386.4.92.6', col: 'Conquest', price: 1635, img: 'img/g1.jpg', mm: 34, gender: 'Ladies', strap: 'Steel', pop: 6 },
  { id: 'hydroconquest-ice-ee', name: 'HydroConquest Exclusive Edition', ref: 'L3.788.4.98.6', col: 'HydroConquest', price: 2450, img: 'img/hc-l3788498.jpg', hover: 'img/col-hydroconquest.jpg', mm: 42, gender: 'Men', strap: 'Steel', tag: 'New', pop: 7 },
  { id: 'hydroconquest-l3788499', name: 'HydroConquest', ref: 'L3.788.4.99.6', col: 'HydroConquest', price: 2390, img: 'img/hc-l3788499.jpg', mm: 42, gender: 'Men', strap: 'Steel', tag: 'New', pop: 15 },
  { id: 'hydroconquest-l3788406', name: 'HydroConquest', ref: 'L3.788.4.06.6', col: 'HydroConquest', price: 2390, img: 'img/hc-l3788406.jpg', mm: 42, gender: 'Men', strap: 'Steel', pop: 16 },
  { id: 'legend-diver-l3764066', name: 'Legend Diver', ref: 'L3.764.4.06.6', col: 'Legend Diver', price: 3070, img: 'img/ld-l3764066.jpg', hover: 'img/col-legend-diver.jpg', mm: 39, gender: 'Men', strap: 'Steel', pop: 6.5 },
  { id: 'legend-diver-l3764416', name: 'Legend Diver', ref: 'L3.764.4.16.6', col: 'Legend Diver', price: 3070, img: 'img/ld-l3764416.jpg', mm: 39, gender: 'Men', strap: 'Steel', tag: 'New', pop: 9.5 },
  { id: 'legend-diver-l3764069', name: 'Legend Diver', ref: 'L3.764.4.06.9', col: 'Legend Diver', price: 2890, img: 'img/ld-l3764069.jpg', mm: 39, gender: 'Men', strap: 'Rubber', pop: 12.5 },
  { id: 'hydroconquest-l3781569', name: 'HydroConquest', ref: 'L3.781.4.56.9', col: 'HydroConquest', price: 1990, img: 'img/hc-l3781569.jpg', mm: 41, gender: 'Men', strap: 'Rubber', pop: 17 },
  { id: 'hydroconquest-blue', name: 'HydroConquest', ref: 'L3.781.4.96.6', col: 'HydroConquest', price: 2290, img: 'img/hc-l3781966.jpg', hover: 'img/banner1.jpg', mm: 41, gender: 'Men', strap: 'Steel', tag: 'New', pop: 8 },
  { id: 'conquest-34-brown', name: 'Conquest', ref: 'L3.430.4.62.6', col: 'Conquest', price: 3580, img: 'img/g3.jpg', mm: 34, gender: 'Ladies', strap: 'Steel', pop: 9 },
  { id: 'dolcevita-green', name: 'DolceVita', ref: 'L5.255.4.71.A', col: 'DolceVita', price: 2425, img: 'img/g17.jpg', hover: 'img/g20.jpg', mm: 21, gender: 'Ladies', strap: 'Leather', pop: 10 },
  { id: 'master-l2950936', name: 'Master Collection', ref: 'L2.950.4.93.6', col: 'Master Collection', price: 2900, img: 'img/mc-l2950936.jpg', mm: 40, gender: 'Men', strap: 'Steel', tag: 'New', pop: 11.5 },
  { id: 'master-arabic', name: 'Master Collection Arabic Dial', ref: 'L2.950.4.79.6', col: 'Master Collection', price: 2800, img: 'img/mc-l2950796.jpg', mm: 40, gender: 'Men', strap: 'Steel', pop: 11 },
  { id: 'flagship-heritage', name: 'Flagship Heritage', ref: 'L4.795.4.58.0', col: 'Flagship Heritage', price: 3110, img: 'img/g16.jpg', mm: 38, gender: 'Men', strap: 'Leather', pop: 12 },
  { id: 'dolcevita-steel', name: 'DolceVita', ref: 'L5.255.4.71.6', col: 'DolceVita', price: 2425, img: 'img/g4.jpg', hover: 'img/g15.jpg', mm: 21, gender: 'Ladies', strap: 'Steel', pop: 13 }
];

const kr = n => n.toLocaleString('en-GB', { maximumFractionDigits: 0 });
const kr2 = n => n.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const byId = id => PRODUCTS.find(p => p.id === id);
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
};

const ICONS = {
  heart: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 20.5 4.3 12.6a4.9 4.9 0 0 1 .2-7.1 4.7 4.7 0 0 1 6.4.4L12 7l1.1-1.1a4.7 4.7 0 0 1 6.4-.4 4.9 4.9 0 0 1 .2 7.1z"/></svg>',
  user: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="7.5" r="4.2"/><path d="M4 20.2v-.9A4.3 4.3 0 0 1 8.3 15h7.4a4.3 4.3 0 0 1 4.3 4.3v.9a.8.8 0 0 1-.8.8H4.8a.8.8 0 0 1-.8-.8z"/></svg>',
  bag: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M4.5 8.5h15v10.8a2.2 2.2 0 0 1-2.2 2.2H6.7a2.2 2.2 0 0 1-2.2-2.2z"/><path d="M8.5 8.5V7a3.5 3.5 0 0 1 7 0v1.5"/></svg>',
  search: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.4"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5" stroke-linecap="round"/></svg>',
  truck: '<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M2 6h12v9h1.5V9H19l3 4v4h-2a2.5 2.5 0 0 1-5 0H9.5a2.5 2.5 0 0 1-5 0H2zm5 10.2a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6zm10.5 0a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6z"/></svg>',
  refresh: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 11a8 8 0 0 0-14.3-4.3L4 9M4 4v5h5M4 13a8 8 0 0 0 14.3 4.3L20 15m0 5v-5h-5"/></svg>',
  tag: '<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M3 3h8.2l9.8 9.8-8.2 8.2L3 11.2zm4.5 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/></svg>',
  star: '<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="m12 2.5 2.9 6.3 6.9.7-5.2 4.6 1.5 6.8L12 17.4l-6.1 3.5 1.5-6.8L2.2 9.5l6.9-.7z"/></svg>',
  chev: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>',
  close: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6 6 18"/></svg>'
};

function renderChrome() {
  const top = document.getElementById('topbar');
  const ti = d => `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const classic = document.body.classList.contains('home');
  if (top && classic) { top.classList.add('topbar-classic'); top.innerHTML = '<div class="topbar-inner"><span>Fast <b>delivery</b></span><span>99 days <b>return policy</b></span><span>Scandinavia’s largest watch retailer</span><span class="tp">4.6 on <b>Trustpilot</b></span></div>'; }
  else if (top) top.innerHTML = `<div class="topbar-inner">
    <span>${ti('<path d="M2.5 6.5h11v9h-11zM13.5 9.5h4l3 3v3h-7"/><circle cx="6.5" cy="17" r="1.6"/><circle cx="17" cy="17" r="1.6"/>')}Fast <b>delivery</b></span>
    <span>${ti('<path d="M4 12a8 8 0 1 0 2.4-5.7"/><path d="M4 4.5v3.5h3.5"/>')}99 days <b>return policy</b></span>
    <span>${ti('<path d="M12 3.5 14.6 8.8l5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z"/>')}Scandinavia’s <b>largest</b> watch retailer</span>
    <span class="tp">${ti('<path d="M7.5 9.5v10M4 9.5h3.5v10H4zM7.5 10.5l3.6-6.4a1.6 1.6 0 0 1 3 .9l-.6 3.6h5.2a1.8 1.8 0 0 1 1.8 2.1l-1.2 6.7a1.8 1.8 0 0 1-1.8 1.5H7.5"/>')}4.6 on <b>Trustpilot</b></span></div>`;
  const h = document.getElementById('header');
  if (h) h.innerHTML = `<div class="header-inner">
    <button class="menu-btn" type="button"><span class="burger"></span>MENU</button>
    <a href="index.html" class="logo" aria-label="Ditur home"><img src="img/live/logo_white.png" alt="Ditur"></a>
    <label class="search"><input type="search" placeholder="More than 12,000 products..."><span>${ICONS.search}</span></label>
    <nav class="header-icons">
      <a href="#" aria-label="Wishlist" class="wish-link">${ICONS.heart}<b class="badge" id="wish-count"></b></a>
      <a href="#" aria-label="Account">${ICONS.user}</a>
      <a href="#" aria-label="Basket" class="cart-link">${ICONS.bag}<b class="badge" id="cart-count"></b></a>
    </nav></div>`;
  document.body.insertAdjacentHTML('beforeend', `
    <div class="drawer-bg" id="drawer-bg"></div>
    <aside class="drawer" id="cart-drawer" aria-label="Basket">
      <header><h3>Your basket</h3><button type="button" class="drawer-close" aria-label="Close">${ICONS.close}</button></header>
      <div class="drawer-body" id="cart-body"></div>
      <footer id="cart-foot"></footer>
    </aside>
    <div class="toast" id="toast"></div>`);
  document.querySelector('.cart-link')?.addEventListener('click', e => { e.preventDefault(); openCart(); });
  document.getElementById('drawer-bg').addEventListener('click', closeCart);
  document.querySelector('.drawer-close').addEventListener('click', closeCart);
  updateBadges();
}

function cart() { return store.get('dx-cart', []); }
function addToCart(item) {
  const c = cart(); c.push(item); store.set('dx-cart', c); updateBadges(); openCart();
}
function removeFromCart(i) { const c = cart(); c.splice(i, 1); store.set('dx-cart', c); updateBadges(); renderCart(); }

function renderCart() {
  const c = cart(), body = document.getElementById('cart-body'), foot = document.getElementById('cart-foot');
  if (!c.length) { body.innerHTML = '<p class="cart-empty">Your basket is empty.</p>'; foot.innerHTML = ''; return; }
  body.innerHTML = c.map((it, i) => {
    const p = byId(it.id);
    return `<div class="cart-item"><img src="${p.img}" alt="">
      <div><p class="ci-brand">LONGINES <span class="ex-tag">Exclusive</span></p><p class="ci-name">${p.name} ${p.ref}</p>
      ${it.extras.map(x => `<p class="ci-extra">+ ${x.label} (€${kr(x.price)})</p>`).join('')}
      <p class="ci-price">€${kr(it.total)}</p></div>
      <button type="button" class="ci-remove" data-i="${i}" aria-label="Remove">${ICONS.close}</button></div>`;
  }).join('');
  const sum = c.reduce((s, it) => s + it.total, 0);
  foot.innerHTML = `<div class="cart-sum"><span>Total incl. VAT</span><b>€${kr(sum)}</b></div>
    <p class="cart-free">Free delivery and 99-day returns</p>
    <button type="button" class="btn-primary" onclick="toast('Prototype - checkout is not part of the demo')">Go to checkout</button>`;
  body.querySelectorAll('.ci-remove').forEach(b => b.addEventListener('click', () => removeFromCart(+b.dataset.i)));
}
function openCart() { renderCart(); document.body.classList.add('drawer-open'); }
function closeCart() { document.body.classList.remove('drawer-open'); }

function wishes() { return store.get('dx-wish', []); }
function toggleWish(id) {
  const w = wishes(), i = w.indexOf(id);
  i >= 0 ? w.splice(i, 1) : w.push(id);
  store.set('dx-wish', w); updateBadges();
  toast(i >= 0 ? 'Removed from wishlist' : 'Saved to wishlist');
  return i < 0;
}
function updateBadges() {
  const c = document.getElementById('cart-count'), w = document.getElementById('wish-count');
  if (c) { c.textContent = cart().length || ''; }
  if (w) { w.textContent = wishes().length || ''; }
}

let toastT;
function toast(msg) {
  const t = document.getElementById('toast'); if (!t) return;
  t.textContent = msg; t.classList.add('show');
  clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 2200);
}

const waterRes = p => p.col === 'HydroConquest' || p.col === 'Legend Diver' ? '30 bar' : p.col === 'Conquest' ? '10 bar' : '3 bar';

/* Produktkort i Longines' egen stil: grå flade, versal-titel, spec-linje; hover viser pil, varianter og "Shop now" */
const isLifestyle = src => /col-|banner|hero|p17/.test(src);
const eur = n => '€' + n.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const lTitle = p => (/^Master/.test(p.name) ? 'The Longines ' : 'Longines ') + p.name;
const lSpec = p => `${p.mm} mm - Automatic watch - ${p.strap === 'Leather' ? 'Stainless steel, leather strap' : p.strap === 'Rubber' ? 'Stainless steel, rubber strap' : 'Stainless steel'}`;

function productCard(p) {
  const wished = wishes().includes(p.id);
  const imgs = [p.img, p.hover].filter(Boolean);
  const sibs = PRODUCTS.filter(x => x.col === p.col && !x.cover).slice(0, 4);
  return `<a class="lcard" href="pdp.html?id=${p.id}">
    <div class="lc-img" data-imgs="${imgs.join('|')}" data-i="0">
      ${p.tag === 'New' ? '<span class="lc-new">New</span>' : ''}
      <img src="${p.img}" alt="Longines ${p.name}" loading="lazy" class="lc-main${isLifestyle(p.img) ? ' cover' : ''}">
      ${imgs.length > 1 ? '<button type="button" class="lc-next" aria-label="Next image"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6"><path d="m9 5 7 7-7 7"/></svg></button>' : ''}
      <button type="button" class="pc-wish${wished ? ' on' : ''}" data-id="${p.id}" aria-label="Save">${ICONS.heart}</button>
      ${sibs.length > 1 ? `<div class="lc-thumbs">${sibs.map(s => `<button type="button" class="${s.id === p.id ? 'on' : ''}" data-src="${s.img}" data-href="pdp.html?id=${s.id}" aria-label="${s.name} ${s.ref}"><img src="${s.img}" alt="" loading="lazy"></button>`).join('')}</div>` : ''}
    </div>
    <p class="lc-title">${lTitle(p)}</p>
    <p class="lc-spec">${lSpec(p)}</p>
    <div class="lc-foot"><p class="lc-price">${eur(p.price)}</p><span class="lc-shop">Shop now</span></div>
  </a>`;
}

document.addEventListener('mouseover', e => {
  const t = e.target.closest('.lc-thumbs button'); if (!t) return;
  const card = t.closest('.lcard'), main = card.querySelector('.lc-main');
  main.src = t.dataset.src; main.classList.toggle('cover', isLifestyle(t.dataset.src));
  card.querySelectorAll('.lc-thumbs button').forEach(b => b.classList.toggle('on', b === t));
});
document.addEventListener('click', e => {
  const next = e.target.closest('.lc-next'), thumb = e.target.closest('.lc-thumbs button');
  if (next) {
    e.preventDefault(); e.stopPropagation();
    const box = next.closest('.lc-img'), imgs = box.dataset.imgs.split('|'), i = (+box.dataset.i + 1) % imgs.length, main = box.querySelector('.lc-main');
    box.dataset.i = i; main.src = imgs[i]; main.classList.toggle('cover', isLifestyle(imgs[i]));
  } else if (thumb) { e.preventDefault(); location.href = thumb.dataset.href; }
}, true);

/* Personlig fremvisning - booking-dialog (prototype) */
function openBooking(product) {
  let m = document.getElementById('booking');
  if (!m) {
    document.body.insertAdjacentHTML('beforeend', `<div class="modal" id="booking" role="dialog" aria-modal="true" aria-labelledby="bk-title">
      <div class="modal-card">
        <button type="button" class="modal-close" aria-label="Close">${ICONS.close}</button>
        <p class="eyebrow">Private viewing</p>
        <h3 id="bk-title">See it on your wrist</h3>
        <p class="bk-product" id="bk-product"></p>
        <h4>1. Choose a day</h4><div class="bk-chips" id="bk-days"></div>
        <h4>2. Choose a time</h4><div class="bk-chips" id="bk-times"></div>
        <h4>3. Your details</h4>
        <div class="bk-fields"><input type="text" placeholder="Name" aria-label="Name"><input type="text" placeholder="Phone" aria-label="Phone"></div>
        <button type="button" class="btn-ink" id="bk-confirm">Confirm viewing <span>→</span></button>
        <p class="bk-note">Free and without obligation. The watch will be ready when you arrive.</p>
      </div></div>`);
    m = document.getElementById('booking');
    const days = [], d = new Date();
    while (days.length < 5) { d.setDate(d.getDate() + 1); if (d.getDay() % 6) days.push(new Date(d)); }
    m.querySelector('#bk-days').innerHTML = days.map((x, i) => `<button type="button" class="${i ? '' : 'on'}"><b>${x.toLocaleDateString('en-GB', { weekday: 'short' })}</b>${x.getDate()}/${x.getMonth() + 1}</button>`).join('');
    m.querySelector('#bk-times').innerHTML = ['10:00', '12:00', '14:00', '16:00'].map((t, i) => `<button type="button" class="${i === 1 ? 'on' : ''}">${t}</button>`).join('');
    m.querySelectorAll('.bk-chips').forEach(g => g.addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; g.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b)); }));
    const close = () => m.classList.remove('open');
    m.addEventListener('click', e => { if (e.target === m) close(); });
    m.querySelector('.modal-close').addEventListener('click', close);
    m.querySelector('#bk-confirm').addEventListener('click', () => {
      const day = m.querySelector('#bk-days .on').textContent, time = m.querySelector('#bk-times .on').textContent;
      close(); toast(`Thank you! Your viewing is booked for ${day.replace(/^(\D+)/, '$1 ')} at ${time}`);
    });
  }
  m.querySelector('#bk-product').textContent = product ? 'Longines ' + product : 'Choose a watch, or let our watch specialist help you.';
  m.classList.add('open');
}
document.addEventListener('click', e => {
  const b = e.target.closest('[data-booking]');
  if (b) { e.preventDefault(); openBooking(b.dataset.booking); }
});
function bindWish(root) {
  root.querySelectorAll('.pc-wish').forEach(b => b.addEventListener('click', e => {
    e.preventDefault(); e.stopPropagation();
    b.classList.toggle('on', toggleWish(b.dataset.id));
  }));
}

function reveal() {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

document.addEventListener('DOMContentLoaded', () => { renderChrome(); reveal(); });

/* Produktkort glider op på plads, når de scrolles ind i billedet (kun kort under folden, forskudt pr. kolonne) */
(function () {
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const SEL = '#grid > .lcard, #grid > .story-tile, .bento-track > *, .pop-rail > .scard';
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target; io.unobserve(el);
    el.classList.add('sr-in'); el.classList.remove('sr-pre');
    setTimeout(() => { el.classList.remove('sr-in'); el.style.removeProperty('--sr-d'); }, 1400);
  }), { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
  const seen = new WeakSet();
  const scan = () => document.querySelectorAll(SEL).forEach(el => {
    if (seen.has(el)) return; seen.add(el);
    const r = el.getBoundingClientRect();
    if (r.top < innerHeight * 0.92) return;
    const sib = [...el.parentElement.children], row = el.parentElement.matches('.bento-track, .pop-rail') ? sib : sib.filter(c => Math.abs(c.offsetTop - el.offsetTop) < 4);
    el.style.setProperty('--sr-d', Math.min(row.indexOf(el), 4) * 90 + 'ms');
    el.classList.add('sr-pre'); io.observe(el);
  });
  document.addEventListener('DOMContentLoaded', () => {
    requestAnimationFrame(scan);
    new MutationObserver(() => requestAnimationFrame(scan)).observe(document.body, { childList: true, subtree: true });
  });
})();

/* Markér at prototypen er åbnet, så forsiden ikke sender videre til Exclusive igen */
try { sessionStorage.setItem('dx-seen', '1'); } catch (e) {}
