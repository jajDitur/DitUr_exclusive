/* Ditur-menu og det almindelige sortiment (fra ditur.dk), adskilt fra Exclusive. Indlæses efter app.js. */

const STORE_PRODUCTS = [
  { brand: 'Tissot', name: 'PRX T1374101104100', price: 395, mm: 40, img: 'img/brands/w4.jpg' },
  { brand: 'Seiko', name: 'Classic SSB455P1', price: 430, mm: 40, img: 'img/brands/w10.jpg' },
  { brand: 'Casio', name: 'G-Shock GA-2100-1A1ER', price: 101, mm: 46, img: 'img/brands/w3.jpg' },
  { brand: 'Tissot', name: 'PR 100 Chronograph T1504171104100', price: 395, mm: 40, img: 'img/brands/w7.jpg' },
  { brand: 'Seiko', name: 'Chronograph SSB385P1', price: 220, mm: 42, img: 'img/brands/w11.jpg' },
  { brand: 'Casio', name: 'Vintage A168WG-9EF', price: 53, mm: 36, img: 'img/brands/w6.jpg' },
  { brand: 'Tissot', name: 'Ballade Powermatic 80 COSC 39MM T1564081104300', price: 1025, mm: 39, img: 'img/brands/w9.jpg' },
  { brand: 'Seiko', name: 'Essential New Link SUR309P1', price: 260, mm: 40, img: 'img/brands/w12.jpg' }
];

const MENU = [
  [['Brands', 'tag'], ['Sale', 'sale'], ['New in', 'globe'], ['EXCLUSIVE', 'exclusive']],
  [['Men', 'man'], ['Ladies', 'woman'], ['Kids', 'kids'], ['Watches', 'watch'], ['Jewellery', 'gem'], ['Storage', 'box'], ['Watch equipment', 'tools'], ['Accessories', 'glasses'], ['Clocks For The Home', 'clock'], ['Gifts', 'gift'], ['Outlet', 'chart', true], ['Demo & Pre-owned', 'recycle', true]],
  [['Giftcard', 'card', true]]
];
const MI = {
  tag: '<path d="M3.5 3.5h7.3l9.7 9.7-7.3 7.3-9.7-9.7z"/><circle cx="7.8" cy="7.8" r="1.3"/>',
  sale: '<circle cx="12" cy="12" r="8.5"/><path d="m9 15 6-6"/><circle cx="9.3" cy="9.3" r=".8"/><circle cx="14.7" cy="14.7" r=".8"/>',
  globe: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.6 2.6 2.6 14.4 0 17M12 3.5c-2.6 2.6-2.6 14.4 0 17"/>',
  exclusive: '<path d="M12 3.5 14.2 9.8 20.5 12l-6.3 2.2L12 20.5l-2.2-6.3L3.5 12l6.3-2.2z"/>',
  man: '<circle cx="12" cy="4.8" r="1.8"/><path d="M9.5 9h5l-.8 6h-1.2l-.5 5.5h-1l-.5-5.5H9.3z"/>',
  woman: '<circle cx="12" cy="4.8" r="1.8"/><path d="M10 9h4l2 6h-3l-.5 5.5h-1L11 15H8z"/>',
  kids: '<circle cx="7.5" cy="6" r="1.6"/><circle cx="16.5" cy="6" r="1.6"/><path d="M5.5 10h4v5H8.5v5h-2v-5h-1zM14.5 10h4v5h-1v5h-2v-5h-1z"/>',
  watch: '<circle cx="12" cy="12" r="5.5"/><path d="M9.5 6.8 10 3.5h4l.5 3.3M9.5 17.2l.5 3.3h4l.5-3.3M12 9.5V12l1.5 1"/>',
  gem: '<path d="M6.5 4.5h11l3 4.5L12 19.5 3.5 9z"/><path d="M3.5 9h17M9.5 4.5 12 9l2.5-4.5M12 9v10.5"/>',
  box: '<rect x="4" y="6" width="16" height="13" rx="1.5"/><path d="M4 10h16M9.5 3.5h5"/>',
  tools: '<path d="m5 19 8-8M14.5 4.5a3.5 3.5 0 0 0 4.9 4.9l-2-2zM5 5l14 14M7 3.5 3.5 7"/>',
  glasses: '<circle cx="7" cy="14" r="3.5"/><circle cx="17" cy="14" r="3.5"/><path d="M10.5 14h3M3.5 13 5 7h2M20.5 13 19 7h-2"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3 2"/>',
  gift: '<rect x="4" y="9" width="16" height="11" rx="1"/><path d="M3.5 9h17v3h-17zM12 9v11M12 9c-1.5-4-5-4-5-1.5S12 9 12 9zm0 0c1.5-4 5-4 5-1.5S12 9 12 9z"/>',
  chart: '<path d="M4 4v16h16"/><path d="m7 9 4 5 3-3 5 5"/>',
  recycle: '<path d="M8 8.5 10.5 4h3l2 3.5M18 12l2.5 4.5-1.5 2.5h-4M9.5 19H5l-1.5-2.5L6 12"/>',
  card: '<rect x="3.5" y="6" width="17" height="12" rx="1.5"/><path d="M3.5 10h17M7 14.5h4"/>',
  help: '<circle cx="12" cy="12" r="8.5"/><path d="M9.8 9.5a2.3 2.3 0 1 1 3.4 2c-.8.5-1.2 1-1.2 1.9M12 16.5v.3"/>',
  headset: '<path d="M4.5 14v-2a7.5 7.5 0 0 1 15 0v2"/><rect x="3.5" y="13" width="4" height="6" rx="1.5"/><rect x="16.5" y="13" width="4" height="6" rx="1.5"/>'
};
const micon = k => `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round">${MI[k]}</svg>`;

