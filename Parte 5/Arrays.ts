function removeChar(theString: string, theChar: string): string {
    let theRegex = new RegExp(theChar, "gi");
    return theString.replace(theRegex, '');
}


// function removeIt<T>(theInput: T, theIt: string): T {
//     let theRegex = new RegExp(theIt, "gi");
//     return theInput.replace(theRegex, '');
// }

interface People {
    name: string
}
interface Family {
    name: string,
    age: number,
    relation: string
}
interface Celebrity extends People {
    profession: string
}
function printName<T extends People>(theInput: T): void {
    console.log(`My name is ${theInput.name}`);
}
let serena: Celebrity = {
    name: 'Serena Williams',
    profession: 'Tennis Player'
}
printName(serena);