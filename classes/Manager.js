const { Employees } = require("./Employees");

class Manager extends Employees{
    #employeesManaged
    constructor(department, employeesManaged = []){
        this.department = department
        this.#employeesManaged = employeesManaged
    }

    getEmployeesManaged(){
        return this.#employeesManaged
    }

    setEmployeesManaged(employee){
        if (employee === undefined){throw new Error("You must include and employee")};
        else if (employee === null){throw new Error("You must include and employee")};
        else this.#employeesManaged.push(employee)
    }
    
}

module.exports = {
    Manager,
}