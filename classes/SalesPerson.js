const { Employees } = require("./Employees");

class SalesPerson extends Employees{
    #totalSales = 0
    constructor(name, position, salary, clients = [], totalSales){
        super(name, position, salary);
        this.clients = clients
        this.#totalSales = totalSales
    }

    getSalesNumber(){
        return this.#totalSales
    }

    makeSale(amount){
        return this.#totalSales += amount
    }

   
}

module.exports = {
    SalesPerson,
}