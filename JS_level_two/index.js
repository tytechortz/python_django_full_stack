// var employee = {
//   name: "John Smith",
//   job: "Programmer",
//   age: 31,
//   nameLength: function(){
//     console.log(this.name.length)
//   }
// }

// employee.nameLength()

// var employee = {
//   name: "John Smith",
//   job: "Programmer",
//   age: 31,
//   employeeAlert: function(){
//     alert('Name is: '+this.name+ ', job is: '+this.job+ ', age is: '+this.age)
//   }
// };

// employee.employeeAlert()

var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  lastName: function(){
    console.log(this.name.split(" ")[1])
  }
};

employee.lastName()