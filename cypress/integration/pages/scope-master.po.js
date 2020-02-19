class ScopeMaster {
  /**
   * * select scope master from left sidebar and open scope master page
   */
  openScopeMaster() {
    cy.get('.nav-scopeMaster')
      .contains('Scope Master')
      .click();
  }

  /**
   * * click on plus icon and open context menu
   */
  openCSVContextMenu() {
    cy.get('.sm-flushed-plus-span')
      .last()
      .click();
  }

  /**
   * * select "add Row" from context menu
   */
  addNewRow() {
    this.openCSVContextMenu();
    cy.get('.menucus > div > ul > li:first')
      .first()
      .click();
  }

  /**
   * * create new row
   */
  createRow() {
    cy.get('.btn-circle')
      .first()
      .click();
  }

  /**
   * * click on cancel button to discard "add new row" operation in scope master
   */
  cancelRow() {
    cy.get('.btn-circle')
      .last()
      .click();
  }

  /**
   * * name input field to enter scope master name
   */
  getNameInputField() {
    return cy.get('.tabdata');
  }

  /**
   * * get cost code input field to enter cost code.
   */
  getCostCodeInputField() {
    return cy.get('.tableres');
  }

  /**
   *
   * @param  name name or cost code to select parent node
   */
  selectScopeMasterLineItem(name) {
    cy.get('.scope-div')
      .get('.ui-treetable-row')
      .contains(name)
      .click();
  }

  /**
   * * select "add child item" to add new child item
   */
  addChildItem() {
    cy.get('p-contextmenu > .ui-contextmenu').invoke('show');
    cy.get('.ui-menu-list > li > a').click();
  }

  /**
   * * return csv error element
   */
  getCsvError() {
    return cy.get('#csverror');
  }

  /**
   * * click on cancel button to close csv error modal
   */
  closeCsvErrorModal() {
    cy.get('#csvUploadErrorModal')
      .contains('Close')
      .click();
  }
}

export default ScopeMaster;
