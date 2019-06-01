describe('Counter - using default Cypress syntax', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('increments', () => {
    cy.get('#result').should('have.text', 'The count is 0');
    cy.get('#increment').click();
    cy.get('#result').should('have.text', 'The count is 1');
  });

  it('decrements', () => {
    cy.get('#result').should('have.text', 'The count is 0');
    cy.get('#decrement').click();
    cy.get('#result').should('have.text', 'The count is -1');
  });
});

// See README.md for more info about testing-library
describe('Counter - using testing-library syntax', () => {
  const { getByText, queryByText } = cy;

  beforeEach(() => {
    cy.visit('/');
  });

  it('increments', () => {
    queryByText('The count is 0').should('exist');
    getByText('+').click();
    queryByText('The count is 1').should('exist');
  });

  it('decrements', () => {
    queryByText('The count is 0').should('exist');
    getByText('-').click();
    queryByText('The count is -1').should('exist');
  });
});
