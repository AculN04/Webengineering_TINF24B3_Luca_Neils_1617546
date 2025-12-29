const cart = {};

const products = {
    'Sauerteigstarter': { price: 15.90 },
    'Sauerteigbrot': { price: 6.50 },
    'Gärkörbchen Set': { price: 24.90 },
    'Brottopf': { price: 79.90 },
    'Ritzmesser': { price: 12.90 },
    'Starter-Set': { price: 49.90 }
};

const recipes = [
    {
        title: 'Klassisches Sauerteigbrot',
        image: 'Klassisches_Sauerteigbrot.jpg',
        description: 'Das perfekte Einsteigerbrot mit knuspriger Kruste und luftiger Krume. Benötigt nur 4 Zutaten und etwas Geduld.',
        backzeit: '45 Min.',
        gehzeit: '12-18 Std.',
        difficulty: 'easy',
        difficultyText: 'Einfach',
        ingredients: [
            '500g Weizenmehl (Type 550)',
            '100g aktiver Sauerteigstarter',
            '350ml lauwarmes Wasser',
            '10g Salz'
        ],
        steps: [
            'Alle Zutaten außer Salz mischen und 30 Min. ruhen lassen (Autolyse)',
            'Salz einkneten und Teig 4-5 Mal im Abstand von 30 Min. dehnen und falten',
            '12-18 Stunden bei Raumtemperatur gehen lassen',
            'Teig vorsichtig formen und in Gärkorb geben, 1-2 Std. gehen lassen',
            'Bei 250°C mit Dampf 20 Min. backen, dann bei 220°C weitere 25 Min.'
        ]
    },
    {
        title: 'Rustikale Baguettes',
        image: 'Baguette.jpg',
        description: 'Knusprige französische Baguettes mit charakteristischen Löchern. Perfekt für Sandwiches oder als Beilage.',
        backzeit: '25 Min.',
        gehzeit: '8-10 Std.',
        difficulty: 'medium',
        difficultyText: 'Mittel',
        ingredients: [
            '500g Weizenmehl (Type 550)',
            '80g aktiver Sauerteigstarter',
            '320ml Wasser',
            '10g Salz',
            '3g Frischhefe (optional)'
        ],
        steps: [
            'Alle Zutaten zu einem glatten Teig kneten',
            '8-10 Stunden bei Raumtemperatur gehen lassen',
            'Teig in 3 Teile teilen und zu Baguettes formen',
            '1 Stunde gehen lassen, dann diagonal einschneiden',
            'Bei 240°C mit viel Dampf 20-25 Min. goldbraun backen'
        ],
        subtitle: 'für 3 Baguettes'
    },
    {
        title: 'Dinkel-Vollkornbrot',
        image: 'Dinkel_Vollkorn.jpg',
        description: 'Herzhaftes Vollkornbrot mit nussigem Geschmack. Reich an Nährstoffen und lange haltbar.                         ',
        backzeit: '50 Min.',
        gehzeit: '14-16 Std.',
        difficulty: 'easy',
        difficultyText: 'Einfach',
        ingredients: [
            '400g Dinkelvollkornmehl',
            '100g Dinkelmehl Type 630',
            '120g aktiver Sauerteigstarter',
            '350ml Wasser',
            '12g Salz',
            '50g Sonnenblumenkerne'
        ],
        steps: [
            'Alle Zutaten gründlich mischen',
            '14-16 Stunden abgedeckt gehen lassen',
            'In gefettete Kastenform geben, 1-2 Std. gehen lassen',
            'Oberfläche mit Wasser bestreichen und mit Kernen bestreuen',
            'Bei 230°C 15 Min., dann bei 200°C weitere 35 Min. backen'
        ]
    },
    {
        title: 'Sauerteig-Croissants',
        image: 'Croissant.jpg',
        description: 'Butterige Croissants mit einem Hauch Säure. Die Königsdisziplin des Sauerteigbackens!',
        backzeit: '20 Min.',
        gehzeit: '24 Std.',
        difficulty: 'hard',
        difficultyText: 'Schwer',
        ingredients: [
            '500g Weizenmehl (Type 550)',
            '80g aktiver Sauerteigstarter',
            '250ml Milch',
            '50g Zucker',
            '10g Salz',
            '250g kalte Butter (zum Einschlagen)'
        ],
        steps: [
            'Teig kneten und über Nacht im Kühlschrank gehen lassen',
            'Teig ausrollen und Butter in mehreren Schichten einschlagen (tourieren)',
            '3x falten mit Kühlpausen dazwischen',
            'Zu Dreiecken schneiden, aufrollen und 2-3 Std. gehen lassen',
            'Mit Eigelb bestreichen, bei 200°C 18-20 Min. goldbraun backen'
        ],
        subtitle: 'für 12 Croissants'
    },
    {
        title: 'Sauerteig-Pizza',
        image: 'Pizza.jpg',
        description: 'Luftiger Pizzateig mit unvergleichlichem Geschmack. Perfekt für den italienischen Abend!',
        backzeit: '12 Min.',
        gehzeit: '24 Std.',
        difficulty: 'medium',
        difficultyText: 'Mittel',
        ingredients: [
            '500g Weizenmehl (Type 00 oder 550)',
            '100g aktiver Sauerteigstarter',
            '300ml Wasser',
            '10g Salz',
            '15ml Olivenöl'
        ],
        steps: [
            'Alle Zutaten zu geschmeidigem Teig verarbeiten',
            '24 Stunden im Kühlschrank gehen lassen',
            'In 4 Portionen teilen, zu Kugeln formen, 2 Std. bei Raumtemperatur',
            'Vorsichtig dünn ausziehen, belegen',
            'Bei maximaler Hitze (280°C+) 10-12 Min. backen, idealerweise auf Pizzastein'
        ],
        subtitle: 'für 4 Pizzen'
    },
    {
        title: 'Bagels',
        image: 'Bagels.jpg',
        description: 'Chewy New York Style Bagels mit glänzender Kruste. Ideal für Frühstück oder Brunch.',
        backzeit: '20 Min.',
        gehzeit: '12 Std.',
        difficulty: 'medium',
        difficultyText: 'Mittel',
        ingredients: [
            '500g Weizenmehl (Type 550)',
            '100g aktiver Sauerteigstarter',
            '250ml Wasser',
            '10g Salz',
            '20g Honig oder Malzsirup',
            'Sesam, Mohn oder Salz zum Bestreuen'
        ],
        steps: [
            'Festen Teig kneten, 12 Std. im Kühlschrank gehen lassen',
            'In 8 Stücke teilen, zu Kugeln formen und Loch in die Mitte drücken',
            '1-2 Stunden gehen lassen',
            'In kochendem Wasser mit Honig je 30 Sek. pro Seite blanchieren',
            'Mit Toppings bestreuen, bei 220°C 18-20 Min. backen'
        ],
        subtitle: 'für 8 Bagels'
    }
];

