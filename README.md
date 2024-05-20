# JavaScript E-commerce Cart CRUD Assignment
This assignment involves building a basic e-commerce shopping cart application using Javascript and arrays to manage product data. It will implement CRUD (Create, Read, Update, Delete) operations for the cart.

## Objective:
Develop a JavaScript application that simulates a shopping cart for an e-commerce website. The app should allow users to:
- Browse products: Define an array of products with details like name, price, and quantity available.
- Add items to cart: Users can add products to their shopping cart, specifying the desired quantity.
- Update cart quantities: Users can adjust the quantity of a specific product in the cart.
- Remove items from cart: Users can remove unwanted products from the cart.
- View cart summary: Display the list of items in the cart along with their quantity, price, and subtotal.

## Requirements:
### Use two separate arrays:
- products: An array to store product information with properties like id, name, price, and 
quantity (available stock).
- cart: An array to store cart items with properties like productId (referencing the product in 
products), quantity (desired quantity in the cart).

### Implement functions to:
- Add a product to the cart, checking if the desired quantity is available in stock.
- Update the quantity of a product already in the cart.
- Remove a product from the cart.
- Display the cart contents, including product details, quantity, and subtotal for each item.
- Calculate the total cart amount by summing up the subtotals of all items.
- Implement a user interface (UI) using HTML and CSS to add Products, display products and the shopping cart.
- Add functionalities like displaying product images, applying discounts, and handling checkout processe (simulated).

Consider using local storage to persist cart data between sessions(optional).