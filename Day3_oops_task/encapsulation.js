class BankAccount {
  costomerName;
  accountNumber;
  #blance;

  constructor(costomerName, blance = 0) {
    this.costomerName = costomerName;
    this.accountNumber = Date.now();
    this.#blance = blance;
  }

  deposit(amount) {
    this.#blance += amount;
  }

  withdrow(amount) {
    this.#blance -= amount;
  }

  setBlance(amount) {
    if (isNaN(amount)) {
      throw new Error("invalid amount");
    }
    this.#blance = amount;
  }

  getBlance() {
    return this.#blance;
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
var sandhyaAccount = new CurrentAccount("sandhya", 3000);

const sarikaAccount = new SaveingAccount("sarika", 5000);

sandhyaAccount.setBlance = 6000
sarikaAccount.setBlance = 8000;
console.log(sandhyaAccount);
console.log(sarikaAccount);