const shopItems = [
    {
        name: 'Sauerteigstarter',
        image: 'Starter.jpg',
        description: 'Über 5 Jahre alter, sehr aktiver Roggenstarter. Bereit zum sofortigen Backen.',
        price: '15,90 €',
        cartName: 'Sauerteigstarter'
    },
    {
        name: 'Sauerteigbrot',
        image: 'Klassisches_Sauerteigbrot.jpg',
        description: 'Handgebackenes Weizensauerteigbrot 750g, täglich frisch, mindestens 24 Stunden gereift, knusprige Perfektion',
        price: '6,50 €',
        cartName: 'Sauerteigbrot'
    },
    {
        name: 'Gärkörbchen Set',
        image: 'Gärkörbchen.jpg',
        description: '2er Set runde Gärkörbchen aus Peddigrohr. 25cm Durchmesser, mit Leinentuch.',
        price: '24,90 €',
        cartName: 'Gärkörbchen Set'
    },
    {
        name: 'Brottopf',
        image: 'Gusseisen_Topf.jpg',
        description: 'Premium Gusseisen-Topf, 26cm. Perfekt für knusprige Krusten und optimale Dampfentwicklung.',
        price: '79,90 €',
        cartName: 'Brottopf'
    },
    {
        name: 'Ritzmesser',
        image: 'Bäckermesser_.jpg',
        description: 'Professionelles Bäckermesser mit Holzgriff und 5 Ersatzklingen. Für perfekte Einschnitte.',
        price: '12,90 €',
        cartName: 'Ritzmesser'
    },
    {
        name: 'Starter-Set',
        image: 'Set.jpg',
        description: 'Alles für den Einstieg: Weizenstarter, Gärkörbchen mit Leine, Ritzmesser und ausführliche Anleitung.',
        price: '49,90 €',
        cartName: 'Starter-Set'
    }
];

