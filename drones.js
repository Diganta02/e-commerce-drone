// drones.js
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('productContainer');

  // Fetch product data from the backend
  fetch('/api/drones')
    .then((response) => response.json())
    .then((data) => {
      let html = '';

      // Loop through the product data and generate HTML for each product
      data.forEach((product, index) => {
        html += `
          <div class="product-box">
            <img src="${product.image}" alt="Product Image">
            <h3>${product.title}</h3>
            <p>Price: $${product.price}</p>
            <p>Rating: ${product.rating}</p>
            <a href="${product.buy_now_link}" target="_blank">Buy Now</a>
          </div>
        `;
      });

      container.innerHTML = html;
    })
    .catch((error) => {
      console.error('Error fetching product data:', error);
    });
});
