/* eslint-disable no-undef */
describe('Note app', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:8080')
    cy.contains('bulbasaur')
  })
})