const reviews = [
    {
        stars: 5,
        text: 'Das beste Brot, das ich je gegessen habe! Die Kruste ist perfekt knusprig und die Krume so luftig. Ich bestelle jede Woche neu und bin jedes Mal begeistert. Absolute Empfehlung!',
        author: 'Sarah M.',
        product: 'Sauerteigbrot'
    },
    {
        stars: 5,
        text: 'Der Sauerteigstarter ist unglaublich aktiv! Mein erstes Brot war sofort ein Erfolg. Nach 5 Jahren Erfahrung merkt man die Qualität. Danke für diesen tollen Starter!',
        author: 'Michael B.',
        product: 'Sauerteigstarter'
    },
    {
        stars: 5,
        text: 'Das Gärkörbchen Set hat meine Brote auf ein neues Level gebracht. Die Qualität ist top und das Muster auf meinen Broten sieht jetzt aus wie vom Profi!',
        author: 'Julia K.',
        product: 'Gärkörbchen Set'
    },
    {
        stars: 5,
        text: 'Der Gusseisen-Topf war eine Investition, die sich absolut gelohnt hat! Meine Brote haben jetzt eine Kruste wie vom Bäcker. Game Changer!',
        author: 'Thomas R.',
        product: 'Brottopf'
    },
    {
        stars: 5,
        text: 'Perfektes Starter-Set für Einsteiger! Alles was man braucht in einem Paket. Die Anleitung ist super verständlich und ich habe direkt losgelegt. Bin total begeistert!',
        author: 'Laura H.',
        product: 'Starter-Set'
    },
    {
        stars: 5,
        text: 'Das Ritzmesser liegt perfekt in der Hand und die Klingen sind extrem scharf. Endlich gelingen mir saubere, präzise Schnitte. Ein Must-have für jeden Hobbybäcker!',
        author: 'David G.',
        product: 'Ritzmesser'
    },
    {
        stars: 5,
        text: 'Schmeckt wie bei Oma früher! Das Brot hat so einen authentischen Geschmack und bleibt auch nach Tagen noch frisch. Kann es nur weiterempfehlen!',
        author: 'Anna W.',
        product: 'Sauerteigbrot'
    },
    {
        stars: 4,
        text: 'Sehr gute Qualität bei allen Produkten. Der Starter brauchte ein paar Tage zum Eingewöhnen, aber jetzt läuft er perfekt. Toller Service!',
        author: 'Klaus H.',
        product: 'Sauerteigstarter'
    }
];

function addToCart(productName) {
    if (cart[productName]) {
        cart[productName].quantity++;
    } else {
        cart[productName] = {
            quantity: 1,
            price: products[productName].price,
        };
    }
    
    updateCartDisplay();
    
    const cartIndicator = document.querySelector('.cart-indicator');
    cartIndicator.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartIndicator.style.transform = 'scale(1)';
    }, 200);
}

