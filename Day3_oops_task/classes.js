class BankAccount{
    costomerName;
    accountNumber;
    blance;

    constructor(costomerName, blance = 0){
        this.costomerName = costomerName;
        this.accountNumber = Date.now();
        this.blance = blance;

    }

    deposit(amount){
        this.blance += amount
    }

    withdrow(amount){
        this.blance -= amount
    }
}
const sandhyaAccount = new BankAccount("sandhya", 5000);
const sarikaAccount = new BankAccount("sarika");
sandhyaAccount.deposit(3000)
sarikaAccount.deposit(10000)
sarikaAccount.withdrow(3000)
// console.log(sandhyaAccount);
console.log(sarikaAccount);


