/*
There is a sale in a supermarket, there will be a discount every n customer.
There are some products in the supermarket where the id of the i-th product is products[i] and the price per unit of this 
product is prices[i].
The system will count the number of customers and when the n-th customer arrive he/she will have a discount on the bill. 
(i.e if the cost is x the new cost is x - (discount * x) / 100). Then the system will start counting customers again.
The customer orders a certain amount of each product where product[i] is the id of the i-th product the customer ordered 
and amount[i] is the number of units the customer ordered of that product.

Implement the Cashier class:

Cashier(int n, int discount, int[] products, int[] prices) Initializes the object with n, the discount, the products and 
their prices.
double getBill(int[] product, int[] amount) returns the value of the bill and apply the discount if needed. Answers within 
10^-5 of the actual value will be accepted as correct.
*/

// first pass solution
class Cashier {
    constructor(n, discount, products, prices) {
        this.n = n;
        this.discount = discount;
        this.products = products;
        this.prices = prices;
        this.customer = 0;
    }
    getBill(product, amount) {
        this.customer++;
        let total = 0;

        for (let i = 0; i < product.length; i++) {
            let j = this.products.indexOf(product[i]);
            total += amount[i] * this.prices[j];
        }
        
        if (this.customer === this.n) {
            total -= (this.discount * total) / 100;
            this.customer = 0;
        }
        return total;
    }
}

// second pass solution
class Cashier {
    constructor(n, discount, products, prices) {
        this.n = n;
        this.discount = discount;
        this.products = products;
        this.prices = prices;
        this.customer = 0;
        this.map = this.createMap();
    }
    createMap() {
        let dict = {};
        for (let i = 0; i < this.products.length; i++) {
            dict[this.products[i]] = this.prices[i];
        }
        return dict;
    }
    getBill(product, amount) {
        this.customer++;
        let total = 0;

        for (let i = 0; i < product.length; i++) {
            total += amount[i] * this.map[product[i]];
        }
        
        if (this.customer === this.n) {
            total -= (this.discount * total) / 100;
            this.customer = 0;
        }
        return total;
    }
}

 

 

