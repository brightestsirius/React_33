// --- Таб-віджет ---
const tabs = Array.from(document.querySelectorAll('[role="tab"]'));
const panels = Array.from(document.querySelectorAll('[role="tabpanel"]'));

function selectTab(tab) {
  tabs.forEach((t) => {
    const isSelected = t === tab;
    t.setAttribute('aria-selected', String(isSelected));
    t.tabIndex = isSelected ? 0 : -1;
  });

  panels.forEach((panel) => {
    panel.hidden = panel.getAttribute('aria-labelledby') !== tab.id;
  });

  tab.focus();
}

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTab(tab));

  // навігація стрілками — обов'язкова частина патерну tablist з ARIA Authoring Practices
  tab.addEventListener('keydown', (event) => {
    let newIndex = null;

    if (event.key === 'ArrowRight') {
      newIndex = (index + 1) % tabs.length;
    } else if (event.key === 'ArrowLeft') {
      newIndex = (index - 1 + tabs.length) % tabs.length;
    }

    if (newIndex !== null) {
      event.preventDefault();
      selectTab(tabs[newIndex]);
    }
  });
});

// --- aria-live регіон ---
const addToCartButton = document.getElementById('add-to-cart');
const cartStatus = document.getElementById('cart-status');
let itemsInCart = 0;

addToCartButton.addEventListener('click', () => {
  itemsInCart += 1;
  // зміна текстового вмісту всередині [aria-live] автоматично озвучується екранним читачем
  cartStatus.textContent = `Товар додано в кошик. Всього товарів: ${itemsInCart}.`;
});
