document.getElementById('quantity').addEventListener('input', function() {
    const quantity = parseInt(this.value);
    if (!isNaN(quantity) && quantity > 0) {
        const totalPrice = quantity * 20000; // Precio por live
        document.getElementById('total-price').textContent = totalPrice.toLocaleString();
    } else {
        document.getElementById('total-price').textContent = '20,000'; // Valor por defecto
    }
});

document.getElementById('buy-btn').addEventListener('click', function() {
    document.getElementById('payment-info').style.display = 'block';
});

document.getElementById('validate-btn').addEventListener('click', function() {
    const quantity = document.getElementById('quantity').value;
    const totalPrice = quantity * 20000; // Precio por live
    const whatsappURL = `https://wa.me/573127585418?text=Hola,%20he%20comprado%20${quantity}%20lives%20por%20un%20total%20de%20${totalPrice.toLocaleString()}%20COP.%20Adjunto%20la%20imagen%20del%20pago%20para%20validar.`;
    window.open(whatsappURL, '_blank');
});
