class A {
  area (x, y) {
    console.log(x * y)
    return x * y
  }
}

class B extends A {
  area (x, y) {
    console.log('Class B')
    return super.area(x, y)
  }
}

let b = new B()
console.log(b.area(100, 200))
