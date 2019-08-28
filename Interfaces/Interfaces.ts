interface Shape {
    name: string;
    width: number;
    height: number;
    color?: string;
}

function IArea(shape : Shape){
    var area = shape.width * shape.height;
    return `I'm a ${shape} with an area of ${area} cm squared.`;
}

console.log( IArea( {name: "rectangle", width: 30, height: 15} ) );
console.log( IArea( {name: "square", width: 30, height: 30, color: "blue"} ) );
// console.log( IArea( {width: 30, height: 15} ) );
