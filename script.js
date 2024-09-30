function addToCart(event) {
    alert("Item foi adicionado ao carrinho");

    const card = event.target.closest('.cartoes');
    const productName = card.querySelector('.card-name').textContent;
    const productPrice = parseFloat(card.getAttribute('data-price'));
    const productImage = card.querySelector('.image img').src;

    const productData = {
        name: productName,
        price: productPrice,
        image: productImage
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.push(productData);

    localStorage.setItem('cart', JSON.stringify(cart));

    window.location.href = 'compras.html';
}

function loadCartItems() {
    let cart = localStorage.getItem('cart');
    if (cart) {
        cart = JSON.parse(cart);
        
        const cartItemsContainer = document.querySelector('.cart-items');
        cartItemsContainer.innerHTML = ''; 
        let totalPrice = 0;

        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="item-image">
                <p>${item.name}</p>
                <p class="item-price">R$${item.price.toFixed(2)}</p>
                <button class="remove-btn" data-index="${index}">Remover</button>
            `;
            cartItemsContainer.appendChild(cartItem);

            totalPrice += item.price;
        });

        document.getElementById('total-price').textContent = totalPrice.toFixed(2);

        document.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', removeItem);
        });
    } else {
        document.querySelector('.cart-items').innerHTML = '<p>O carrinho está vazio.</p>';
    }
}

function removeItem(event) {
    const index = event.target.getAttribute('data-index');
    let cart = JSON.parse(localStorage.getItem('cart'));

    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));

    loadCartItems();
}

window.onload = loadCartItems;

document.querySelector('.checkout-btn').addEventListener('click', () => {
    alert('Compra finalizada com sucesso!');
    localStorage.removeItem('cart');  
    window.location.href = 'Petshop.html'; 
});
