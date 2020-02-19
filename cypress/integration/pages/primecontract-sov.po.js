class PrimeContractSOV {
  /**
   * * Open Add To Scope page
   */
  selectAddToScope() {
    cy.get('.generalInfo-editBtn')
      .find('.float-right')
      .contains('Add To Scope CO')
      .click();
  }


  /**
   * * Modify Scope page
   */
  selectModifyScope() {
    cy.get('.generalInfo-editBtn')
      .find('.float-right')
      .contains('Modify Scope CO')
      .click();
  }

  /**
   * * select element from add to scope master modal
   * @param  costCode - costCode to select line item from add to scope master modal
   * @return it will return element of costCode.
   */
  addItemFromSM(costCode) {
    return cy.get('#addFromScopeMaster').contains(costCode);
  }


  /**
   * * select item to modify from sov
   * @param costCode -costCode to select line item from modify scope.
   */
  modifyItemFromSOV(costCode) {
    return cy.get('.BudgetDialog > .ui-dialog').find(`span[title="${costCode}"]`); //.contains(costCode)
  }
  /************* Buttons  ****************/

  /**
   * it will submit the form
   */
  submit() {
    cy.get('#createCO').click();
  }

  cancel() {
    cy.get('#CancelB').click();
  }

  addItemFromScopeMasterButton(type) {
    cy.get('#addFromScopeMaster')
      .find('button[data-dismiss="modal"]')
      .contains(type)
      .click();
  }


  addItemFromSOVButton() {
    cy.get('button[label="Submit"]')
      .click();
  }
}

export default PrimeContractSOV;
