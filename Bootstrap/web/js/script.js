/* =========================================
   SHOPEASE - GLOBAL JAVASCRIPT LOGIC
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

    // =========================================
    // 1. THEME TOGGLE (DARK/LIGHT MODE)
    // =========================================
    const themeToggleBtn = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const htmlElement = document.documentElement;

    // Load saved theme or default to light
    const savedTheme = localStorage.getItem('shopease_theme') || 'light';
    htmlElement.setAttribute('data-bs-theme', savedTheme);
    updateThemeIcon(savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-bs-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';

            htmlElement.setAttribute('data-bs-theme', newTheme);
            localStorage.setItem('shopease_theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }

    function updateThemeIcon(theme) {
        if (themeIcon) {
            themeIcon.className = theme === 'light' ? 'bi bi-moon-stars-fill' : 'bi bi-sun-fill';
        }
    }

    // =========================================
    // 2. SHOPPING CART LOGIC (LOCALSTORAGE)
    // =========================================
    const CART_KEY = 'shopease_cart';

    // Helper: Get cart from LocalStorage
    function getCart() {
        const cart = localStorage.getItem(CART_KEY);
        return cart ? JSON.parse(cart) : [];
    }

    // Helper: Save cart to LocalStorage
    function saveCart(cart) {
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
        updateCartCount();
    }

    // Helper: Update Cart Badge Count
    function updateCartCount() {
        const cart = getCart();
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        const cartCountBadge = document.getElementById('cartCount');
        if (cartCountBadge) {
            cartCountBadge.textContent = totalItems;
            // Hide badge if 0, show if > 0
            cartCountBadge.style.display = totalItems > 0 ? 'block' : 'none';
        }
    }

    // Helper: Show Toast Notification
    function showToast(message = 'Item added to cart successfully!') {
        const toastEl = document.getElementById('cartToast');
        if (toastEl) {
            const toastBody = toastEl.querySelector('.toast-body');
            toastBody.innerHTML = `<i class="bi bi-check-circle-fill me-2"></i> ${message}`;
            const toast = new bootstrap.Toast(toastEl);
            toast.show();
        }
    }

    // Action: Add to Cart
    function addToCart(id, name, price, image, quantity = 1) {
        const cart = getCart();
        const existingItem = cart.find(item => item.id === id);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({ id, name, price, image, quantity });
        }

        saveCart(cart);
        showToast(`${name} added to cart!`);
    }

    // Action: Remove from Cart
    function removeFromCart(id) {
        let cart = getCart();
        cart = cart.filter(item => item.id !== id);
        saveCart(cart);

        // Re-render cart page if we are on it
        if (document.getElementById('cartItemsContainer')) {
            renderCartPage();
        }
    }

    // Action: Update Quantity in Cart
    function updateCartQuantity(id, newQuantity) {
        const cart = getCart();
        const item = cart.find(item => item.id === id);

        if (item) {
            if (newQuantity <= 0) {
                removeFromCart(id);
            } else {
                item.quantity = newQuantity;
                saveCart(cart);
                renderCartPage();
            }
        }
    }

    // Initialize Cart Count on every page load
    updateCartCount();

    // Event Delegation for "Add to Cart" buttons (Works on Index & Shop pages)
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.add-to-cart-btn');
        if (btn) {
            e.preventDefault();
            const id = btn.getAttribute('data-id');
            const name = btn.getAttribute('data-name');
            const price = parseFloat(btn.getAttribute('data-price'));
            const image = btn.getAttribute('data-image');

            addToCart(id, name, price, image, 1);
        }
    });

    // =========================================
    // 3. CART PAGE SPECIFIC LOGIC
    // =========================================
    const cartItemsContainer = document.getElementById('cartItemsContainer');

    if (cartItemsContainer) {
        renderCartPage();
    }

    function renderCartPage() {
        const cart = getCart();
        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="text-center py-5">
                    <i class="bi bi-cart-x display-1 text-muted mb-3"></i>
                    <h4 class="fw-semibold">Your cart is empty</h4>
                    <p class="text-muted mb-4">Looks like you haven't added anything yet.</p>
                    <a href="shop.html" class="btn btn-primary rounded-pill px-4">Start Shopping</a>
                </div>
            `;
            updateCartSummary(0);
            return;
        }

        let subtotal = 0;

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;

            const row = document.createElement('div');
            row.className = 'row align-items-center border-bottom py-3 g-3';
            row.innerHTML = `
                <div class="col-4 col-md-2">
                    <img src="${item.image}" alt="${item.name}" class="img-fluid rounded" style="height: 80px; object-fit: cover;">
                </div>
                <div class="col-8 col-md-4">
                    <h6 class="fw-semibold mb-1">${item.name}</h6>
                    <p class="text-muted small mb-0">ID: #${item.id}</p>
                </div>
                <div class="col-6 col-md-2">
                    <div class="input-group input-group-sm" style="max-width: 120px;">
                        <button class="btn btn-outline-secondary qty-decrease" data-id="${item.id}"><i class="bi bi-dash"></i></button>
                        <input type="text" class="form-control text-center qty-input" value="${item.quantity}" readonly data-id="${item.id}">
                        <button class="btn btn-outline-secondary qty-increase" data-id="${item.id}"><i class="bi bi-plus"></i></button>
                    </div>
                </div>
                <div class="col-6 col-md-2 text-md-end">
                    <span class="fw-semibold">$${itemTotal.toFixed(2)}</span>
                </div>
                <div class="col-12 col-md-2 text-md-end">
                    <button class="btn btn-outline-danger btn-sm rounded-pill remove-item" data-id="${item.id}">
                        <i class="bi bi-trash"></i> Remove
                    </button>
                </div>
            `;
            cartItemsContainer.appendChild(row);
        });

        updateCartSummary(subtotal);
        attachCartEventListeners();
    }

    function updateCartSummary(subtotal) {
        const shipping = subtotal > 99 ? 0 : 9.99;
        const tax = subtotal * 0.08; // 8% tax
        const total = subtotal + shipping + tax;

        const elSubtotal = document.getElementById('cartSubtotal');
        const elShipping = document.getElementById('cartShipping');
        const elTax = document.getElementById('cartTax');
        const elTotal = document.getElementById('cartTotal');

        if (elSubtotal) elSubtotal.textContent = `$${subtotal.toFixed(2)}`;
        if (elShipping) elShipping.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
        if (elTax) elTax.textContent = `$${tax.toFixed(2)}`;
        if (elTotal) elTotal.textContent = `$${total.toFixed(2)}`;
    }

    function attachCartEventListeners() {
        // Quantity Increase
        document.querySelectorAll('.qty-increase').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                const input = document.querySelector(`.qty-input[data-id="${id}"]`);
                updateCartQuantity(id, parseInt(input.value) + 1);
            });
        });

        // Quantity Decrease
        document.querySelectorAll('.qty-decrease').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                const input = document.querySelector(`.qty-input[data-id="${id}"]`);
                updateCartQuantity(id, parseInt(input.value) - 1);
            });
        });

        // Remove Item
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                removeFromCart(id);
            });
        });
    }

    // =========================================
    // 4. PRODUCT PAGE SPECIFIC LOGIC
    // =========================================
    const productQtyInput = document.getElementById('productQuantity');
    if (productQtyInput) {
        const decreaseBtn = document.getElementById('qtyDecrease');
        const increaseBtn = document.getElementById('qtyIncrease');
        const addToCartBtn = document.getElementById('productAddToCart');

        if (decreaseBtn) {
            decreaseBtn.addEventListener('click', () => {
                let val = parseInt(productQtyInput.value);
                if (val > 1) productQtyInput.value = val - 1;
            });
        }

        if (increaseBtn) {
            increaseBtn.addEventListener('click', () => {
                let val = parseInt(productQtyInput.value);
                if (val < 99) productQtyInput.value = val + 1;
            });
        }

        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', () => {
                const id = addToCartBtn.getAttribute('data-id');
                const name = addToCartBtn.getAttribute('data-name');
                const price = parseFloat(addToCartBtn.getAttribute('data-price'));
                const image = addToCartBtn.getAttribute('data-image');
                const qty = parseInt(productQtyInput.value);

                addToCart(id, name, price, image, qty);
            });
        }
    }

    // Product Image Gallery Switching
    const galleryThumbs = document.querySelectorAll('.gallery-thumb');
    const mainProductImage = document.getElementById('mainProductImage');

    if (galleryThumbs.length > 0 && mainProductImage) {
        galleryThumbs.forEach(thumb => {
            thumb.addEventListener('click', () => {
                // Remove active class from all
                galleryThumbs.forEach(t => t.classList.remove('border-primary', 'opacity-100'));
                galleryThumbs.forEach(t => t.classList.add('opacity-50'));

                // Add active class to clicked
                thumb.classList.add('border-primary', 'opacity-100');
                thumb.classList.remove('opacity-50');

                // Update main image
                mainProductImage.src = thumb.src;
            });
        });
    }

    // =========================================
    // 5. SHOP PAGE: SEARCH & FILTER LOGIC
    // =========================================
    const searchInput = document.getElementById('shopSearch');
    const productCards = document.querySelectorAll('.product-card');

    if (searchInput && productCards.length > 0) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();

            productCards.forEach(card => {
                const title = card.querySelector('.card-title').textContent.toLowerCase();
                const category = card.querySelector('.text-muted.small').textContent.toLowerCase();

                if (title.includes(searchTerm) || category.includes(searchTerm)) {
                    card.style.display = 'block';
                    // Add fade-in animation
                    card.style.animation = 'fadeIn 0.4s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // Sort Products (Price Low/High)
    const sortSelect = document.getElementById('sortProducts');
    const productGrid = document.getElementById('productGrid');

    if (sortSelect && productGrid) {
        sortSelect.addEventListener('change', () => {
            const sortValue = sortSelect.value;
            const cardsArray = Array.from(productGrid.children);

            cardsArray.sort((a, b) => {
                const priceA = parseFloat(a.querySelector('.fw-bold.fs-5').textContent.replace('$', ''));
                const priceB = parseFloat(b.querySelector('.fw-bold.fs-5').textContent.replace('$', ''));

                if (sortValue === 'low-high') return priceA - priceB;
                if (sortValue === 'high-low') return priceB - priceA;
                return 0; // Default
            });

            // Re-append sorted cards
            cardsArray.forEach(card => productGrid.appendChild(card));
        });
    }

    // =========================================
    // 6. CONTACT PAGE: FORM VALIDATION
    // =========================================
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            e.stopPropagation();

            if (contactForm.checkValidity()) {
                // Simulate form submission
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;

                submitBtn.disabled = true;
                submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Sending...';

                setTimeout(() => {
                    submitBtn.innerHTML = '<i class="bi bi-check-lg me-2"></i>Message Sent!';
                    submitBtn.classList.remove('btn-primary');
                    submitBtn.classList.add('btn-success');
                    contactForm.reset();
                    contactForm.classList.remove('was-validated');

                    setTimeout(() => {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = originalText;
                        submitBtn.classList.remove('btn-success');
                        submitBtn.classList.add('btn-primary');
                    }, 3000);
                }, 1500);
            }

            contactForm.classList.add('was-validated');
        });
    }
});

// Add fadeIn keyframe dynamically for search filter
const styleSheet = document.createElement("style");
styleSheet.innerText = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(styleSheet);