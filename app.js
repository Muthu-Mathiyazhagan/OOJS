// Data Encapsulation
function createPerson (name) {
  return {
    name: name,
    age: 29,
    greetings: function () {
      console.log(`My Name is ${this.name}`)
    }
  }
}

// let person1 = createPerson('Muthu')
// person1.greetings()

createPerson('Muthu').greetings()
// Output :
// My Name is Muthu
