document.addEventListener("DOMContentLoaded", () => {
    fetch('https://fakestoreapi.com/products?limit=3') //random public spi
      .then(res => res.json())
      .then(products => {
        const container = document.getElementById("featured-products");
        products.forEach(product => {
          const col = document.createElement("div");
          col.className = "col-md-4";
          col.innerHTML = `
            <div class="card mb-4">
              <img src="${product.image}" class="card-img-top" alt="${product.title}">
              <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.description.substring(0, 100)}...</p>
                <a href="shop.html" class="btn btn-primary">Shop Now</a>
              </div>
            </div>
          `;
          container.appendChild(col);
        });
      })
      .catch(error => {
        console.error("Error loading products:", error);
      });
  });