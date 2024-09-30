function addToCart(event) {
    const button = event.target;
    const product = button.closest(".cartoes");
    
    const name = product.dataset.name;
    const price = parseFloat(product.dataset.price);

    const productObj = { name, price };
    
    let cart = localStorage.getItem('cart');
    if (cart) {
        cart = JSON.parse(cart);
    } else {
        cart = []; 
    }
    
    cart.push(productObj);
    
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${name} foi adicionado ao carrinho.`);
}


