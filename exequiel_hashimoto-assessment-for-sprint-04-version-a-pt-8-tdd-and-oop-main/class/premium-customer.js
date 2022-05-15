const Customer = require('./customer')

class PremiumCustomer extends Customer {
    constructor (name, money = 5) {
        super(name, money)

        
    }
}


module.exports = PremiumCustomer;
