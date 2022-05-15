class Customer {
    constructor (name, money = 0, purchases = []) {
        this.name = name;
        this.money = money;
        this.purchases = purchases
    }

    addFunds (num) {
        this.money += num;
    }

    withdrawFunds (num) {
        if(this.money < num) {
            throw new Error('Insufficient funds');
        };

        this.money -= num;
    }


}

module.exports = Customer;
