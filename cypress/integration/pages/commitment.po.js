/// <reference types="Cypress" />


class Commitment {

  filterSearch(value) {
    cy.get('.master-search').click()
      .clear()
      .type(value);
  }

  /*******************create Requisition********************/

  retainageClick(type) {
    cy.get('#percentageChangeWarning')
      .find('button').contains(type)
      .click();
  } 


  billingPeriod(select, date) {
    cy.get(`p-calendar[name=${select}] > span > input`)
      .click({
        force: true
      });

    cy.get(`p-calendar[name=${select}]`)
      .find('.ui-datepicker-calendar')
      .find('td')
      .contains(`${date}`)
      .click({
        force: true
      });
  } 

  selectModifyScope() {
    cy.get('.generalInfo-editBtn')
      .find('.float-right')
      .contains('Modify CCO')
      .click();
  }


}

export default Commitment;
