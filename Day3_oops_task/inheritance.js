//  Class inheritance syntex------------------------------------------------------
class BankAccount {
  costomerName;
  accountNumber;
  blance;

  constructor(costomerName, blance = 0) {
    this.costomerName = costomerName;
    this.accountNumber = Date.now();
    this.blance = blance;
  }

  deposit(amount) {
    this.blance += amount;
  }

  withdrow(amount) {
    this.blance -= amount;
  }
}

class CurrentAccount extends BankAccount {
  transactionLimit = 5000;

  constructor(costomerName, blance = 0) {
    super(costomerName, blance);
  }
  takebusinessLoan = function (amount) {
    console.log(`takeing business loan ${amount}`);
  };
}
class SaveingAccount extends BankAccount {
  transactionLimit = 10000;

  constructor(costomerName, blance = 0) {
    super(costomerName, blance);
  }
  takePersonalLoan = function (amount) {
    console.log(`takeing personal loan ${amount}`);
  };
}
const sandhyaAccount = new SaveingAccount("sandhya", 500);
sandhyaAccount.deposit(500)
sandhyaAccount.withdrow(600)
sandhyaAccount.takePersonalLoan(30000)
console.log(sandhyaAccount);



// constructor  inheritance syntex------------------------------------------------------------------

// function BankAccount(costomerName, blance = 0){
//     this.costomerName = costomerName;
//     this.accountNumber = Date.now();
//     this.blance = blance

// }
// BankAccount.prototype.deposit = function (amount){
//     this.blance += amount
// }
// BankAccount.prototype.withdrow = function (amount){
//     this.blance -= amount
// }

// //  CURRENT ACCOUNT
// function CurrentAccount(costomerName, blance = 0){

//     // call parents function to child function
//     BankAccount.call(this,costomerName, blance)
//     this.transactionLimit = 5000;

// }
// // connect parent prototype to child prototype.
// CurrentAccount.prototype = Object.create(BankAccount.prototype);

// CurrentAccount.prototype.takebusinessLoan = function (amount){
//     console.log("takeing business loan" + amount);
// }

// // SAveing Acccount
// function SaveingAccount(costomerName, blance = 0){
//     BankAccount.call(this,costomerName, blance)
//     this.transactionLimit = 4000;

// }
// // connect parent prototype to child prototype.
// SaveingAccount.prototype = Object.create(BankAccount.prototype);

// SaveingAccount.prototype.takePersonLoan = function (amount){
//     console.log("takeing personal loan " + amount);
// }

// const sandhyaAccount = new SaveingAccount("sandhya", 500);
// sandhyaAccount.deposit(500)
// // sandhyaAccount.withdrow(6000)
// sandhyaAccount.takePersonalLoan(30000)
// console.log(sandhyaAccount);


