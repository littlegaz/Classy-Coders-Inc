const { Employees } = require("./Employees");

class SoftwareEngineer extends Employees{
    #programmingLanguages
    constructor(programmingLanguages = []){
        this.#programmingLanguages = programmingLanguages
    }

    getProgrammingLanguages(){
        return this.#programmingLanguages
    }

    setProgrammingLanguages(language){
        if (language === undefined){throw new Error("You must include a language")}
        else if (language === null){throw new Error("You must include a language")}
        else this.#programmingLanguages.push(language)
    }
    
}

module.exports = {
    SoftwareEngineer,
}