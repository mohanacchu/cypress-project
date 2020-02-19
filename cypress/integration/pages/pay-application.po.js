class PayApplication {
  submit() {
    cy.get('.payment-bb').find('button').contains('Submit').click();
  }


  getInputFieldById(content, id) {
    cy.get(`#${id}`).clear({
      force: true
    }).type(content, {
      force: true
    }).should('have.value', content);
  }

}

export default PayApplication;
