// Adicionando funcionalidade para mostrar um alerta quando alguém clica nas promoções
document.querySelectorAll('.promo-item').forEach(item => {
    item.addEventListener('click', () => {
        alert("Promoção clicada! Confira em nossa loja.");
    });
});
