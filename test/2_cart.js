const assert = require('assert')
const Cart = require('../2_cart')

describe('Cart', () => {
  let cart = new Cart()
  let products = {}

  describe('Add product', () => {
    it('shouldnt add product -- wrong data type (not number)', done => {
      assert.equal(cart.addProduct('Baju Merah Mantap', '12sad'), 'Quantity must be positive integer')
      done()
    })
    it('shouldnt add product -- wrong data type (negative integer)', done => {
      assert.equal(cart.addProduct('Baju Merah Mantap', -12), 'Quantity must be positive integer')
      done()
    })
    it('should add product', done => {
      assert.equal(cart.addProduct('Baju Merah Mantap', 1), true)
      assert.equal(cart.addProduct('Baju Merah Mantap', 1), true)
      assert.equal(cart.addProduct('Bukuku', 3), true)
      assert.equal(cart.addProduct('Singlet Hijau', 1), true)

      products['Baju Merah Mantap'] = 1
      products['Baju Merah Mantap'] += 1
      products['Bukuku'] = 3
      products['Singlet Hijau'] = 1


      done()
    })
  })

  describe('Remove product', () => {
    it('shouldnt remove product -- product didnt exist', done => {
      assert.equal(cart.removeProduct('ProdukBohongan'), 'Product didnt exist')
      done()
    })
    it('should remove product', done => {
      delete products['Bukuku']
      assert.equal(cart.removeProduct('Bukuku'), true)
      done()
    })
  })

  describe('Show cart', () => {
    it('should show product', done => {
      let products_map = []
      for(let key in products)
        products_map.push(`${key} (${products[key]})`)

      assert.deepEqual(cart.showCart(), products_map)
      done()
    })
  })
})