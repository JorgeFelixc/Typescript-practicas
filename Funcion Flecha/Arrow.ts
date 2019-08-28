// var shape = {
//     name: "rectangle",
//     popup: function () {
//         console.log('This inside popup(): ' + this.name);
//         setTimeout(function () {
//             console.log('This inside setTimeout(): ' + this.name);
//             console.log("I'm a " + this.name + "!");
//         }, 3000);
//     }
// };

// shape.popup();

// Arrow Function: 
var shape = {
    name: "rectangle",
    popup: function () {
        console.log('This inside popup(): ' + this.name);
        setTimeout(() => {
            console.log('This inside setTimeout(): ' + this.name);
            console.log("I'm a " + this.name + "!");
        }, 3000);
    }
};
shape.popup();
