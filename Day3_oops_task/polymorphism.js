class Animal{
    constructor(name){
        this.AnimalName = name;
    }
    // over riding methods
    eats(){
        console.log(`this animal can eats rat ${this.AnimalName}`);
    }
}


class Animal2  extends Animal{

    // over riding methods
    
    eats(){
        super.eats()
        console.log(`this animal can eats fish ${this.AnimalName}`);
    }
}

const ani = new Animal2("cat");
ani.eats();
console.log(ani);