class Car {
  constructor (brand) {
    this.carname = brand
  }
  present () {
    return `I have a ${this.carname}\n`
  }
}

class Model extends Car {
  constructor (brand, mod) {
    super(brand)
    this.model = mod
  }
  show () {
    return this.present() + 'Its a ' + this.model
  }
}

const myCar = new Model('Royal Enfield','Himalayan')
console.log(myCar.show())
