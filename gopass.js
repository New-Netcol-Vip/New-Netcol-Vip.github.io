// Mostrar/Ocultar requisitos
document.getElementById('requisitos-btn').addEventListener('click', function() {
    const requisitosInfo = document.getElementById('requisitos-info');
    requisitosInfo.style.display = requisitosInfo.style.display === 'block' ? 'none' : 'block';
});

// Mostrar/Ocultar opciones de recarga
document.getElementById('toggle-btn').addEventListener('click', function() {
    const options = document.getElementById('recharge-options');
    options.style.display = options.style.display === 'block' ? 'none' : 'block';
});

document.getElementById('garantia-btn').addEventListener('click', function() {
    var garantiaInfo = document.getElementById('garantia-info');
    garantiaInfo.style.display = garantiaInfo.style.display === 'none' ? 'block' : 'none';
});

// Mostrar el QR en la misma sección de compra
document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', function() {
        const paymentInfo = this.nextElementSibling;
        paymentInfo.style.display = 'block'; // Mostrar el QR en la misma sección
    });
});

// Redirigir a WhatsApp
document.querySelectorAll('.validate-btn').forEach(button => {
    button.addEventListener('click', function() {
        const selectedOption = this.closest('.recharge-option');
        const totalPrice = selectedOption.dataset.price;
        const whatsappURL = `https://wa.me/573127585418?text=Hola,%20he%20realizado%20una%20recarga%20de%20${totalPrice}%20COP%20en%20mi%20cuenta%20Gopass.%20Adjunto%20la%20imagen%20del%20pago%20para%20validar.`;
        window.open(whatsappURL, '_blank');
    });
});
