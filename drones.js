document.addEventListener('DOMContentLoaded', function () {
  // Select the container where you want to display the data
  const productContainer = document.getElementById('product-container');

  // Fetch JSON data
  fetch('amazon data.json')
    .then((response) => response.json())
    .then((data) => {
      data.forEach((product) => {
        // Create HTML elements to display each product
        const productDiv = document.createElement('div');
        productDiv.className = 'product-box';
        productDiv.innerHTML = `
          <img src="${product.link}" alt="Product Image" class="product-image">
          <h4 class="product-info">${product.title}</h4>
          <h4 class="product-info price">Price: Rs.${product.price}</h4>
          <h4 class="product-info">Rating: ${product.rating}</h4>
          <a href="${product['Buy Now']}" target="_blank" class="buy-button">Buy Now</a>
        `;

        // Append the product to the container
        productContainer.appendChild(productDiv);
      });
    })
    .catch((error) => {
      console.error('Error loading JSON data:', error);
    });
});