function renderMenu() {
  const chev = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6"><path d="m9 6 6 6-6 6"/></svg>';
  const row = ([label, ic, noChev]) => ic === 'exclusive'
    ? `<a href="exclusive.html" class="mn-row mn-exclusive">${micon(ic)}<span>EXCLUSIVE</span><em>New</em>${chev}</a>`
    : `<a href="#" class="mn-row">${micon(ic)}<span>${label}</span>${noChev ? '' : chev}</a>`;
  document.body.insertAdjacentHTML('beforeend', `<div class="menu-bg" id="menu-bg"></div>
    <nav class="menu-drawer" id="menu-drawer" aria-label="Menu">
      <div class="mn-top"><span class="mn-logo"><img src="img/h-raw1.png" alt="Ditur"></span><a href="#" class="mn-sign">Sign in</a><button type="button" class="mn-close" aria-label="Close menu">${ICONS.close}</button></div>
      ${MENU.map(g => `<div class="mn-group">${g.map(row).join('')}</div>`).join('')}
      <div class="mn-plain"><a href="#">${micon('help')}Help Center</a><a href="#">${micon('headset')}Customer support</a></div>
    </nav>`);
  const open = () => document.body.classList.add('menu-open'), close = () => document.body.classList.remove('menu-open');
  document.querySelector('.menu-btn')?.addEventListener('click', open);
  document.getElementById('menu-bg').addEventListener('click', close);
  document.querySelector('.mn-close').addEventListener('click', close);
  addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  if (location.hash === '#menu') open();
  document.querySelectorAll('.mn-row:not(.mn-exclusive), .mn-plain a, .mn-sign').forEach(a => a.addEventListener('click', e => { e.preventDefault(); toast('Prototype - only Exclusive is clickable in the menu'); }));
}

function renderPopular() {
  const el = document.getElementById('popular'); if (!el) return;
  el.innerHTML = `<div class="pop-head"><h2>Recommended for you</h2><div><button type="button" class="pop-nav" data-d="-1" aria-label="Previous">←</button><button type="button" class="pop-nav" data-d="1" aria-label="Next">→</button></div></div>
    <div class="pop-rail">${STORE_PRODUCTS.map(p => `<a href="#" class="scard">
      <div class="scard-img"><span class="sc-rate">${ICONS.star} 5.0</span><img src="${p.img}" alt="${p.brand} ${p.name}" loading="lazy"><span class="pc-mm">${p.mm} mm</span></div>
      <div class="sc-body"><p class="sc-brand">${p.brand.toUpperCase()}<span>${ICONS.heart}</span></p><p class="sc-name">${p.name}</p><p class="price">${kr(p.price)}<small>€</small></p></div></a>`).join('')}</div>`;
  const rail = el.querySelector('.pop-rail');
  el.querySelectorAll('.pop-nav').forEach(b => b.addEventListener('click', () => rail.scrollBy({ left: +b.dataset.d * rail.clientWidth * .8, behavior: 'smooth' })));
  el.querySelectorAll('.scard').forEach(a => a.addEventListener('click', e => { e.preventDefault(); toast('Prototype - regular product pages are not part of the demo'); }));
}

