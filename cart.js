function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const li = document.createElement("li");
    li.classList.add("cart-item-box");
    li.innerHTML = `
      <span>${item.name} - ₹${item.price}</span>
      <button onclick="removeItem(${index})">❌</button>
    `;
    cartItems.appendChild(li);
  });

  cartTotal.textContent = total;
  cartCount.textContent = cart.length;
}
