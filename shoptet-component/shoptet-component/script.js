document.addEventListener('DOMContentLoaded', function() {
  const products = document.querySelectorAll('.product-card');

  products.forEach(product => {
    const createdAt = new Date(product.dataset.createdAt);
    const price = parseFloat(product.dataset.price);

    const now = new Date();
    const diffDays = (now - createdAt) / (1000 * 60 * 60 * 24);

    // Novinka badge – zobraziť iba ak produkt je < 30 dní
    if (diffDays <= 30) {
      product.querySelector('.badge-new').style.display = 'block';
    }

    // Doprava zadarmo – zobraziť iba ak cena < 50 €
    if (price < 50) {
      product.querySelector('.free-shipping').style.display = 'block';
    }
  });
});
