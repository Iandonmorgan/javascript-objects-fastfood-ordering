/*
Practice: Fast Food Ordering
You need to write code to represent the process of ordering food
at a fast food joint. Your restaurant is Bob's Burgers, and you
have some starter code below. The object will have two behaviors
that you must define.

The object should have a property named orders that is an array.
You will need to define this.

1. Define a function to represent the behavior of placing an order.
It should accept one argument named meal. This argument will be an
object. There is starter code provided.

2. Define a function to represent the behavior of getting all orders.

3. It should return the order property (hint: this).
You will need to define this.

3. Each meal object should have three properties: sandwichType, fries
(true or false), and drinkSize.
 */

 const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {
        this.orders.push(meal);
    },
    allOrders: function () {
        return this.orders;
    }
}

const chickenComboMeal = {
    sandwichType: "Chicken",
    fries: true,
    drinkSize: "Large"
}

const steakSandwich = {
    sandwichType: "Steak",
    fries: false,
    drinkSize: "Small"
}

// Place an order
restaurant.placeOrder(chickenComboMeal);
restaurant.placeOrder(steakSandwich);
restaurant.placeOrder(chickenComboMeal);

// Invoke the function to return the list of all orders
restaurant.allOrders();

// Output all orders to the console using console.table()
console.table(restaurant.allOrders());