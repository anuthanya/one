// Product data
const products = {
    mobiles: [
        {
            id: 1,
            name: "iPhone 15 Pro",
            price: 134900,
            image: "https://m.media-amazon.com/images/I/61m1Dot5KCL._SL1500_.jpg"
        },
        {
            id: 2,
            name: "Samsung Galaxy S23 Ultra",
            price: 124999,
            image: "https://m.media-amazon.com/images/I/61HHS0HrjpL._SL1500_.jpg"
        },
        {
            id: 3,
            name: "OnePlus 11 5G",
            price: 56999,
            image: "https://m.media-amazon.com/images/I/61amb0CfMGL._SL1500_.jpg"
        },
        {
            id: 4,
            name: "Xiaomi 13 Pro",
            price: 79999,
            image: "https://m.media-amazon.com/images/I/61fy+u9q2FL._SL1500_.jpg"
        },
        {
            id: 5,
            name: "Google Pixel 7 Pro",
            price: 66999,
            image: "https://m.media-amazon.com/images/I/71Gh1RWth5L._SL1500_.jpg"
        },
        {
            id: 6,
            name: "Vivo X90 Pro",
            price: 84990,
            image: "https://m.media-amazon.com/images/I/61CnyJ-IbML._SL1500_.jpg"
        },
        {
            id: 7,
            name: "OPPO Find N2 Flip",
            price: 89999,
            image: "https://m.media-amazon.com/images/I/61g+McQpg3L._SL1500_.jpg"
        },
        {
            id: 8,
            name: "Nothing Phone 2",
            price: 44999,
            image: "https://m.media-amazon.com/images/I/61oX8Y6yURL._SL1500_.jpg"
        },
        {
            id: 9,
            name: "Realme GT Neo 3",
            price: 32999,
            image: "https://m.media-amazon.com/images/I/61bwiPRcvIL._SL1500_.jpg"
        },
        {
            id: 10,
            name: "iQOO 11 5G",
            price: 59999,
            image: "https://m.media-amazon.com/images/I/61mFfZMXgVL._SL1500_.jpg"
        }
    ],
    laptops: [
        {
            id: 11,
            name: "MacBook Pro M2",
            price: 159900,
            image: "https://m.media-amazon.com/images/I/61aUBxqc5PL._SL1500_.jpg"
        },
        {
            id: 12,
            name: "Dell XPS 13",
            price: 129990,
            image: "https://m.media-amazon.com/images/I/71YHjVXyR0L._SL1500_.jpg"
        },
        {
            id: 13,
            name: "HP Spectre x360",
            price: 114990,
            image: "https://m.media-amazon.com/images/I/71QkYzOjYaL._SL1500_.jpg"
        },
        {
            id: 14,
            name: "Lenovo Yoga 9i",
            price: 139990,
            image: "https://m.media-amazon.com/images/I/71LJJrKzpZL._SL1500_.jpg"
        },
        {
            id: 15,
            name: "Asus ROG Zephyrus G14",
            price: 109990,
            image: "https://m.media-amazon.com/images/I/71X7I4R1M4L._SL1500_.jpg"
        },
        {
            id: 16,
            name: "Microsoft Surface Laptop 5",
            price: 111990,
            image: "https://m.media-amazon.com/images/I/71q3J-wSDVL._SL1500_.jpg"
        },
        {
            id: 17,
            name: "Acer Swift 3",
            price: 64990,
            image: "https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg"
        },
        {
            id: 18,
            name: "MSI Katana GF66",
            price: 89990,
            image: "https://m.media-amazon.com/images/I/71VWvc5J+ZL._SL1500_.jpg"
        },
        {
            id: 19,
            name: "LG Gram 17",
            price: 134990,
            image: "https://m.media-amazon.com/images/I/71f5+XdtS4L._SL1500_.jpg"
        },
        {
            id: 20,
            name: "Samsung Galaxy Book3 Pro",
            price: 119990,
            image: "https://m.media-amazon.com/images/I/71YHjVXyR0L._SL1500_.jpg"
        }
    ],
    clothes: [
        {
            id: 21,
            name: "Men's Casual Shirt",
            price: 899,
            image: "https://m.media-amazon.com/images/I/71tGp7Q6RRL._UL1500_.jpg"
        },
        {
            id: 22,
            name: "Women's Summer Dress",
            price: 1299,
            image: "https://m.media-amazon.com/images/I/71YHjVXyR0L._UL1500_.jpg"
        },
        {
            id: 23,
            name: "Men's Formal Suit",
            price: 3499,
            image: "https://m.media-amazon.com/images/I/61-jAhtH5VL._UL1500_.jpg"
        },
        {
            id: 24,
            name: "Women's Jeans",
            price: 999,
            image: "https://m.media-amazon.com/images/I/71Hn+W5YQVL._UL1500_.jpg"
        },
        {
            id: 25,
            name: "Unisex Hoodie",
            price: 1499,
            image: "https://m.media-amazon.com/images/I/71tGp7Q6RRL._UL1500_.jpg"
        },
        {
            id: 26,
            name: "Men's Sports T-Shirt",
            price: 599,
            image: "https://m.media-amazon.com/images/I/61-jAhtH5VL._UL1500_.jpg"
        },
        {
            id: 27,
            name: "Women's Kurti",
            price: 799,
            image: "https://m.media-amazon.com/images/I/71Hn+W5YQVL._UL1500_.jpg"
        },
        {
            id: 28,
            name: "Men's Denim Jacket",
            price: 1999,
            image: "https://m.media-amazon.com/images/I/71tGp7Q6RRL._UL1500_.jpg"
        },
        {
            id: 29,
            name: "Women's Winter Coat",
            price: 2999,
            image: "https://m.media-amazon.com/images/I/71YHjVXyR0L._UL1500_.jpg"
        },
        {
            id: 30,
            name: "Unisex Sneakers",
            price: 2499,
            image: "https://m.media-amazon.com/images/I/61-jAhtH5VL._UL1500_.jpg"
        }
    ]
};

// Cart functionality
let cart = [];

// Display products
function displayProducts() {
    // Display mobiles
    const mobileContainer = document.getElementById('mobile-container');
    products.mobiles.forEach(product => {
        mobileContainer.appendChild(createProductCard(product));
    });

    // Display laptops
    const laptopContainer = document.getElementById('laptop-container');
    products.laptops.forEach(product => {
        laptopContainer.appendChild(createProductCard(product));
    });

    // Display clothes
    const clothesContainer = document.getElementById('clothes-container');
    products.clothes.forEach(product => {
        clothesContainer.appendChild(createProductCard(product));
    });
}

// Create product card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">₹${product.price.toLocaleString('en-IN')}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        </div>
    `;
    
    return card;
}

// Add to cart function
function addToCart(productId) {
    // Find product in all categories
    let product;
    
    for (const category in products) {
        product = products[category].find(p => p.id === productId);
        if (product) break;
    }
    
    if (product) {
        // Check if product already in cart
        const existingItem = cart.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        
        updateCartCount();
        showNotification(`${product.name} added to cart`);
    }
}

// Update cart count
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}

// Show notification
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    
    // Add to cart button click
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            addToCart(productId);
        }
    });
});
