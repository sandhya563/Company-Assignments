function BankAccount(costomerName, blance = 0){
    this.costomerName = costomerName;
    this.accountNumber = Date.now();
    this.blance = blance

    this.deposit = function(amount){
        this.blance = this.blance +  amount
    };

    this.withdrow = (amount)=>{
        this.blance = this.blance - amount
    }

}
const sandhyaAccount = new BankAccount("sandhya", 1000);
const sarikaAccount = new BankAccount("sarika");
sandhyaAccount.deposit(2000);
console.log("sandhyaAccount", sandhyaAccount.blance);
sarikaAccount.deposit(6000)
sandhyaAccount.withdrow(1000)
console.log("sandhyaAccount", sandhyaAccount.blance);

console.log(sandhyaAccount);