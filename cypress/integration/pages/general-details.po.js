import * as Constants from '../pages/constants';
class GeneralDetails {
    /************************** fill general details **************************/

    /**
     * * select number input filed using id selector and enter  number
     * @param  number - number to fill in number input field
     */
    fillRequestNumber(number, id) {
        cy.get(id)
            .clear({
                force: true
            })
            .type(number, {
                force: true
            })
            .should('have', number);
    }

    /**
     * * select title input field and enter title
     * @param  title - title to fill in title input field
     */
    fillTitle(title) {
        cy.get('#titleID')
            .clear({
                force: true
            })
            .type(title, {
                force: true
            })
            .should('have', title);
    }

    /**
     * * select option from dropdown.
     * @param option - option to select from  dropdown
     */
    selectOptionFromDropdown(selector, option) {
        const element = cy.get(`p-dropdown[name="${selector}"] > .ui-dropdown`);
        element.click({
            force: true
        }); // {force: true} using to stop schrolling
        cy.wait(500);
        cy.get(`p-dropdown[name="${selector}"] > .ui-dropdown`)
            .find('li')
            .contains(option)
            .click({
                force: true
            }); // {force: true} using to stop schrolling
    }

    /**
     * * select engineer when filling general information.
     * @param EngineerName - architect/engineer to select from architect/engineer dropdown
     */
    selectEngineer(elementName, EngineerName) {
        const element = cy.get(`p-multiselect[name="${elementName}"]`);
        element.click({ force: true });
        element
            .find('li')
            .contains(EngineerName)
            .click({
                force: true
            });
    }

    /**
     * * select user and group from DL and add to general details.
     * @param  userName  -name to select from DL
     * @param  groupName -group name to select from DL
     * @param  search    - search name/group from DL
     */
    selectUserGroupFromDL(userName, groupName, search) {
        // find distribution button with plus icon and click and open distribution list modal
        cy.get('img[src$="/katerra_Icons/Add.svg"]').click({ force: true });
        // search givan user/group
        cy.get('app-distribution-list-modal')
            .find('.search-pc')
            .clear()
            .type(search);

        // select givan name/group
        cy.get('app-distribution-list-modal')
            .find('tbody')
            .contains(search)
            .click({ force: true });

        // clear search field
        cy.get('app-distribution-list-modal')
            .find('.search-pc')
            .clear();

        // cancel button
        // cy.get('app-distribution-list-modal')
        // .find('.modal-footer').find('button')
        //   .eq(0)
        //   .click();

        // find the name and select that name
        cy.get('app-distribution-list-modal')
            .find('tbody')
            .contains(userName)
            .click({ force: true });

        // find group button and click
        // cy.get('app-distribution-list-modal')
        //  .find('.button[name="button"]')

        //   .eq(1)
        //   .click();

        // find group and select that group
        cy.get('app-distribution-list-modal')
            .find('tbody')
            .contains(groupName)
            .click();

        // find Add button and click so it will add all selected user.
        cy.get('app-distribution-list-modal')
            .find('button')
            .contains('Add')
            .click({ force: true });
    }

    unlistedDL(name) {
        cy.get('img[src$="/katerra_Icons/Add.svg"]').click({ force: true });

        // search givan user/group
        cy.get('app-distribution-list-modal')
            .find('.search-pc')
            .clear({ force: true })
            .type(name);

        // cy.get('app-distribution-list-modal')
        // .find('button[name="button"]')
        // .eq(0)
        // .click();

        // cy.get('app-distribution-list-modal')
        // // .find('button[name="button"]')
        // .find('.modal-footer').find('button')

        // .eq(1)
        // .click();
    }

    // sov cost type
    selectCostType(para) {
        cy.get('#costTypeClass').find('p-dropdown').click({ force: true });
        cy.get('.ui-dropdown-panel').find('li').find('span').contains(para).click();
    }

    /**
     * * it will remove user from list and check it not present in the DOM
     * @param  {...any} users // array of users to remove from list
     */
    removeUserFromDL(...users) {
        users.forEach(user => {
            const element = cy
                .get('p-chips[name="chips"]')
                .find('li')
                .contains(user);

            element
                .parent('li')
                .find('.fa-close')
                .click({
                    force: true
                });

            element.should('not.exist');
        });
    }

    /************************* general details validation ************************/

    /**
     * * checking title and client/owner field is required
     */



    commitmentCompanySelect() {

        cy.get('[data-cy=cmt-tbl]').find('td').find('span').contains('Katerra Inc. - 1').click({ force: true });
    }


    titleAndClientRequired() {
        cy.get('.requiredError')
            .eq(0)
            .should('have', Constants.ERROR_MESSAGE_TITLE);

        cy.get('.requiredError')
            .eq(1)
            .should('have', Constants.ERROR_MESSAGE_CLIENT);
    }

    /**
     * * get element from DOM and check it is contain Title is required.
     */
    titleRequiredError() {
        this.selectOptionFromDropdown('clients', 'KEF');
        cy.get('.requiredError')
            .eq(0)
            .should('have', Constants.ERROR_MESSAGE_TITLE);
    }

    /**
     * * select element and check it contain Owner/Client is required.
     */
    clientRequiredError() {
        this.fillTitle('updated test');
        cy.get('.requiredError')
            .eq(0)
            .should('have', Constants.ERROR_MESSAGE_CLIENT);
    }

