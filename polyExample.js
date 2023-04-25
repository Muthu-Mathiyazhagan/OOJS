class Cloud {
  constructor (name) {
    name: name
    console.log('Name', name)
  }
  //   time in Hours
  calculateCost (vmCount, time) {
    return `${vmCount * time * 2}`
  }
}

class AWS extends Cloud {
  calculateCost (vmCount, time) {
    this.baseCost = super.calculateCost(vmCount, time)
    this.gst = 1.18
    // with Tax
    return `$${this.baseCost * this.gst}`
  }
}

class GCP extends Cloud {
  calculateCost (vmCount, time) {
    this.baseCost = super.calculateCost(vmCount, time)
    this.gst = 1.13
    // with Tax
    return `$${this.baseCost * this.gst}`
  }
}

let amazon = new AWS('Kottravai')
const TotalCost = amazon.calculateCost(1, 1)
console.log('Total Cost : ', TotalCost)

let google = new GCP('Kottravai')
const totalcost = google.calculateCost(1, 1)
console.log('Total Cost : ', totalcost)
