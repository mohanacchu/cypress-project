class ProjectBudget {
  getLockWarningMessage() {
    return cy.get("#lockwarning").find(".modal-body");
  }

  getPrimeContractLockCancelButton() {
    return cy
      .get("#lockwarning")
      .find("button")
      .contains("Cancel")
      .click({
        force: true
      });
  }

  getPrimeContractLockButton() {
    return cy
      .get("#lockwarning")
      .find("button")
      .contains("Lock")
      .click({ force: true });
  }

  /**
   * * open project budget page
   */
  openProjectBudget() {
    // find Project Budget menu and select project budget
    cy.get(".nav-div")
      .contains("Project Budget")
      .click({
        force: true
      });
  }

  /**
   * * get array of column present in budget table
   * @return - return all element match using class selector "container-fluoid2" and tag name "th"
   */
  getColumnCountBeforeLock() {
    return cy.get(".container-fluid2").find("th");
  }

  /**
   * * button to open  project budget right sidebar
   * @return - return button element to open sidebar
   */
  showProjectBudgetMenuSidebar() {
    cy.get("[data-cy=b_unlock_show]").click({
      force: true
    });
    cy.wait(1000);
    // return cy.get('.togbutton').click({
    //   force: true
    // });
  }

  //sidenav after locked

  showProjectBudgetMenuSidebarLock() {
    cy.get("[data-cy=b_lock_show]").click({
      force: true
    });
    cy.wait(1000);
  }

  hideProjectBudgetMenuSidebarLock() {
    return cy.get("[data-cy=b_lock_hide]").click({
      force: true
    });
  }

  /**
   * * button to close  project budget right sidebar
   * @return - return button element to close sidebar
   */
  hideProjectBudgetMenuSidebar() {
    return cy.get("[data-cy=b_unlock_hide]").click({
      force: true
    });
    // return cy.get('.togbutton2').click({
    //   force: true
    // });
  }

  /**
   * * return array of sidebar menu
   * @return - return all element match with class selector h-39
   */
  getProjectBudgetSideBarMenu() {
    return cy.get(".h-39");
  }

  /**
   * * return array of button's present in import csv modal footer
   * @return - return all element match with tag name button in import csv modal footer
   */
  getImportCSVModal() {
    return cy.get(
      "div[id=myModalImportPopup] > .modal-dialog > .modal-content > .modal-footer > button"
    );
  }

  /**
   * * select line item from budget table
   * @param code cost code to select line item
   */
  selectLineItem(code) {
    return cy
      .get(".budget-dataContainter")
      .find("tbody", {
        force: true
      })
      .contains(code);
  }

  /**
   * * select element from add line item modal
   * @param  costCode - costCode to select line item from add line item modal
   * @return it will return element of costCode.
   */
  addLineItem(costCode) {
    return cy.get("#addNewLineItem").contains(costCode);
  }

  /**
   * * delete line item from project budget table
   */
  deleteLineItem() {
    // find delete button from delete modal and click on that button.
    cy.get("#myDeletePopup")
      .find("button")
      .eq(1)
      .click({
        force: true
      });
  }

  /**
   * * select cost type when edit project budget line item.
   * @param costType - cost type to select from cost type dropdown
   */
  selectCostCode(costType) {
    const element = cy
      .get('p-dropdown[placeholder="Search Cost Type"]')
      .children(".ui-dropdown");
    element.click({
      force: true
    });
    element
      .find("li")
      .contains(costType)
      .click({
        force: true
      });
  }

  /**
   * * select company when edit project budget line item.
   * @param company - company to select from company dropdown
   */
  selectCompany(company) {
    const element = cy
      .get('p-dropdown[placeholder="Search Company"]')
      .children(".ui-dropdown");
    element.click({
      force: true
    });
    element
      .find("li")
      .contains(company)
      .click({
        force: true
      });
  }

  /**
   * * fill margin value to margin input field
   * @param  margin - margin value
   */
  fillMargin(margin) {
    cy.get("#margin")
      .clear({
        force: true
      })
      .type(margin, {
        force: true
      })
      .invoke("val")
      .then(text => {
        expect(text).to.contain(margin);
      });
  }

  /**
   * * fill original budget amount value to budget input field
   * @param  amount - original budget amount value
   */
  fillOriginalBudgetAmount(amount) {
    cy.get(".input_border")
      .clear({
        force: true
      })
      .type(amount, { force: true })
      .invoke("val")
      .then(text => {
        expect(text).to.contain(amount);
      });
  }

  /**
   * * get save icon span and click on that icon
   */
  updateLineItem() {
    cy.get('span[title="Save Line Items"]').click({
      force: true
    });
  }

  /**
   * * get cancel icon span and click on that
   */
  cancelUpdationLineItem() {
    cy.get('span[title="Cancel and Reset"]').click({
      force: true
    });
  }

  reload() {
    cy.server();
    cy.route("GET", "**/costing/scopemaster_all_line_items").as("lineItem");
    cy.route("GET", "**/costing/scopemaster_codes").as("scopeCode");

    cy.reload();
    cy.wait(["@lineItem", "@scopeCode"]);
  }

  /*************************** Budget modofication **************************/

  createBudgetModification() {
    // cy.get('#budgetmodification')
    //   .find('button')
    //   .contains('Create')
    //   .click({force: true});

    cy.get("[data-cy=bm_create]").click();
  }

  cancelBudgetModification() {
    // cy.get('#budgetmodification')
    //   .find('button')
    //   .contains('Cancel')
    //   .click();
    cy.get("[data-cy=bm_cancel]").click({ force: true });
  }

  /***************unlock project budget ***********/
  lockProjectBudget() {
    cy.route({
      method: "PUT",
      url: "**/cbs/costing/project_budget/*/lock",
      response:
        '{"success":"Project Budget locked successfully","can_unlock_budget":true}',
      onResponse: () => {
        Constants.verifyToastMessage("Prime Contract locked successfully").as(
          "lock"
        );
      }
    });
    cy.get("[data-cy=b_unlock_show]").click();
    cy.wait(2000);
    cy.get(".example-sidenav")
      .find("a")
      .contains("Lock Prime Contract")
      .parent("div")
      .click();
    cy.wait(3000);
    cy.get("[data-cy=pb_prime_lock]")
      .eq(0)
      .click();
  }
}

export default ProjectBudget;