    /**
     * * format the givan date in mm/dd/yyyy
     * @param date date to be format
     */
    dateFormat(date) {
        return (
            (date.getMonth() + 1 <= 9 ?
                '0' + (date.getMonth() + 1) :
                date.getMonth() + 1) +
            '/' +
            (date.getDate() <= 9 ? '0' + date.getDate() : date.getDate()) +
            '/' +
            date.getFullYear()
        );
    }

    /************************* general details buttons ************************/

    /**
     * * click on create button
     */
    create() {
        cy.get('button')
            .contains('Create')
            .click();
    }

    submit() {
        cy.get('button[label="Submit"]').click();
    }

    /**
     * * get discard button
     */
    discard() {
        return cy.get('button').contains('Discard');
    }

    /**
     * * get cancel button
     */
    cancel() {
        return cy.get('button[label="Cancel"]');
    }

    /**
     * * edit general details
     */
    edit() {
        return cy.get('.myeditBtn').click({
            force: true
        });
    }

    /**
     * * update general details
     */
    update() {
        return cy
            .get('button')
            .contains('Update')
            .click({
                force: true
            });
    }

    // SOV

    selectAddToScope(value) {
        cy.get('.generalInfo-editBtn')
            .find('.float-right')
            .contains(value)
            .click({ force: true });
    }

    selectModifyScope(value) {
        cy.get('.generalInfo-editBtn')
            .find('.float-right')
            .contains(value)
            .click({ force: true });
    }

    AddCcosubmit() {
        cy.get('[data-cy=add_submit]').click({ force: true });
    }
    addCcoCancel() {
        cy.get('button[label= "Cancel"]').click({ force: true });
    }

    addCcoUpdate() {
        cy.get('button[label= "Update"]').click({ multiple: true });
    }
    addCcoApprove() {
        cy.get('button[label= "Approve"]').click({ force: true });
    }

    addItemFromScopeMasterButton(type) {
        cy.get('#addFromScopeMaster')
            .find('button[data-dismiss="modal"]')
            .contains(type)
            .click({ force: true });
    }

    addItemFromProjectBudgetButton(type) {
        cy.get('#addFrombudget')
            .find('[data-cy=add_popup_add]')
            .contains(type)
            .click({ force: true });
    }


    addItemFromPB(costCode) {
        return cy.get('#addFrombudget').contains(costCode);
    }
    addItemFromSM(costCode) {
        return cy.get('#addFromScopeMaster').contains(costCode);
    }

    // end sov

    /***Distribution content *****/
    distributionContent() {
        cy.get('img[src$="/katerra_Icons/Add.svg"]').click({ force: true });
        cy.wait(3000);
        cy.get('#distributionPopup')
            .find('.modal-title')
            .contains('Add Distribution List');
        cy.get('#distributionPopup')
            .find('.searchDistribution')
            .find('input')
            .should('have.attr', 'placeholder', 'Search by Group/User');
        cy.get('#distributionPopup')
            .find('span')
            .contains('Groups');
        cy.get('#distributionPopup')
            .find('span')
            .contains('Users');
        cy.get('#distributionPopup')
            .find('.modal-footer')
            .find('button')
            .contains('Cancel');
        cy.get('#distributionPopup')
            .find('.modal-footer')
            .find('button')
            .contains('Add');
        cy.get('#distributionPopup')
            .find('.attach-close')
            .click({ force: true });
        cy.get('img[src$="/katerra_Icons/Add.svg"]').click({ force: true });
        cy.wait(2000)

        cy.get('#distributionPopup')
            .find('.modal-footer')
            .find('button')
            .contains('Cancel')
            .click({ force: true });
    }

    /***********commitment tab switch **************/
    ccoListTab() {
        cy.get('[data-cy=sccommit_co]').click({ force: true });
    }

    sovTab() {
        //return cy.get('.contractListHeader').find('div').contains('Schedule Of Values').click();
        cy.get('[data-cy=sccommit_sov]').click({ force: true });
    }

    requisitionTab() {
        cy.get('[data-cy=sccommit_req]').click({ force: true });
    }

    generalTab() {
        cy.get('[data-cy=sccommit_gi]').click({ force: true });
    }







    /**************** ends  ****************/






    /**************************** Create Requisition ************************/

    fillInvoiceRef(number) {
        cy.get('#invoiceNumber')
            .clear({
                force: true
            })
            .type(number, {
                force: true
            })
            .should('have', number);
    }

    fillRetinageWork(id, number) {
        cy.get(id)
            .clear({
                force: true
            })
            .type(number, {
                force: true
            });
        cy.wait(3000).should('have', number);
    }

    fillBillTitle(name) {
        cy.get('#billTitle')
            .clear({
                force: true
            })
            .type(name, {
                force: true
            })
            .should('have', name);
    }

    selectApprovalWorkflow(select) {
        let element = cy.get('.approval-label-header');
        element.click();
        element
            .find('li')
            .contains(select)
            .click();
    }

    modifyCancel() {
        cy.get('.actionBtn-div')
            .find('button[label="Cancel"]')
            .click({ force: true });
    }

    selectCommitCompany(company) {
        cy.route('GET', '**/api/distribution/groups', 'fixture:/admin/after_prime_contract_lock/commitment/groups.json').as('group');

        cy.get('app-viewsscommitments').find('span').contains(company).click({ force: true });

    }

}

export default GeneralDetails;
