const { Employees } = require("./Employees");

class SalesPerson extends Employees{
    #totalSales = 0
    constructor(clients = [], totalSales){
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