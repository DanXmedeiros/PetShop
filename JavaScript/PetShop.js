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

// Função para mostrar o alerta
function showAlert(message) {
    const alertDiv = document.createElement('div');
    alertDiv.innerHTML = message;
    alertDiv.style.position = 'fixed';
    alertDiv.style.top = '20px';
    alertDiv.style.right = '20px';
    alertDiv.style.padding = '15px';
    alertDiv.style.backgroundColor = '#ffcc00';
    alertDiv.style.color = '#333';
    alertDiv.style.borderRadius = '5px';
    alertDiv.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    alertDiv.style.zIndex = '1000';
    alertDiv.style.transition = 'opacity 0.5s ease';

    document.body.appendChild(alertDiv);

    // Remover o alerta após 3 segundos
    setTimeout(() => {
        alertDiv.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(alertDiv);
        }, 500); // Tempo para a animação de desaparecimento
    }, 3000);
}

// Alerta personalizado
const alertMessage = `
    🐾 Uhuul! ${productName} foi adicionado ao seu carrinho! 🛒
    Prepare-se para deixar seu pet ainda mais feliz!
`;

showAlert(alertMessage);


}
