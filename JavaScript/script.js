function loadCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.querySelector('.cart-items');
    cartContainer.innerHTML = '';

    let totalPrice = 0;

    cartItems.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}".">
            <p>${item.name} - ${item.price}</p>
            <button onclick="changeQuantity(${index}, -1)">-</button>
            <span class="quantity">${item.quantity}</span>
            <button onclick="changeQuantity(${index}, 1)">+</button>
            <button onclick="removeFromCart(${index})">Remover</button>
        `;
        cartContainer.appendChild(itemDiv);

        const priceValue = parseFloat(item.price.replace('R$', '').replace(',', '.')) * item.quantity;
        totalPrice += priceValue;
    });

    document.getElementById('total-price').innerText = totalPrice.toFixed(2).replace('.', ',');
}

function changeQuantity(index, change) {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems[index].quantity += change;

    if (cartItems[index].quantity < 1) {
        cartItems[index].quantity = 1;
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
    loadCart();
}

function removeFromCart(index) {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    loadCart();
}

window.onload = loadCart;
