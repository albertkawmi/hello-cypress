describe('Counter', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3333');
  });

  it('increments', () => {
    cy.get('#count').should('have.text', '0');
    cy.get('#increment').click();
    cy.get('#count').should('have.text', '1');
  });

  it('decrements', () => {
    cy.get('#count').should('have.text', '0');
    cy.get('#decrement').click();
    cy.get('#count').should('have.text', '-1');
  });
});