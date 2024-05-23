// Create some products
const product1 = new Product(1, "Shirt", 20);
const product2 = new Product(2, "Pants", 30);
const product3 = new Product(3, "Shoes", 50);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(new CartItem(product1, 2));
cart.addItem(new CartItem(product2, 1));
cart.addItem(new CartItem(product3, 1));

// Display the cart
console.log("Items in the cart:");
cart.displayCartItems();

// Get the total number of items in the cart
console.log("Total items in the cart:", cart.getTotalItems());

// Remove an item from the cart
cart.removeItem(2);
console.log("After removing an item:");
cart.displayCartItems();
