
describe('test login', () => {

  beforeEach(() =>{
    cy.visit('https://dashboard.cypress.io/login/email')
    cy.wait(5000)
  })

  it('log in with correct email and password', () => {
    cy.get('#email').type('20scoops.pre.test@gmail.com')
    cy.get('#password').type('20ScoopsPreTest#')
    cy.get("[type='submit']").click()
  })

  it('log in with wrong email and correct password', () => {
    cy.get('#email').type('wrong@email.com')
    cy.get('#password').type('20ScoopsPreTest#')
    cy.get("[type='submit']").click()
    cy.contains('Incorrect email address or password')
  })

  it('log in with correct email and wrong password', () => {
    cy.get('#email').type('20scoops.pre.test@gmail.com')
    cy.get('#password').type('wrong-password')
    cy.get("[type='submit']").click()
    cy.contains('Incorrect email address or password')
  })

  it('log in with only email', () => {
    cy.get('#email').type('20scoops.pre.test@gmail.com')
    cy.get("[type='submit']").click()
    cy.contains('Missing credentials')
  })

  it('log in with only password', () => {
    cy.get('#password').type('wrong-password')
    cy.get("[type='submit']").click()
    cy.contains('Missing credentials')
  })
})