class Person {
    name: string = 'no name'
    private email: string = 'no@no.com'
    tel: number = 0
    private shoesize: number = 0
  
    constructor(public details: string = 'the details') {
  
  
    }
  }
  
  class Boy extends Person {
  
  }
  
  
  export { Person, Boy }