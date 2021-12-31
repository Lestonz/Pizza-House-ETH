
const { expect } = require('chai');
const { ethers } = require("hardhat");

contract('PizzaShop', ([deployer, author, tipper]) => {
  let pizzaShop 

  before(async () => {
    pizzaShop  = await PizzaShop.deployed()
  })

  describe('deployment', async () => {
    it('deploys successfully', async () => {
      const address = await pizzaShop .address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })


  })

  describe('pizzas', async () => {
    let result, pizzaCount
    const hash = 'abc123'

   

    //check event
  

    

    it('allows users to pay pizzas', async () => {
      // Track the author balance before purchase
      let oldAuthorBalance
      oldAuthorBalance = await web3.eth.getBalance(author)
      oldAuthorBalance = new web3.utils.BN(oldAuthorBalance)

      result = await pizzaShop.payPizzaOwner(pizzaCount, { from: payyer, value: web3.utils.toWei('1', 'Ether') })

      // SUCCESS
      const event = result.logs[0].args
      assert.equal(event.id.toNumber(), pizzaCount.toNumber(), 'id is correct')
      assert.equal(event.hash, hash, 'Hash is correct')
      assert.equal(event.description, 'Pizza description', 'description is correct')
      assert.equal(event.priceAmount, '1000000000000000000', 'tip amount is correct')
      assert.equal(event.author, author, 'author is correct')

      // Check that author received funds
      let newAuthorBalance
      newAuthorBalance = await web3.eth.getBalance(author)
      newAuthorBalance = new web3.utils.BN(newAuthorBalance)

      let pricePizzaOwner
      pricePizzaOwner = web3.utils.toWei('1', 'Ether')
      pricePizzaOwner = new web3.utils.BN(pricePizzaOwner)

      const expectedBalance = oldAuthorBalance.add(pricePizzaOwner)

      assert.equal(newAuthorBalance.toString(), expectedBalance.toString())

      // FAILURE: Tries to tip a image that does not exist
      await pizzaShop.pricePizzaOwner(99, { from: payyer, value: web3.utils.toWei('1', 'Ether')}).should.be.rejected;
    })
  })
})