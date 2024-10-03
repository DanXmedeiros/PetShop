let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(event) {
    const productCard = event.target.closest('.cartoes');
    const productName = productCard.querySelector('.card-name').innerText;
    const productPrice = productCard.querySelector('.preco').innerText;
    const productImage = productCard.querySelector('.image img').src;

    const product = {
        name: productName,
        price: productPrice,
        image: productImage,
        quantity: 1
    };

    const existingProductIndex = cart.findIndex(item => item.name === productName);
    if (existingProductIndex >= 0) {
        cart[existingProductIndex].quantity += 1;
    } else {
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} foi adicionado ao carrinho!`);
}