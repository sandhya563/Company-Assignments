// Class for Person
class Person {
  constructor(name) {
    this.name = name;
  }
}
// Class for MP
class MP extends Person {
  name;
  spending_limit;
  driverName;
  constituency;

  constructor(name, driverName, constituency, spending_limit) {
    super(name);
    this.spending_limit = spending_limit;
    this.driverName = driverName;
    this.constituency = constituency;
  }
  getConstituency() {
    console.log("MP Constituency name:", this.constituency);
  }
  getDriver() {
    console.log("MP Driver's name:", this.driverName);
  }
}
// Class for PM
class PM extends MP {
  constructor(name, driverName, constituency, spending_limit) {
    super(name, driverName, constituency, spending_limit);
  }
}

// Class for Minister
class Minister extends PM {
  constructor(name, driverName, constituency, spending_limit) {
    super(name, driverName, constituency, spending_limit);
    this.can_arrest = false;
  }
  check() {
    if (this.spending_limit > 100000) { // 1 lakh for MP
      console.log("MP exceeded spending limit");
      this.can_arrest = true;
      console.log("Can be arrested by comissioner?:");
    } else if (this.spending_limit > 1000000) { // 10 lakh for PM
      console.log("PM exceeded spending limit");
      this.can_arrest = true;
      console.log("Can be arrested by comissioner?:");
    } else if (this.spending_limit > 10000000) { // 1 Crore fro minister
      console.log("minister exceeded spending limit");
      this.can_arrest = true;
      console.log("Can be arrested by comissioner?");
    } else {
      console.log("Nobody exceeded spending limit");
      console.log("MP spending:", this.spending_limit);
      console.log("PM spending:", this.spending_limit);
      console.log("Minister spending:", this.spending_limit);
    }
  }
}

const personObj = new Person("Sandhya");
console.log(personObj);

const mpObj = new MP("sonu", "andy", "Agra", 100000);
mpObj.getConstituency();
mpObj.getDriver();
// console.log(mpObj);

const pmObj = new PM("sarika", "tom", "Mainpuri", 1000000);
// console.log(pmObj);

const ministerObj = new Minister("Rahul", "sanju", "Delhi", 10000000);
ministerObj.check();
// console.log(ministerObj);
