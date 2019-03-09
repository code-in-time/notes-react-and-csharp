class Person {
  name: string = 'no name'
  private email: string = 'no@no.com'
  tel: number = 0
  private shoesize: number = 0
  protected schoolName: string = 'none'
  protected gender: string = '';


  constructor(public details: string = 'the details') {


  }

  protected updateShoeSize(shoesize: number) {
    this.shoesize = shoesize
  }

}

class Boy extends Person {
  constructor(){
    super();
    this.gender = "male"
    this.updateShoeSize(8)
  }
}

class Girl extends Person {
  constructor(){
    super();
    this.updateShoeSize(2)
    this.gender = "girl"
  }
}


export { Person, Boy, Girl }