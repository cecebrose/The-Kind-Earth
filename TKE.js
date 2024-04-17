/* Shopping */
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

/* Time Clock */
function updateClock() {
    const gmtTime = new Date().toUTCString();
    const cetTime = new Date().toLocaleString('nl-NL', {timeZone: 'Europe/London'});
    const estTime = new Date().toLocaleString('nl-NL', {timeZone: 'America/New_York'});

    document.getElementById('gmt').innerHTML = gmtTime;
    document.getElementById('cet').innerHTML = cetTime;
    document.getElementById('est').innerHTML = estTime;
}

setInterval(updateClock, 1000);

/* Visitor Counter */
let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counter-minus');
let counterPlusElem = document.querySelector('.counter-plus');
let count = 0;
updateDisplay();

counterPlusElem.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

counterMinusElem.addEventListener("click",()=>{
    count--;
    updateDisplay();
});

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};