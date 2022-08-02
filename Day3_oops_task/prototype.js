function BankAccount(costomerName, blance = 0){
    this.costomerName = costomerName;
    this.accountNumber = Date.now();
    this.blance = blance

    // this.deposit = function(amount){
    //     this.blance = this.blance +  amount
    // };

    // this.withdrow = (amount)=>{
    //     this.blance = this.blance - amount
    // }

}
const sandhyaAccount = new BankAccount("sandhya");
const sarikaAccount = new BankAccount("sarika", 2000);

BankAccount.prototype.deposit = function (amount){
    this.blance += amount
}
BankAccount.prototype.withdrow = function (amount){
    this.blance -= amount
}

sarikaAccount.deposit(5000)
sandhyaAccount.deposit(5000)


console.log(sandhyaAccount, sarikaAccount);
