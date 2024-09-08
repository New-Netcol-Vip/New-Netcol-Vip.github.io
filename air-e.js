document.getElementById('bill-price').addEventListener('input', function() {
    const billPrice = parseFloat(this.value);
    if (!isNaN(billPrice) && billPrice > 0) {
        const discountedPrice = billPrice * 0.5; // 50% de descuento
        document.getElementById('discounted-price').textContent = discountedPrice.toFixed(2);
    } else {
        document.getElementById('discounted-price').textContent = '0';
    }
});

document.getElementById('pay-btn').addEventListener('click', function() {
    const billPrice = parseFloat(document.getElementById('bill-price').value);
    if (!isNaN(billPrice) && billPrice > 0) {
        document.getElementById('payment-info').style.display = 'block';
    } else {
        alert('Por favor, ingresa un precio válido para tu factura.');
    }
});

document.getElementById('validate-btn').addEventListener('click', function() {
    const billPrice = document.getElementById('bill-price').value;
    const whatsappURL = `https://wa.me/573127585418?text=Hola,%20ya%20realicé%20el%20pago%20de%20mi%20factura%20Air-e%20por%20el%20valor%20de%20${billPrice}%20COP.%20Adjunto%20la%20imagen%20para%20validar.`;
    window.open(whatsappURL, '_blank');
});
