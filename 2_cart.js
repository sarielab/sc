let validate = require('./helpers/validate')

class Cart {
  constructor() {
    this.products = {}
  }
  addProduct(name, qty) {
    if (validate.isPositiveInteger(qty)) {
      if (this.productExist(name)) this.products[name] += qty
      else this.products[name] = qty
      return true
    }

    return 'Quantity must be positive integer'
  }
  removeProduct(name) {
    if (this.productExist(name)) {
      delete this.products[name]
      return true
    }

    return 'Product didnt exist'
  }
  productExist(name) {
    return typeof this.products[name] !== 'undefined'
  }
  showCart() {
    let product_map = []
    for(let key in this.products)
      product_map.push(`${key} (${this.products[key]})`)

    console.log(product_map.join('\n'))

    return product_map
  }
}

module.exports = Cart