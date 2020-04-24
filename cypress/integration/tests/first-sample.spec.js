describe('Test Case: for running Cypress tests', () => {
    it('Test Step: Verifying True is returned True', () => {
        expect(true).to.be.equal(true);
    });

    it('Test Step: for running test in headless browser', () => {
        expect(5).to.be.equal(5);
    });

    it('Test Step: Open the website', () => {
        cy.visit('https://www.fandom.com/');
        cy.url();
    });

    it('Test Step: Sending input onto text field & verifying the input', () => {
        cy.visit('https://example.cypress.io/commands/actions')
          .url().should('have','commands')
          .get('.action-email')
          .type('cypress@test.com').should('have.value','cypress@test.com');
    });
    
    it.only('Test Step: Focus on DOM Element', () => {
        cy.visit('https://www.fandom.com/')
          //.contains('Search')
          .get('span').contains('Search')
          .dblclick({force:true})
          //.click(contains('Search'), {force:true})
          //.get('[data-search-label-text]').click()
           
          .type('paradise').should('have.value','paradise')
          
    });
});