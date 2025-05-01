document.addEventListener("DOMContentLoaded", () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const list = document.getElementById("cart-items");
    cartItems.forEach(item => {
      const li = document.createElement("li");
      li.className = "list-group-item";
      li.textContent= item;
      list.appendChild(li);
    });
  
    document.getElementById("checkout-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const address = document.getElementById("address").value.trim();
      if (name &&address) {
        alert(`Thank you for your order, ${name}! Your items will be shipped to ${address}.`);
        localStorage.removeItem("cart");
        list.innerHTML = "";
      }
    });
  });
  