// TODO: Write code to define and export the Employee class
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        console.log(Employee.name)
        return Employee.name;
    }
}
const emp = new Employee('kyle', 1, 'kyle@g.com');
emp.getRole()
module.exports = Employee;