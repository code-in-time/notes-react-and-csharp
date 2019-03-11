interface iMachine {
    name: string
    runCustomCode(): void
    showMachineName(): void
}

abstract class AbstractBase {
    abstract name: string

    abstract runCustomCode(): void

    constructor() {
        // this.name = name
        this.runCustomCode()
        this.showMachineName()
    }

    showMachineName = () => {
        console.log(this.name)
    }


}

class To extends AbstractBase implements iMachine {
    name: string = 'the to'
    runCustomCode() {
        console.log(this.name + 'runCustomCode')
    }
}
class TV extends AbstractBase implements iMachine {
    name: string = 'the TV'
    runCustomCode() {
        console.log(this.name + 'runCustomCode')
    }
}
class Radio extends AbstractBase implements iMachine {
    name: string = 'the Radio'
    runCustomCode() {
        console.log(this.name + 'runCustomCode')
    }
}


export { To, TV, Radio }

