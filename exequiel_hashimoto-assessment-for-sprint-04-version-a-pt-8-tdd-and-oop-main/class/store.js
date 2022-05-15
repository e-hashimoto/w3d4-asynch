const StoreItem = require('./store-item')
const PremiumCustomer = require('./premium-customer')
const Customer = require('./customer');

class Store {
    constructor (name, price, items = []) {
        this.name = name;
        this.price = price;
        this.items = items;
        this.customer = Customer;
        this.premiumCustomer = PremiumCustomer;
    }

    isValid () {
        if (!isValid) {
            throw new Error("Invalid Item")
        }

    }

    addItem (item) {
        if(!item.isValid) {
            throw new Error("Invalid Item: Failed to add to List")
        }
        this.items.push(item)
    }



    getStoreItemPrices () {
        if (PremiumCustomer) {
            this.price -= 1;
        }

        for (let item of items) {
            item = this.items[i];
            price = this.price;
            let cost = 0;
            cost += this.price;
        }

        return this.items;
    }



}

// let expectedReturn = ["Mug: $3", "Chair: $10", "Table: $20"]
// console.log(this.items);




module.exports = Store;
