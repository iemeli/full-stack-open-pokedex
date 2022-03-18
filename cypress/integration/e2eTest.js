/* eslint-disable no-undef */
describe('Pokedex app', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
  })

  it('can go to a pokemon page', function () {
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
  })
})
