(function () {
  'use strict';

  /* ============ HELPERS ============ */
  function $(id) { return document.getElementById(id); }
  function fmt(n) { return '$' + n.toFixed(2); }
  function byId(id) { return PRODUCTS.find(function (p) { return p.id === id; }); }
  function cartCount() { return cart.reduce(function (s, it) { return s + it.qty; }, 0); }
  function cartSubtotal() { return cart.reduce(function (s, it) { return s + it.price * it.qty; }, 0); }

  /* ============ ROUTING ============ */
  function navigateTo(hash) {
    const parts = (hash || 'home').split('/');
    const page = parts[0] || 'home';
    const arg = parts[1];
    document.querySelectorAll('.page').forEach(function (p) { p.classList.remove('active'); });
    const target = $('page-' + (page === 'product' ? 'product' : page)) || $('page-home');
    target.classList.add('active');

    if (page === 'shop') renderShop();
    else if (page === 'product') renderProduct(arg);
    else if (page === 'cart') renderCart();
    else if (page === 'checkout') renderCheckout();
    else if (page === 'confirm') renderConfirm();

    // Restore prior scroll for this hash if we have one; otherwise scroll to top.
    // Defer one frame so any newly-rendered content has laid out before we scroll.
    const targetY = scrollPositions[hash] || 0;
    requestAnimationFrame(function () {
      window.scrollTo(0, targetY);
    });
  }

  function onHashChange() {
    const raw = (window.location.hash || '#home').replace(/^#/, '');
    const prev = currentHash;
    const newPage = raw.split('/')[0];
    const prevPage = prev.split('/')[0];
    // Save the outgoing page's scroll position so we can restore it on return.
    if (prev) scrollPositions[prev] = window.scrollY || window.pageYOffset || 0;
    // Track where the user came from when entering a product detail page,
    // so "Add to Cart" can bring them back there afterward.
    if (newPage === 'product' && prevPage !== 'product' && prev) {
      productReferrer = prev;
    }
    // Order is complete: clear the cart when the user leaves the confirm page.
    if (prevPage === 'confirm' && newPage !== 'confirm') {
      cart = [];
      shippingMethod = 'delivery';
      shippingCost = 10.00;
      updateCartBadge();
    }
    currentHash = raw;
    navigateTo(raw);
  }

  /* ============ INIT ============ */
  function init() {
    renderHome();
    window.addEventListener('hashchange', onHashChange);
    onHashChange();
    updateCartBadge();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();