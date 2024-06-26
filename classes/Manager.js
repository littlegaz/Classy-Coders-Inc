const { Employees } = require("./Employees");

class Manager extends Employees{
    #employeesManaged
    constructor(name, position, salary, department, employeesManaged = []){
        super(name, position, salary);
        this.department = department
        this.#employeesManaged = employeesManaged
    }

    getEmployeesManaged(){
        return this.#employeesManaged
    }

    setEmployeesManaged(employee){
        if (employee === undefined){throw new Error("You must include an employee")}
        else if (employee === null){throw new Error("You must include an employee")}
        else this.#employeesManaged.push(employee)
    }
    
}

module.exports = {
    Manager,
}