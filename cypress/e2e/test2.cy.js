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
      loginPage.typePassword(test.password)
      loginPage.clickLogin();

      if(test.name == 'should login to inventory page'){

          inventoryPage.elements.title().should('have.text',test.expected)
      }
      else{
        loginPage.elements.errorMessage().should('have.text',test.expected)
      }

  });

  }) 

})