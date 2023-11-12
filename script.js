function incrementQuantity(itemId) {
  var quantityInput = document.getElementById("quantity-" + itemId);
  var amountSpan = document.getElementById("amount-" + itemId);
  var quantity = parseInt(quantityInput.value);
  quantityInput.value = quantity + 1;
  amountSpan.textContent = (quantity + 1) * 10; // Change 10 to the item's price
}

function decrementQuantity(itemId) {
  var quantityInput = document.getElementById("quantity-" + itemId);
  var amountSpan = document.getElementById("amount-" + itemId);
  var quantity = parseInt(quantityInput.value);
  if (quantity > 0) {
    quantityInput.value = quantity - 1;
    amountSpan.textContent = (quantity - 1) * 10; // Change 10 to the item's price
  }
}
