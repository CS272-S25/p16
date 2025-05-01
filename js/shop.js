document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("product-list");
    fetch('https://fakestoreapi.com/products?limit=6')
      .then(res => res.json())
      .then(products => {
        products.forEach(product => {
          const col = document.createElement("div");
          col.className = "col-md-4";
          col.innerHTML = `
            <div class="card mb-4">
              <img src="${product.image}" class="card-img-top" alt="${product.title}">
              <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">$${product.price}</p>
                <button class="btn btn-success add-to-cart" data-name="${product.title}">Add to Cart</button>
              </div>
            </div>
          `;
          container.appendChild(col);
        });
  
        document.querySelectorAll(".add-to-cart").forEach(btn => {
          btn.addEventListener("click", () => {
            const name = btn.getAttribute("data-name");
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            cart.push(name);
            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${name} added to cart!`);
          });
        });
      });
  });
  