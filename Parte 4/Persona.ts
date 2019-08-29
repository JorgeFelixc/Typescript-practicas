
class Persona {
    private name: string;
    protected age: number;
    protected constructor(theName: string, theAge: number) {
        this.name = theName;
        this.age = theAge;
    }
    introduceSelf() {
        console.log( `Hola yo soy ${this.name} !!!`);
    }
}
class Amigo extends Persona {
    yearsKnown: number;
    constructor(name: string, age: number, yearsKnown: number) {
        super(name, age);
        this.yearsKnown = yearsKnown;
    }
    timeKnown() {
        console.log(`Hemos sido amigos desde ${this.yearsKnown}  años prro`);
    }
    friendSince() {
        let firstAge = this.age - this.yearsKnown;
        console.log(`We have been friends since I was ${firstAge} years old.`)
    }
}
let amigo = new Amigo("William", 19, 8);

// let amigo = new Friend("Jacob", 6);
// // Prints: Hi, I am Jacob!
amigo.introduceSelf();
// // Prints: We have been friends for 6 years.
amigo.timeKnown();


// Prints: We have been friends since I was 11 years old.
amigo.friendSince();