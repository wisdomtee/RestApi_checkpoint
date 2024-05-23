class ShoppingCart {
    constructor() {
        this.items = [];
    }

    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    addItem(cartItem) {
        this.items.push(cartItem);
    }

    removeItem(id) {
        const index = this.items.findIndex(item => item.product.id === id);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }

    displayCartItems() {
        this.items.forEach(item => {
            console.log(`${item.product.name} - Quantity: ${item.quantity}`);
        });
    }
}