function renderFooter() {
  const f = document.getElementById('footer'); if (!f) return;
  const col = (h, items) => `<div><h4>${h}</h4>${items.map(i => `<a href="#">${i}</a>`).join('')}</div>`;
  const classic = document.body.classList.contains('home');
  f.className = classic ? 'site-footer footer-classic' : 'site-footer';
  f.innerHTML = `<div class="club wrap">
      <img src="img/live/${classic ? 'Kunde_Klub_cards_opstilling_5_Custom_.png' : 'club-cards.png'}" alt="Club Ditur cards">
      <div><h3>Join Club Ditur today</h3>
        <p>Join Club Ditur and get access to exclusive benefits! Earn points on your purchases${classic ? '' : '<br class="fbr">'} to use in our unique Pointshop and get personalised offers, lower shipping limits and${classic ? '' : '<br class="fbr">'} discounts on special services.</p>
        <ul><li>Earn points</li><li>Pointshop</li><li>Member offers</li><li>Possibility of free shipping</li><li>Discounts on engraving</li><li>Discounts on gift wrapping</li></ul>
        <div class="club-cta"><a href="#" class="club-join">Become a member</a><a href="#" class="club-sign">Sign in</a><a href="#" class="club-more">Read more about Club Ditur</a></div>
      </div></div>
    <div class="foot-cols wrap">
      ${col('Customer service', ['Contact us here', 'Questions and answers', 'Return', 'Complaints', 'Delivery', 'Withdraw purchase'])}
      ${col('Explore Ditur', ['About Ditur', 'Our history', 'Trustpilot', 'Blog', 'Club Ditur'])}
      ${col('Most popular', ['Mens watches', 'Ladies watches', 'Smartwatches', 'Demo &amp; Pre-owned', 'Offers of the week', 'This month’s favourites'])}
      ${col('Terms and conditions', ['Terms and conditions', 'Privacy notice', 'Cookie settings'])}
    </div>
    <div class="foot-bottom wrap">
      <span>ditur.com</span>
      <div class="pay">${(classic ? [['VISA', 'Visa'], ['MASTERCARD', 'Mastercard'], ['PAYPAL', 'PayPal'], ['APPLE_PAY', 'Apple Pay'], ['GOOGLE_PAY', 'Google Pay']] : [['pay-visa', 'Visa'], ['pay-mastercard', 'Mastercard'], ['pay-paypal', 'PayPal'], ['pay-applepay', 'Apple Pay'], ['pay-googlepay', 'Google Pay']]).map(([f, n]) => `<img src="img/live/${f}.png" alt="${n}">`).join('')}</div>
      <span>Ditur.dk Aps - Elmegårdsvej 38 - 8361 Hasselager - Denmark - VAT: DK35636919 | Sitemap</span>
    </div>`;
  f.querySelectorAll('a').forEach(a => a.addEventListener('click', e => { e.preventDefault(); toast('Prototype - footer links are not part of the demo'); }));
}

/* Forside: skift mellem Exclusive-banner-varianter (husker valget, eller ?banner=a|b|c) */
function initBannerSwitch() {
  const sw = document.querySelector('.exb-switch'); if (!sw) return;
  const q = new URLSearchParams(location.search).get('banner');
  const set = v => {
    document.querySelectorAll('.exb').forEach(b => b.classList.toggle('on', b.dataset.v === v));
    sw.querySelectorAll('button').forEach(b => b.setAttribute('aria-selected', b.dataset.v === v));
    store.set('dx-banner', v);
  };
  sw.querySelectorAll('button').forEach(b => b.addEventListener('click', () => set(b.dataset.v)));
  set(/^[abc]$/.test(q) ? q : store.get('dx-banner', 'a'));
}

document.addEventListener('DOMContentLoaded', () => { renderMenu(); renderPopular(); renderFooter(); initBannerSwitch(); });
