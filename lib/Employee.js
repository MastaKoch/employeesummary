// TODO: Write code to define and export the Employee class

class Employee{
    // takes in 3 parameters - name, id, email
    constructor(name, id, email) {
        this.name=name;
        this.id=id;
        this.email=email;
    }

   getName(){
       return this.name;
   }
   
   getId() {
       return this.id;
   }

   getEmail() {
        return this.email;
   }

   getRole() {
       return "Employee";
   }

};




// exports Employee class
module.exports = Employee;