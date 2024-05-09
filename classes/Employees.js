class Employees {
    #salary
    #isHired
    constructor(name, title, salary, isHired = true){
        this.name = name
        this.title = title
        this.#salary = salary
        this.#isHired = isHired
    }

    getSalary(){
        return this.#salary
    }

    setSalary(amount){
        this.#salary = amount
    }

    getStatus(){
        return this.#isHired
    }

    setstatus(command){
        if (command === "hire"){this.#isHired = true}
        else (command === "fire");this.#isHired = false
    }



    
}

module.exports = {
    Employees,
}