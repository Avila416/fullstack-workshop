const cart = createShoppingCart();
        function createShoppingCart() {

            let items = [];
            let discount = 0;

            return {

                addItem: function (item) {
                    let found = false;

                    for (let i = 0; i < items.length; i++) {
                    if (items[i].id === item.id) {
                        items[i].quantity += item.quantity; //if item exists already then update quantity
                        found = true;
                    }
                }

                if (found === false) { // if it doesnt exist add item.
                    items.push(item);
                }
        },

        getItems: function () {
            return items;
        },

        updateQuantity: function (id, qty) {
            for (let i = 0; i < items.length; i++) {
                if (items[i].id === id) {
                    items[i].quantity = qty;
                }
            }
        },

        removeItem: function (id) {
            let newItems = [];

            for (let i = 0; i < items.length; i++) {
                if (items[i].id !== id) {
                    newItems.push(items[i]);
                }
            }

            items = newItems;
        },

        getTotal: function () {
            let total = 0;

            for (let i = 0; i < items.length; i++) {
                total += items[i].price * items[i].quantity;
            }

            if (discount > 0) {
                total = total - (total * discount / 100);
            }

            return Number(total.toFixed(2));
        },

        getItemCount: function () {
            let count = 0;

            for (let i = 0; i < items.length; i++) {
                count += items[i].quantity;
            }

            return count;
        },

        isEmpty: function () {
            return items.length === 0;
        },

        applyDiscount: function (code, percent) {
            if (code === "SAVE10") {
                discount = percent;
            }
        },

        clear: function () {
            items = [];
            discount = 0;
        }
    };
}

cart.addItem({ id: 1, name: 'Laptop', price: 999, quantity: 1 });
cart.addItem({ id: 2, name: 'Mouse', price: 29, quantity: 2 });
cart.addItem({ id: 1, name: 'Laptop', price: 999, quantity: 1 }); // Should increase quantity

console.log(cart.getItems());
// [{ id: 1, name: 'Laptop', price: 999, quantity: 2 }, { id: 2, name: 'Mouse', price: 29, quantity: 2 }]

cart.updateQuantity(1, 3);  // Set laptop quantity to 3
cart.removeItem(2);         // Remove mouse

console.log(cart.getTotal());        // 2997
console.log(cart.getItemCount());    // 3
console.log(cart.isEmpty());         // false

cart.applyDiscount('SAVE10', 10);    // 10% discount
console.log(cart.getTotal());        // 2697.30

cart.clear();
console.log(cart.isEmpty());         // true

