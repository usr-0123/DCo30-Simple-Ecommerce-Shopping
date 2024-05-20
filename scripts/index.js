document.addEventListener('DOMContentLoaded', () => {
    const sampleItems = [
        { name: 'Running Shoes', price: 10, available: 10 },
        { name: 'Denim Jacket', price: 20, available: 15 },
        { name: 'Silk Scarf', price: 30, available: 33 },
        { name: 'Casual Shorts', price: 40, available: 51 },
        { name: 'Leather Belt', price: 50, available: 35 },
        { name: 'Winter Gloves', price: 60, available: 43 },
        { name: 'Wool Socks', price: 70, available: 67 },
        { name: 'Sports Cap', price: 80, available: 92 },
        { name: 'Hoodie', price: 90, available: 5 }
    ];

    if (!localStorage.getItem('items')) {
        localStorage.setItem('items', JSON.stringify(sampleItems));
    }

    const items = JSON.parse(localStorage.getItem('items'));

    const itemsContainer = document.getElementById('items');
    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        itemDiv.innerHTML = `
            <h2>${item.name}</h2>
            <p>Price: Ksh.${item.price}</p>
            <p>Units: ${item.available}</p>
            <button onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
        `;
        itemsContainer.appendChild(itemDiv);
    });

    updateCartCount();
});

function addToCart(itemName, itemPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let items = JSON.parse(localStorage.getItem('items'));
    const item = items.find(item => item.name === itemName);

    if (item && item.available > 0) {
        const existingCartItem = cart.find(cartItem => cartItem.name === itemName);
        if (existingCartItem) {
            existingCartItem.quantity += 1;
        } else {
            cart.push({ name: itemName, price: itemPrice, quantity: 1 });
        }

        item.available -= 1;
        localStorage.setItem('cart', JSON.stringify(cart))
        localStorage.setItem('items', JSON.stringify(items))
        updateCartCount()
        location.reload()
    } else {
        alert('Item is out of stock')
    }
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0)
    document.getElementById('cart-count').textContent = cartCount
}
