// Open Order Modal
function openOrderModal(product) {
    const modal = document.getElementById('order-modal');
    const productName = document.getElementById('product-name');
    const productPrice = document.getElementById('product-price');
    
    // Set dynamic content based on the clicked product
    if (product === 'Classic-Choco') {
        productName.textContent = 'Classic-Choco Kerudung';
        productPrice.textContent = 'Price: £15.00';
    } else if (product === 'Strawberry-WhiteChoco') {
        productName.textContent = 'Strawberry-WhiteChoco Kerudung';
        productPrice.textContent = 'Price: £20.00';
    } else if (product === 'Marshmallow-Choco') {
        productName.textContent = 'Marshmallow-Choco Kerudung';
        productPrice.textContent = 'Price: £20.00';
    }

    modal.style.display = 'flex';
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('order-modal');
    modal.style.display = 'none';
}

// Handle WhatsApp Order
document.getElementById('whatsapp-order').addEventListener('click', function() {
    const productName = document.getElementById('product-name').textContent;
    const productPrice = document.getElementById('product-price').textContent;
    
    // WhatsApp link (just an example, replace with actual number)
    const whatsappLink = `https://wa.me/1234567890?text=I%20would%20like%20to%20order%20${productName}%20for%20${productPrice}`;
    window.open(whatsappLink, '_blank');
});
