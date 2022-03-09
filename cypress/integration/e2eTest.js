/* eslint-disable no-undef */
describe('Note app', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('bulbasaur')
  })
})
