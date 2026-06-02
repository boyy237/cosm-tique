// Panier
 cart = []
// Ajouter au panier
document.querySelectorAll('.btn-add').forEach(button => {
    button.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('.sale').textContent;
        
        const product = {
            id: Math.random(),
            name: productName,
            price: productPrice
        };
        
        cart.push(product);
        updateCartCount();
        showNotification(`${productName} ajouté au panier!`);
    });
});

// Mettre à jour le compteur du panier
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    cartCount.textContent = cart.length;
}

// Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #2b1201, #15080f);
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 1001;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Menu hamburger responsive
    const navToggl = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    navToggl.addEventListener('click', () => {
        navMenu.classList.toggle('nav-open');
    });

// Filtrex produits
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Retirer la classe active des autres boutons
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        const filter = this.getAttribute('data-filter');
        
        document.querySelectorAll('.product-card').forEach(card => {
            const category = card.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
                setTimeout(() => card.style.opacity = '1', 10);
            } else {
                card.style.opacity = '0';
                setTimeout(() => card.style.display = 'none', 300);
            }
        });
    });
});

// Formulaire Newsletter
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        showNotification(`Merci! Un email de confirmation a été envoyé à ${email}`);
        this.reset();
    });
}

// Formulaire Contact
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        showNotification('Votre message a été envoyé avec succès!');
        this.reset();
    });
}

// Bouton Panier
document.querySelector('.cart-btn').addEventListener('click', function() {
    if (cart.length === 0) {
        showNotification('Votre panier est vide');
        return;
    }
    
    let cartSummary = 'Produits dans le panier:\n\n';
    cart.forEach((product, index) => {
        cartSummary += `${index + 1}. ${product.name} - ${product.price}\n`;
    });
    
    const total = cart.reduce((sum, product) => {
        const price = parseFloat(product.price.replace('€', ''));
        return sum + price;
    }, 0);
    
    cartSummary += `\nTotal: ${total.toFixed(2)}€`;
    
    alert(cartSummary);
});

// Animation au chargement
window.addEventListener('load', function() {
    document.querySelectorAll('.product-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 50);
    });
});

// Styles pour les animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);



// ===== MENU HAMBURGER =====
        const navToggle = document.getElementById('nav-toggle');
        const menuOverlay = document.getElementById('menuOverlay');
        const menuBackdrop = document.getElementById('menuBackdrop');
        const menuCloseBtn = document.getElementById('menuCloseBtn');

        function openMenu() {
            menuOverlay.classList.add('open');
            document.body.style.overflow = 'hidden'; // bloquer le scroll
        }

        function closeMenu() {
            menuOverlay.classList.remove('open');
            document.body.style.overflow = '';
        }

        navToggle.addEventListener('click', openMenu);
        menuCloseBtn.addEventListener('click', closeMenu);
        menuBackdrop.addEventListener('click', closeMenu);

        // Fermer le menu quand on clique sur un lien de navigation
        document.querySelectorAll('.menu-nav-links a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Fermer avec la touche Echap
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeMenu();
        });

        // ===== FILTRES PRODUITS =====
        const filterBtns = document.querySelectorAll('.filter-btn');
        const productCards = document.querySelectorAll('.product-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.dataset.filter;
                productCards.forEach(card => {
                    if (filter === 'all' || card.dataset.category === filter) {
                        card.style.display = '';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

           
        // SCROLLER
    


const btn = document.getElementById('backToTop');
  
// Afficher le bouton après 900px de défilement
window.onscroll = function() {
  if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
};

// Retour en haut au clic
btn.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};