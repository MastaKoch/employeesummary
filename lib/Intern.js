// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

class Intern{

constructor(name, id, email, school) {
    super(name, id, email);

    this.school=school;
}

getSchool(){
    return this.school;
};

getRole(){
    return "Intern";
};

};

// exports Intern extended class
module.exports=Intern;