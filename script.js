let cart = [];
let total = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  total += price;
  document.getElementById("cart-count").textContent = cart.length;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  cart.forEach((c, index) => {
    cartItems.innerHTML += `<p>${c.item} - ₦${c.price} <button onclick="removeItem(${index})">Remove</button></p>`;
  });
  document.getElementById("cart-total").textContent = total;
}

function removeItem(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  document.getElementById("cart-count").textContent = cart.length;
  updateCart();
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Thank you for your order! Your food will be delivered soon.");
    cart = [];
    total = 0;
    document.getElementById("cart-count").textContent = 0;
    updateCart();
  }
}

function scrollToMenu() {
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
}

// Contact form
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent! We’ll get back to you soon.");
  this.reset();
});
s