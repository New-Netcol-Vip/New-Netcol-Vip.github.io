function updatePrice(platform, pricePer1000) {
    const input = document.getElementById(`${platform.toLowerCase()}-followers`);
    const priceSpan = document.getElementById(`${platform.toLowerCase()}-price`);
    const quantity = input.value;
    const totalPrice = (quantity / 1000) * pricePer1000;
    priceSpan.textContent = totalPrice.toFixed(2);
}

function showPayment(platform, pricePer1000) {
    const input = document.getElementById(`${platform}-followers`);
    const total = (input.value / 1000) * pricePer1000;
    const paymentSection = document.getElementById(`${platform}-payment`);
    paymentSection.classList.remove('hidden');

    // Configurar el botón de validación para WhatsApp
    const validateBtn = document.getElementById(`${platform}-validate-btn`);
    validateBtn.onclick = () => {
        const whatsappMessage = `Hola, he realizado la compra de ${input.value} seguidores de ${platform} por un total de $${total.toFixed(2)} USD.`;
        const whatsappURL = `https://wa.me/573127585418?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappURL, '_blank');
    };
}
