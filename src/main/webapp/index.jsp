
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ShopEasy - Online Shopping
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

<body>
    <header>
        <div class="logo">
            <h1>ShopEasy</h1>
        </div>
        <nav>
            <ul>
                <li><a href="#mobiles">Mobiles</a></li>
                <li><a href="#laptops">Laptops</a></li>
                <li><a href="#clothes">Clothes</a></li>
                <li><a href="#cart"><em class="fas fa-shopping-cart"></em> <span id="cart-count">0</span></a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="mobiles" class="product-section">
            <h2>Smartphones</h2>
            <div class="product-container" id="mobile-container"></div>
        </section>

        <section id="laptops" class="product-section">
            <h2>Laptops</h2>
            <div class="product-container" id="laptop-container"></div>
        </section>

        <section id="clothes" class="product-section">
            <h2>Clothing</h2>
            <div class="product-container" id="clothes-container"></div>
        </section>
    </main>

    <footer>
        <p>&copy; 2023 ShopEasy. All rights reserved.</p>
    </footer>

    <div id="notification" class="notification"></div>

    <script src="script.js"></script>
</body>
</html>
