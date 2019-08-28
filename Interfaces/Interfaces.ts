interface Shape {
    name: string;
    width: number;
    height: number;
    color?: string;
}

// function area(shape: string,width: number, height: number){
//     var area = width * height;
//     return `I'm a ${shape} with an area of ${area} cm squared.`;
// }

// console.log( area( {name: "rectangle", width: 30, height: 15} ) );
// console.log( area( {name: "square", width: 30, height: 30, color: "blue"} ) );