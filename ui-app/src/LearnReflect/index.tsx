// https://blog.wizardsoftheweb.pro/typescript-decorators-reflection/#reflect

import 'reflect-metadata'

class Bird {
    name: string = 'd'
    age: number = 1
    canFligh: boolean = true
}



const tlog = new Bird()
console.log('tlog', tlog)
// let metadataValue = Reflect.getMetadata(metadataKey, obj, "method");
//let metaValue = Reflect.getMetadata(name,t)
let result = Reflect.has(tlog, 'name');
console.log('tlog', result)
Reflect.deleteProperty(tlog, "age")
console.log('tlog', result)




// // The visibility compiles out but whatever
// class Demo {
//     public foo: number = 1;
//     protected bar: number = 2;
//     private baz: number = 3;
// }

// // Create an instance
// const demo = new Demo();

// console.log('Reflect', Reflect.has(demo, "foo"));
// // true
// console.log('Reflect', Reflect.has(demo, "bar"));
// // true
// console.log('Reflect', Reflect.has(demo, "baz"));
// // true
// console.log('Reflect', Reflect.has(demo, "qqq"));
// // false




export default {};