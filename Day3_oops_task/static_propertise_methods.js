// class static config
class Config{
    static dbuser = "username";
    static dbpass = "password";
    static dbtoken = "XMcvnvb";  
}


class User{
    static id = 1
    constructor(username, age, income){
        this.username = username;
        this.age = age;
        this.income = income;
        this.id = User.id++
    }
    // utilities function 
    static CompareByAge(user1, user2){
        return user1.age - user2.age;

    }

    static CompareByIncome(user1, user2){
        return user1.income - user2.income;

    }

}
const user1 = new User("sandhya", 33, 5000);
const user2 = new  User("sandy", 20 , 4000);
const user3 = new User("andy", 23, 6000);


const users = [user1, user2 , user3];
// users.sort((a,b, c)=> a.age - b.age);
// users.sort(User.CompareByIncome);
console.log(users);
