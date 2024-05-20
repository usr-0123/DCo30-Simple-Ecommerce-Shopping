document.addEventListener('DOMContentLoaded', () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    const cartItemsContainer = document.getElementById('cart-items');
    let totalPrice = 0;

    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${item.name} - Ksh.${item.price} x ${item.quantity}
            <div class="cart-item-buttons">
                <button class="increase" onclick="updateCartItem('${item.name}', 1)">+</button>
                <button class="decrease" onclick="updateCartItem('${item.name}', -1)">-</button>
                <button class="delete" onclick="removeCartItem('${item.name}')">x</button>
            </div>
        `;
        cartItemsContainer.appendChild(listItem);
        totalPrice += item.price * item.quantity;
    });

    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
});

// Functions
function updateCartItem(itemName, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let items = JSON.parse(localStorage.getItem('items'));
    const cartItemIndex = cart.findIndex(item => item.name === itemName);
    const item = items.find(item => item.name === itemName);

    if (cartItemIndex > -1 && item) {
        cart[cartItemIndex].quantity += change;
        item.available -= change;

        if (cart[cartItemIndex].quantity <= 0) {
            cart.splice(cartItemIndex, 1);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('items', JSON.stringify(items));
        location.reload();
    }
}

function removeCartItem(itemName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let items = JSON.parse(localStorage.getItem('items'));
    const item = items.find(item => item.name === itemName);

    cart = cart.filter(cartItem => {
        if (cartItem.name === itemName) {
            item.available += cartItem.quantity;
            return false;
        }
        return true;
    });

    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('items', JSON.stringify(items));
    location.reload();
}
