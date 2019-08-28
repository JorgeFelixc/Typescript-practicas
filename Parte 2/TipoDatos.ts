// With strictNullChecks set to true
let a1: void = undefined; // Ok
let b1: void = null; // Error
// let c1: void = 3; // Error
// let d1: void = "apple"; // Error

// With strictNullChecks set to false
let a2: void = undefined; // Ok
let b2: void = null; // Ok
// let c2: void = 3; // Error
// let d2: void = "apple"; // Error

// Boleanos
let ab: boolean = true;
let bb: boolean = false;
// let cb: boolean = 23; // Error
// let db: boolean = "blue"; // Error

// Numeros
// With strictNullChecks set to true
let an1: number = undefined; // Error
let bn1: number = null; // Error
let cn1: number = 3;
let dn1: number = 0b111001; // Binary
let en1: number = 0o436; // Octal
let fn1: number = 0xadf0d; // Hexadecimal
// let gn1: number = "cat"; // Error
// With strictNullChecks set to false
let an2: number = undefined; // Ok
let bn2: number = null; // Ok
let cn2: number = 3;
let dn2: number = 0b111001; // Binary
let en2: number = 0o436; // Octal
let fn2: number = 0xadf0d; // Hexadecimal
// let gn2: number = "cat"; // Error

// strings
// With strictNullChecks set to true
let as1: string = undefined; // Error
let bs1: string = null; // Error
let cs1: string = "";
let ds1: string = "y";
let es1: string = "building";
// let fs1: string = 3; // Error
let gs1: string = "3";
// With strictNullChecks set to false
let as2: string = undefined; // Ok
let bs2: string = null; // Ok
let cs2: string = "";
let ds2: string = "y";
let es2: string = "building";
// let fs2: string = 3; // Error
let gs2: string = "3";

// String Formats
let e: string = "building";
let f: number = 300;
let sentence: string = `The ${e} in front of my office is ${f} feet tall.`;

// Arrays
// With strictNullChecks set to false
let aa1: number[] = [1, 12, 93, 5];
let ba1: string[] = ["a", "apricot", "mango"];
// let ca1: number[] = [1, "apple", "potato"]; // Error
let da1: Array<number> = [null, undefined, 10, 15];
let ea1: Array<string> = ["pie", null, ""];
// With strictNullChecks set to true
let aa2: number[] = [1, 12, 93, 5];
let ba2: string[] = ["a", "apricot", "mango"];
// let ca2: number[] = [1, "apple", "potato"]; // Error
let da2: Array<number> = [null, undefined, 10, 15]; // Error
let ea2: Array<string> = ["pie", null, ""]; // Error

// Tuplas
let at: [number, string] = [11, "monday"];
// let bt: [number, string] = ["monday", 11]; // Error
// let ct: [number, string] = ["a", "monkey"]; // Error
// let dt: [number, string] = [105, "owl", 129, 45, "cat"];
// let et: [number, string] = [13, "bat", "spiderman", 2];
// et[1] = "elephant";
// et[15] = false; // Error

// Enumerables
enum Animals { cat, lion, dog, cow, monkey }
let c: Animals = Animals.cat;
console.log(Animals[3]); // cow
console.log(Animals.monkey); // 4

/* ANY */
let ana: any = "apple";
let anb: any = 14;
let anc: any = false;

/* NEVER */
let anv: never; // Ok
// let bnv: never = false; // Error
// let cnv: never = null; // Error
// let dnv: never = "monday"; // Error
function stuck(): never {
    while (true) {
    }
}