function updateCartDisplay() {
    const totalItems = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalItems;
    
    const cartItemsContainer = document.getElementById('cartItems');
    
    if (totalItems === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">
                    <span class="material-symbols-outlined">shopping_cart</span>
                </div>
                <p>Dein Warenkorb ist leer</p>
                <p style="font-size: 0.9rem; margin-top: 0.5rem;">Füge Produkte hinzu, um loszulegen!</p>
            </div>
        `;
        document.getElementById('cartTotal').textContent = '0,00 €';
        return;
    }
    
    let html = '';
    let total = 0;
    
    for (const [name, item] of Object.entries(cart)) {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        html += `
            <div class="cart-item">
                <div class="cart-item-details">
                    <div class="cart-item-name">${name}</div>
                    <div class="cart-item-price">${item.price.toFixed(2).replace('.', ',')} € × ${item.quantity} = ${itemTotal.toFixed(2).replace('.', ',')} €</div>
                </div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="decreaseQuantity('${name}')">−</button>
                    <div class="quantity-display">${item.quantity}</div>
                    <button class="quantity-btn" onclick="increaseQuantity('${name}')">+</button>
                    <button class="remove-btn" onclick="removeFromCart('${name}')">Entfernen</button>
                </div>
            </div>
        `;
    }
    
    cartItemsContainer.innerHTML = html;
    document.getElementById('cartTotal').textContent = total.toFixed(2).replace('.', ',') + ' €';
}

function increaseQuantity(productName) {
    if (cart[productName]) {
        cart[productName].quantity++;
        updateCartDisplay();
    }
}

function decreaseQuantity(productName) {
    if (cart[productName]) {
        if (cart[productName].quantity > 1) {
            cart[productName].quantity--;
        } else {
            delete cart[productName];
        }
        updateCartDisplay();
    }
}

function removeFromCart(productName) {
    delete cart[productName];
    updateCartDisplay();
}

function openCart() {
    updateCartDisplay();
    document.getElementById('cartModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    document.getElementById('cartModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function checkout() {
    const totalItems = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
    if (totalItems === 0) {
        alert('Dein Warenkorb ist leer!');
        return;
    }
    
    alert('Vielen Dank für deine Bestellung! Die Checkout-Funktion würde hier zur Bezahlung weiterleiten.');
    closeCart();
}

function toggleRecipe(element) {
    const isExpanded = element.classList.contains('expanded');
    
    document.querySelectorAll('.recipe-card').forEach(card => {
        card.classList.remove('expanded');
    });
    
    if (!isExpanded) {
        element.classList.add('expanded');
    }
}

let currentReview = 0;
const totalReviews = reviews.length;

function initMainReviews() {
    const dotsContainer = document.getElementById('mainReviewDots');
    dotsContainer.innerHTML = '';
    
    for (let i = 0; i < totalReviews; i++) {
        const dot = document.createElement('div');
        dot.className = `review-dot ${i === 0 ? 'active' : ''}`;
        dot.onclick = () => goToReview(i);
        dotsContainer.appendChild(dot);
    }
}

function changeMainReview(direction) {
    currentReview = (currentReview + direction + totalReviews) % totalReviews;
    updateMainReviewDisplay();
}

function goToReview(index) {
    currentReview = index;
    updateMainReviewDisplay();
}

function updateMainReviewDisplay() {
    const slider = document.getElementById('mainReviewsSlider');
    const offset = -currentReview * 100;
    slider.style.transform = `translateX(${offset}%)`;
    
    const dots = document.querySelectorAll('#mainReviewDots .review-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentReview);
    });
}

function renderRecipes() {
    const container = document.getElementById('recipesContainer');
    let starsHTML = '';
    
    recipes.forEach(recipe => {
        if (recipe.difficulty === 'easy') starsHTML = '<span class="material-symbols-outlined">star</span>';
        else if (recipe.difficulty === 'medium') starsHTML = '<span class="material-symbols-outlined">star</span><span class="material-symbols-outlined">star</span>';
        else starsHTML = '<span class="material-symbols-outlined">star</span><span class="material-symbols-outlined">star</span><span class="material-symbols-outlined">star</span>';
        
        const html = `
            <div class="recipe-card" onclick="toggleRecipe(this)">
                <div class="recipe-image" style="background-image: url('${recipe.image}');"></div>
                <div class="recipe-content">
                    <h3>${recipe.title}</h3>
                    <p>${recipe.description}</p>
                    <div class="recipe-meta">
                        <span class="recipe-meta-item">
                            <span class="material-symbols-outlined">schedule</span>
                            Backzeit: ${recipe.backzeit}
                        </span>
                        <span class="recipe-meta-item">
                            <span class="material-symbols-outlined">hourglass_empty</span>
                            Gehzeit: ${recipe.gehzeit}
                        </span>
                    </div>
                    <div class="difficulty-container">
                        <span class="difficulty ${recipe.difficulty}">
                            ${starsHTML}
                            ${recipe.difficultyText}
                        </span>
                    </div>
                </div>
                <div class="recipe-details">
                    <div class="recipe-details-content">
                        <div class="recipe-section">
                            <h4>Zutaten ${recipe.subtitle ? '(' + recipe.subtitle + ')' : ''}</h4>
                            <ul>
                                ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="recipe-section recipe-steps">
                            <h4>Zubereitung</h4>
                            <ul>
                                ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="expand-indicator"></div>
            </div>
        `;
        container.innerHTML += html;
    });
}

function renderShop() {
    const container = document.getElementById('shopContainer');
    
    shopItems.forEach(item => {
        const html = `
            <div class="product-card">
                <div class="product-image" style="background-image: url('${item.image}');"></div>
                <div class="product-content">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <div class="price">${item.price}</div>
                    <button class="btn no-print" onclick="addToCart('${item.cartName}')">In den Warenkorb</button>
                </div>
            </div>
        `;
        container.innerHTML += html;
    });
}

function renderReviews() {
    const slider = document.getElementById('mainReviewsSlider');
    
    reviews.forEach(review => {
        const starsHTML = '★'.repeat(review.stars) + (review.stars < 5 ? '☆'.repeat(5 - review.stars) : '');
        
        const html = `
            <div class="review-slide">
                <div class="review-card">
                    <div class="review-stars">${starsHTML}</div>
                    <p class="review-text">"${review.text}"</p>
                    <div class="review-author-section">
                        <span class="review-author">${review.author}</span>
                        <span class="review-product">• ${review.product}</span>
                    </div>
                </div>
            </div>
        `;
        slider.innerHTML += html;
    });
}

window.addEventListener('DOMContentLoaded', () => {
    renderRecipes();
    renderShop();
    renderReviews();
    initMainReviews();
    
    setInterval(() => {
        changeMainReview(1);
    }, 6000);
});

document.getElementById('cartModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeCart();
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});