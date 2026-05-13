(function () {
  'use strict';

  /* ============ DATA ============ */
  const CATEGORIES = ['All Varieties', 'Bagels', 'Schmears', 'Sauces', 'Others'];

  const PRODUCTS = [
    { id: 'big-bagel-box', name: 'Big Bagel Box', price: 55.00, priceLabel: '$55.00 AUD',
      category: 'Bagels', img: 'assets/products/big-bagel-box.png', variantType: 'box',
      description: 'Our Bagel Boxes are for those moments that call for a little something extra. Whether it\'s a birthday brunch, a thank-you gift, or a just because kind of day, these beauties make showing up feel like a full-blown gesture. We\'ve swapped our signature brown bag for a sleek display box (and yes, they present as well as they taste).',
      highlight: 'Big Box: 10 bagels + 2 schmears of your choice',
      ingredients: 'Bread flour, water, salt, malt barley, yeast. Toppings vary by flavour selection.' },
    { id: 'blueberry-bagels', name: 'Blueberry Bagels', price: 16.00, priceLabel: '$16.00 AUD',
      category: 'Bagels', img: 'assets/products/blueberry-bagels.png',
      packSizes: [{ label: '4-Pack', qty: 4, price: 16.00 }],
      description: 'Real blueberries. Not too sweet. An irresistible bagel for adults + kids alike — especially when paired with our plain whipped schmear, a drizzle of honey + lemon (trust us).',
      ingredients: 'WA wheat flour, water, brown sugar, blueberries, yeast, salt, organic vanilla extract, beetroot powder.' },
    { id: 'seeded-bagels', name: 'Seeded Bagels', price: 16.00, priceLabel: '$16.00 AUD',
      category: 'Bagels', img: 'assets/products/seeded-bagels.png',
      packSizes: [{ label: '4-Pack', qty: 4, price: 16.00 }],
      description: 'An absolute classic with its delightful combo of poppy + sesame provides a satisfying crunch with each bite. Whether you enjoy it plain or as the base for a delicious sandwich, this flavourful and textured bagel is sure to please your palate. Schmear pairing: all of them (including sweet)! Our dough is neutral in flavour so choose your own adventure!',
      ingredients: 'WA wheat flour, water, malt syrup, salt, yeast, black & white sesame seeds, poppy seeds, garlic powder, Italian herbs' },
    { id: 'jalapeno-cheese-bagels', name: 'Jalapeño Cheese Bagels', price: 16.00, priceLabel: '$16.00 AUD',
      category: 'Bagels', img: 'assets/products/jalapeno-cheese-bagels.png',
      packSizes: [{ label: '4-Pack', qty: 4, price: 16.00 }],
      description: 'For when your tastebuds need a wake-up call. This fiery little number is studded with jalapeño and finished with a crisp cheddar crown — chewy, cheesy, and just spicy enough to keep things interesting. Warning: highly addictive with our savoury schmears, sliced onion and a fried egg on top.',
      ingredients: 'flour, water, pickled jalapeños, three-cheese blend, malt syrup, salt, yeast, smoked paprika, garlic powder.' },
    { id: 'rosemary-garlic-bagels', name: 'Rosemary Garlic Bagels', price: 14.00, priceLabel: '$14.00 AUD',
      category: 'Bagels', img: 'assets/products/rosemary-garlic-bagels.png',
      packSizes: [{ label: '4-Pack', qty: 4, price: 14.00 }],
      description: 'The irresistible aroma of this one fills the air, making it impossible to resist indulging in its savoury, herb-infused goodness. Schmear pairing: Whipped, Smoky Garlic, Jalapeño or Dill (if you like to get wild)',
      ingredients: 'WA wheat flour, water, malt syrup, salt, yeast, garlic flakes, dried rosemary, garlic powder, Italian herbs.' },
    { id: 'plain-bagels', name: 'Plain Bagels', price: 13.00, priceLabel: '$13.00 AUD',
      category: 'Bagels', img: 'assets/products/plain-bagels.png',
      packSizes: [{ label: '4-Pack', qty: 4, price: 13.00 }],
      description: 'Ah, the humble legend, the blank canvas, the one that quietly carries the whole bagel family on its perfectly golden shoulders. Whether you go sweet or savoury, sandwich or schmear, it\'s the ride-or-die bagel you\'ll always come back to. No preservatives. No ego. Pair with every schmear!',
      ingredients: 'WA wheat flour, water, malt syrup, salt, yeast, garlic powder, Italian herbs (but the flavour is still neutral)!' },
    { id: 'blueberry-schmear', name: 'Blueberry Schmear', price: 8.00, priceLabel: '$8.00 AUD',
      category: 'Schmears', img: 'assets/products/blueberry-schmear.png',
      description: 'Luscious and fruity, our Blueberry Schmear is made with real blueberries folded into whipped cream cheese. Sweet enough to feel like a treat, balanced enough to eat every morning.',
      ingredients: 'Cream cheese, fresh blueberries, icing sugar, lemon zest.' },
    { id: 'dill-schmear', name: 'Dill Schmear', price: 8.00, priceLabel: '$8.00 AUD',
      category: 'Schmears', img: 'assets/products/dill-schmear.png',
      description: 'Fresh, herby, and bright. Our Dill Schmear is a classic New York-style cream cheese loaded with fresh dill and a hint of lemon. The go-to pairing for our Seeded or Plain Bagels.',
      ingredients: 'Cream cheese, fresh dill, lemon juice, garlic, salt.' },
    { id: 'jalapeno-schmear', name: 'Jalapeño Schmear', price: 8.00, priceLabel: '$8.00 AUD',
      category: 'Schmears', img: 'assets/products/jalapeno-schmear.png',
      description: 'Creamy with a kick. Our Jalapeño Schmear blends whipped cream cheese with fresh jalapeños for a spread that wakes up any bagel. Pairs perfectly with our Jalapeño Cheese Bagels for a double hit of heat.',
      ingredients: 'Cream cheese, fresh jalapeños, lime juice, salt.' },
    { id: 'smoky-garlic-schmear', name: 'Smoky Garlic Schmear', price: 8.00, priceLabel: '$8.00 AUD',
      category: 'Schmears', img: 'assets/products/smoky-garlic-schmear.png',
      description: 'Deep, smoky, and irresistibly savoury. Roasted garlic and smoked paprika are whipped into cream cheese for a schmear that turns any bagel into a full flavour experience.',
      ingredients: 'Cream cheese, roasted garlic, smoked paprika, salt, olive oil.' },
    { id: 'strawberry-schmear', name: 'Strawberry Schmear', price: 8.00, priceLabel: '$8.00 AUD',
      category: 'Schmears', img: 'assets/products/strawberry-schmear.png',
      description: 'Summer in a jar. Our Strawberry Schmear is made with fresh strawberries and a touch of honey, whipped into silky cream cheese. Bright, sweet, and perfect on a toasted Blueberry Bagel.',
      ingredients: 'Cream cheese, fresh strawberries, honey, lemon juice.' },
    { id: 'whipped-schmear', name: 'Whipped Schmear', price: 8.00, priceLabel: '$8.00 AUD',
      category: 'Schmears', img: 'assets/products/whipped-schmear.png',
      description: 'Pure, simple, perfect. Our Whipped Schmear is plain cream cheese whipped to an ultra-light, spreadable texture. The classic choice — lets the bagel do the talking.',
      ingredients: 'Cream cheese, salt.' },
    { id: 'feijoa-jalapeno', name: 'Feijoa & Jalapeno Hot Sauce', price: 12.95, priceLabel: '$12.95 AUD',
      category: 'Sauces', img: 'assets/products/feijoa-jalapeno-hot-sauce.png',
      description: 'A South West WA original. Sweet feijoa meets fiery jalapeño in this small-batch hot sauce that\'s as unique as it is addictive. Drizzle it on your bagel, eggs, or anything that needs a flavour lift.',
      ingredients: 'Feijoa, jalapeño, apple cider vinegar, garlic, sugar, salt.' },
    { id: 'hot-honey', name: 'Hot Honey', price: 13.95, priceLabel: '$13.95 AUD',
      category: 'Sauces', img: 'assets/products/hot-honey.png',
      description: 'Sweet heat in its purest form. Our Hot Honey is raw honey infused with chilli for a condiment that works on everything — drizzle it on a toasted bagel with ricotta, or use it to finish a cheese board.',
      ingredients: 'Raw honey, dried chilli flakes, apple cider vinegar.' },
    { id: 'manji-truffle', name: 'Manji Black Truffle Hot Sauce', price: 16.95, priceLabel: '$16.95 AUD',
      category: 'Sauces', img: 'assets/products/manji-truffle-hot-sauce.png',
      description: 'Luxury meets heat. Black truffle and chilli come together in this indulgent hot sauce that elevates any dish. A small-batch collaboration that\'s as bold as it is refined.',
      ingredients: 'Black truffle, chilli, olive oil, garlic, salt, apple cider vinegar.' },
    { id: 'nopale-verde', name: 'Nopale Verde Hot Sauce', price: 12.95, priceLabel: '$12.95 AUD',
      category: 'Sauces', img: 'assets/products/nopale-verde-hot-sauce.png',
      description: 'Bright, tangy, and herbaceous. Made with nopale cactus and green chillies, this verde sauce brings a fresh, vegetal heat that pairs beautifully with eggs, avocado, and of course — bagels.',
      ingredients: 'Nopale cactus, green chilli, tomatillo, garlic, lime juice, coriander, salt.' },
    { id: 'red-jalapeno-lime', name: 'Red Jalapeño & Lime Hot Sauce', price: 12.95, priceLabel: '$12.95 AUD',
      category: 'Sauces', img: 'assets/products/red-jalapeno-lime-hot-sauce.png',
      description: 'Tangy, bright, and fiery. Red jalapeños are balanced with fresh lime juice for a hot sauce that cuts through richness and adds a citrusy punch to everything it touches.',
      ingredients: 'Red jalapeño, lime juice, garlic, apple cider vinegar, salt.' },
    { id: 'gift-cards', name: 'Better Bagels Gift Cards', price: 25.00, priceLabel: 'From $25.00 AUD',
      category: 'Others', img: 'assets/products/gift-cards.png', variantType: 'gift' },
    { id: 'bagel-storage', name: 'Bagel Storage + Freezer Bag', price: 20.00, priceLabel: '$20.00 AUD',
      category: 'Others', img: 'assets/products/bagel-storage.png',
      description: 'Keep your bagels fresher for longer. Our reusable storage and freezer bag is designed specifically for bagels — airtight, freezer-safe, and built to preserve that fresh-baked texture. Slice before freezing for the perfect grab-and-toast morning.',
      ingredients: null },
  ];

  const BEST_SELLERS = ['big-bagel-box', 'blueberry-bagels', 'blueberry-schmear', 'feijoa-jalapeno'];

  const BAGEL_FLAVORS = ['Plain', 'Seeded', 'Rosemary', 'Jalapeno', 'Blueberry'];
  const SCHMEAR_FLAVORS = ['Whipped (plain)', 'Dill', 'Jalapeno', 'Smoky Garlic', 'Blueberry', 'Strawberry'];

  /* ============ STATE ============ */
  const SORT_OPTIONS = [
    { key: 'featured',   label: 'Featured' },
    { key: 'alpha-az',   label: 'Alphabetically, A-Z' },
    { key: 'alpha-za',   label: 'Alphabetically, Z-A' },
    { key: 'price-asc',  label: 'Price, low to high' },
    { key: 'price-desc', label: 'Price, high to low' },
  ];

  let cart = [];  // [{id, name, price, img, qty, subtitle, desc}]
  let activeCategory = 'All Varieties';
  let activeSort = 'featured';
  let detailState = {};  // product-specific state reset on each product open
  let shippingMethod = 'delivery';  // 'delivery' | 'pickup'
  let shippingCost = 10.00;
  let productReferrer = 'shop';  // page hash to return to after Add to Cart
  let currentHash = '';
  const scrollPositions = {};  // hash -> Y offset, used to restore scroll when returning

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