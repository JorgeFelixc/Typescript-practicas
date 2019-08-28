class Shape3 {
    area: number;
    private color: string;
    constructor(name: string, width: number, height: number) {
        this.area = width * height;
        this.color = "pink";
    }

    shoutout(){ 

    }
}

class Shape4D extends Shape3 {
    volume: number;
    constructor(public name: string, width: number, height: number, length: number) {
        super(name, width, height);
        this.volume = length * this.area;
    };
    shoutout() {
        return "I'm " + this.name + " with a volume of " + this.volume + " cm cube.";
    }
    superShout() {
        return super.shoutout();
    }
}
var cube = new Shape4D("cube", 30, 30, 30);
console.log(cube.shoutout());
console.log(cube.superShout());
