// Define the menu items
const menuItems = [
	{
		id: 1,
		name: "Chicken",
		image: "images/Chicken Pizza.jpg",
		description: "Classic tomato sauce, mozzarella cheese, and fresh basil.",
		price: 10.99,
	},
	{
		id: 2,
		name: "Paneer",
		image: "images/paneer-pizza.jpg",
		description: "Tomato sauce, mozzarella cheese, and spicy pepperoni.",
		price: 12.99,
	},
	

// Define the cart array
let cart = [];

// Select the cart button element
const cartButton = document.querySelector(".cart-button");

// Select the cart items container element
const cartItems = document.querySelector(".cart-items");

// Select the menu items container element
const menuItemsContainer = document.querySelector(".menu .container");

// Add event listener to the cart button element
cartButton.addEventListener("click", toggleCart);

// Populate the menu items container
populateMenuItems();

// Function to populate the menu items container
function populateMenuItems() {
	// Loop through the menu items array
	menuItems.forEach((menuItem) => {
		// Create the menu item element
		const menuItemElement = document.createElement("div");
		menuItemElement.classList.add("item");

		// Set the HTML content for the menu item element
		menuItemElement.innerHTML = `
			<img src="${menuItem.image}" alt="${menuItem.name}">
			<h3>${menuItem.name}</h3>
			<p>${menuItem.description}</p>
			<span class="price">$${menuItem.price.toFixed(2)}</span>
			<div class="customize">
				<h4>Customize your pizza:</h4>
				<label for="size-${menuItem.id}">Size:</label>
				<select id="size-${menuItem.id}">
					<option value="small">Small ($${(menuItem.price * 0.8).toFixed(2)})</option>
					<option value="medium" selected>Medium ($${menuItem.price.toFixed(2)})</option>
					<option value="large">$${(menuItem.price * 1.2).toFixed(2)} (Large)</option>
				</select>
				<label for="toppings-${menuItem.id}">Toppings:</label>
				<div class="toppings" id="toppings-${menuItem.id}">
					<label><input type="checkbox" name="toppings-${menuItem.id}" value="mushrooms"> Mushrooms</label>
					<label><input type="checkbox" name="toppings-${menuItem.id}" value="onions"> Onions</label>
					<label><input type="checkbox" name="toppings-${menuItem.id}" value="bell-peppers"> Bell Peppers</label>
					<label><input type="checkbox" name="toppings-${menuItem.id}" value="olives"> Olives</label>
				</div>
				<button class="add-to-cart" data-id="${menuItem.id}">Add
