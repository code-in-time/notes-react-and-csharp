class MyMap<T> {
    // private group: {[key: string]:string, item: T} = {};
    private group: {[key: string] : T} = {};

    setItem(key: string, item: T) {
        this.group[key] = item
    }

    printMap() {
        console.log(this.group)
    }

    clear() {
        this.group = {}
    }
}


const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
// numberMap.clear();
numberMap.printMap();
 
const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
// stringMap.clear();
stringMap.printMap();

numberMap.printMap();

numberMap.printMap();


function Makethis<T>(arg: T): void  {
    console.log(arg)
}

Makethis<string>('2');
Makethis<number>(2);



class Shape {
    width:number = 100
    height:number =  4
    name: string = ''
}

class Circle extends Shape {
    circumference: number = 200
    name: string = 'Circle'
}

class Square extends Shape {
    Sides: number = 4
    name: string = 'Square'
}






function logObj<T>(obj: T): void  {
    console.dir(obj)
}

logObj<Shape>(new Circle())
logObj<Shape>(new Square())









export {}