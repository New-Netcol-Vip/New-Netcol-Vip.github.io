document.addEventListener('DOMContentLoaded', function () {
    const priceButtons = document.querySelectorAll('.price-btn');
    const paymentInfo = document.getElementById('payment-info');
    const totalPriceEl = document.getElementById('total-price');
    const whatsappLink = document.getElementById('whatsapp-link');

    priceButtons.forEach(button => {
        button.addEventListener('click', () => {
            const price = button.getAttribute('data-price');
            const plan = button.getAttribute('data-plan');
            totalPriceEl.textContent = price;
            paymentInfo.classList.remove('hidden');

            // Reemplaza "57XXXXXXXXXX" por tu número de WhatsApp real
            const whatsappNumber = '57XXXXXXXXXX'; // Aquí va el número de WhatsApp con el formato internacional

            // Generar el enlace de WhatsApp con la información del producto
            const message = `Hola, quiero comprar el cheat de Free Fire para ${plan} con un total de $${price}.`;
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
            whatsappLink.href = whatsappUrl;
        });
    });
});
