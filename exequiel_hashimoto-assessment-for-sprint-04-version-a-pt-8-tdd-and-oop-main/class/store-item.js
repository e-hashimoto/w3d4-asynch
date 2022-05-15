class StoreItem {
    constructor (name, price) {
        this.name = name;
        this.price = price;
    }

    isValid () {
        if (this.price < 0 || !this.name) {
            return false
        }
        return true;
    }
}

// const chair = new StoreItem("Chair", 10);
// console.log(chair.name, chair.price);

module.exports = StoreItem;
