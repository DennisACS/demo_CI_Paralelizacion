import { loginPage } from "../pages/LoginPage"
import { inventoryPage } from "../pages/InventoryPage"

const tests = require('../fixtures/data-driven/sauceUsers.json')

describe('test 2', () => {

  beforeEach(() => {
    cy.visit("/")

  })
  tests.forEach(test => {

    it(test.name, () => {

      loginPage.typeUsername(test.username)

  });

  }) 

})