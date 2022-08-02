function employee(name,age, basesalary){
    this.name = name;
    this.age = age;
    this.basesalary = basesalary;
    let monthlyBonus = 3000;

    let calculateFinalSalary = function(){
        let finalSalary = basesalary + monthlyBonus;
        console.log(`final salary  is ${finalSalary}`);
    }
    this.employeeDetails = function(){
        console.log(`Name: ${this.name}  Age ${this.age}`);
        calculateFinalSalary()
    }

} 
const data = new employee("sandhya", 20, 50000);
data.employeeDetails();
// data.calculateFinalSalary = 7000;
// console.log(data);