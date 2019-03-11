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















console.log('s')
export {}