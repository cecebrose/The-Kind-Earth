let cart = [];

function addToCart(productId) {
    let product = document.getElementById(productId);
    let productName = product.querySelector('h2').textContent;
    let productPrice = parseFloat(product.querySelector('p').textContent.split('$')[1]);
    
    let item = {
        name: productName,
        price: productPrice
    };

    cart.push(item);
    alert(`"${productName}" added to cart!`);
}
