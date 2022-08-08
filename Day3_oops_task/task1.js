// Class for Person
class Person {
  constructor(name) {
    this.name = name;
  }
}

class MP extends Person {
  constructor(name, driverName, constituency, spending_limit,designation) {
    super(name);
    this.spending_limit = spending_limit;
    this.driverName = driverName;
    this.constituency = constituency;
    this.designation = designation
  }

  getConstituency() {
    console.log("MP Constituency name:", this.constituency);
  }

  getDriver() {
    console.log("MP Driver's name:", this.driverName);
  }

  check(obj, amount) {
    if (obj.spending_limit >= amount && obj.designation === "MP") {
      this.can_arrest = false;
      console.log("Can't be arrest MP");
    } else if(obj.spending_limit >= amount && obj.designation === "PM"){
        this.can_arrest = false;
      console.log("Can't be arrest PM");
    }else if(obj.spending_limit >= amount && obj.designation === "Minister"){
        this.can_arrest = false;
        console.log("Can't be arrest Minister");
    }else{
        this.can_arrest = true;
        console.log("Can be arrested by comissioner");
    }
  }
}

// Class for PM
class PM extends MP {
  constructor(name, driverName, constituency, spending_limit, designation) {
    super(name, driverName, constituency,spending_limit,designation);
    this.spending_limit = spending_limit;
    this.designation = designation;
  }
}


// Class for Minister
class Minister extends PM {
  constructor(name, driverName, constituency, spending_limit,designation) {
    super(name, driverName, constituency, spending_limit,designation);
    this.can_arrest = false;
    this.designation = designation;

  }
}

const personObj = new Person("Sandhya");

const mpObj = new MP("Mulayam singh", "andy", "Agra", 100000, "MP");
//   console.log(mpObj);

const pmObj = new PM("Modi", "tom", "Mainpuri", 1000000, "PM");
  console.log(pmObj);

const ministerObj = new Minister("Keshav Prasad Maurya", "sanju", "Delhi", 10000000, "Minister");
mpObj.check(pmObj, 1000000);
//   console.log(ministerObj);

