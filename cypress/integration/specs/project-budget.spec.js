/// <reference types="Cypress" />

import * as Constants from '../pages/constants';
import ProjectBudget from '../pages/project-budget.po';
import GeneralDetails from "../pages/general-details.po";
import ProjectList from '../pages/project-list.po';
import Sidebar from '../pages/sidebar.po';
describe('Project Budget', () => {
    let projectBudget;
    let projectList;
    let sidebar;
    let generalDetails;
    before(() => {
        projectBudget = new ProjectBudget();
        projectList = new ProjectList();
        generalDetails = new GeneralDetails();
        sidebar = new Sidebar();
        Constants.loginModal();

        cy.task('log', 'project list are displayed');
        cy.route('GET', '**/cmb/V1/configurations/budget?config_type=cost_type', 'fixture:/admin/configurations_config_type_cost_type.json').as('cost_type');
        cy.route('GET', '**/cmb/V1/configurations/budget?config_type=prime_contract_status', 'fixture:/admin/configurations_config_type_prime_contract_status.json').as('prime_contract_status');
        cy.route('GET', '**/cmb/V1/configurations/budget', 'fixture:/admin/v1_configuration_budget.json').as('V1_budget');
        cy.route('GET', '**/cmb/V1/distribution-list', 'fixture:/admin/after_prime_contract_lock/commitment/general_info/cmb_V1_distribution-list.json').as('distribution-list')
        cy.route('GET', '**/cbs/permissions/*', 'fixture:/admin/after_prime_contract_lock/commitment/view_commitment/cbs_permissions.json');
        cy.route('GET', '**/cmb/projects/*', 'fixture:/admin/before_prime_contract_lock/project_list_changes/cmb_projects.json').as('projects');
        cy.route('GET', '**/cmb/project-template-association/manage/permissions', 'fixture:/admin/after_prime_contract_lock/commitment/cco/add-to-scope/manage_permission.json').as('manage');
        cy.route('GET', '**/cbs/permissions/*', '{"scopemaster":{"import_csv":true,"add_line_item":true,"update":true,"read":true,"delete":true}}');
        cy.route('GET', '**/cmb/tenant_config', 'fixture:/admin/after_prime_contract_lock/commitment/all_cco/tenant_config.json').as('tenant_config')
        cy.route('GET', '**/cmb/projects/team-members/*', 'fixture:/admin/team-members.json');
        cy.route('GET', '**/cmb/projects/config/*', 'fixture:/admin/before_prime_contract_lock/project_list_changes/projects_config.json').as('config');
        cy.route('GET', '**/cbs/permissions/*', 'fixture:/admin/after_prime_contract_lock/commitment/view_commitment/cbs_permissions.json');
        projectList.selectProject(Constants.PROJECT_NAME);
        cy.wait(['@projects']);
        cy.task('log', 'project list are selected');

    });

    beforeEach(() => {
        cy.server();
        cy.route('GET', '**/cmb/V1/distribution-list', 'fixture:/admin/after_prime_contract_lock/commitment/general_info/cmb_V1_distribution-list.json').as('distribution-list')

        cy.route('GET', '**/cmb/project-template-association/CHANGE_ORDER/project/*', 'fixture:/admin/after_prime_contract_lock/commitment/view_commitment/project-template-association_CHANGE_ORDER.json').as('CHANGE_ORDER')
        cy.route('GET', '**/cmb/V1/configurations/budget?config_type=cost_type', 'fixture:/admin/configurations_config_type_cost_type.json').as('cost_type');
        cy.route('GET', '**/cmb/V1/configurations/budget?config_type=prime_contract_status', 'fixture:/admin/configurations_config_type_prime_contract_status.json').as('prime_contract_status');
        cy.route('GET', '**/cmb/V1/configurations/budget', 'fixture:/admin/v1_configuration_budget.json').as('V1_budget');
        cy.route('GET', '**/cbs/permissions/*', 'fixture:/admin/after_prime_contract_lock/commitment/view_commitment/cbs_permissions.json');
        cy.route('GET', '**/cmb/projects/team-members/*', 'fixture:/admin/team-members.json');
        cy.route('GET', '**/cmb/tenant_config', 'fixture:/admin/after_prime_contract_lock/commitment/all_cco/tenant_config.json').as('tenant_config')

        cy.route('GET', '**/cmb/project-template-association/manage/permissions', 'fixture:/admin/after_prime_contract_lock/commitment/cco/modify-cco/Modify-scope-new/manage_permissions.json').as('manage_permissions')
        cy.route('GET', '**/cmb/projects/config/*', 'fixture:/admin/before_prime_contract_lock/project_list_changes/projects_config.json').as('config');
        cy.route('GET', '**/cmb/projects/*', 'fixture:/admin/after_prime_contract_lock/commitment/cco/modify-cco/Modify-scope-new/cmb_projects.json').as('projects');
        cy.route('GET', '**/cbs/billing_period/validation_flags/**', '{"result":{"message":"There are no Billing Periods created for this Project. Please create a Billing Period or contact the Project Accountant for more details."}}').as('billing');
        cy.route('GET', '**/cbs/billing_period/*', '{"result":{"billing_period_template_id":null,"billing_period_template_name":null,"billing_period":[],"project_id":"1141"}}').as('billing');
        cy.route(
            'GET',
            '**/cbs/costing/project_budget/*/lock', { "is_prime_contract_locked": false, "can_unlock_budget": false, "actuals_history_id": null, "margin_analysis_history_id": null, "has_actauls_created": false, "has_margin_analysis_created": false }).as("false_lock");
        cy.route(
            "POST",
            "**/V1/token_validate",
            'fixture:/admin/login/tokenvalidate.json'
        );
        cy.server();
    });

    describe('before budget lock', () => {
        beforeEach(() => {
            cy.route('GET', '**/cbs/permissions/*', '{"scopemaster":{"import_csv":true,"add_line_item":true,"update":true,"read":true,"delete":true}}');
            cy.route(
                'GET',
                '**/api/users/tokenvalidate',
                'fixture:/admin/login/tokenvalidate.json'
            );

            cy.route(
                'GET',
                '**/cbs/costing/project_budget/*/lock', { "is_prime_contract_locked": false, "can_unlock_budget": false, "actuals_history_id": null }
            );

            cy.route(
                'GET',
                '**/cmb/projects/*',
                'fixture:/admin/project/project-details.json'
            ).as('projectDetail');
        });

        it('Title should be Project Budget ', () => {
            cy.get("[data-cy=menu_icon]").click({
                force: true
            });
            projectBudget.openProjectBudget();
            cy.route('GET', '**/cmb/V1/configurations/budget', 'fixture:/admin/v1_configuration_budget.json').as('V1_budget');

            cy.route(
                'GET',
                '**/cbs/costing/scopemaster_all_line_items',
                'fixture:/admin/after_prime_contract_lock/scopemaster.json'
            ).as('lineItem');

            cy.route(
                'GET',
                '**/cbs/costing/project_budget/*/line_item',
                'status: 404',
                'fixture:/admin/before_prime_contract_lock/line_item_before_import.json'
            );
            cy.wait(1000);
            cy.get(".nav-budget").contains("Project Budget").click({ force: true });
            cy.get('.top-head-txt').contains('Project Budget');
        });





    });

    describe('verify import csv , add line items before lock', () => {


        it('import XLSX', () => {
            cy.get('img[src="assets/katerra/images/katerra_Icons/Import CSV.svg"]').click({ force: true });
            cy.wait(2000);


            // Initial using yo upload files
            // cy.upload_file(
            //   Constants.FILE_UPLOAD,
            //   Constants.FILE_TYPE,
            //   "[data-cy=browse_file]"
            // );



            // testing upload

            cy.get('input[type=file]').then(subject => {
                cy.fixture("Budget-_v1_23D-Budget-_v1.xlsx", 'base64')
                    .then(Cypress.Blob.base64StringToBlob)
                    .then(blob => {
                        const el = subject[0];
                        const testFile = new File([blob], "Budget-_v1_23D-Budget-_v1.xlsx", {
                            type: "xslx document"
                        });
                        const dataTransfer = new DataTransfer();
                        dataTransfer.items.add(testFile);
                        el.files = dataTransfer.files;
                    });
            });




            // ends

            cy.wait(300);

            // eq(0) will return import button from import csv modal
            cy.route({
                method: 'POST',
                url: '**/cbs/costing/project_budget/import/*',
                // url: '**/cbs/costing/project_budget/*/line_item/bulk',
                response: 'fixture:/admin/before_prime_contract_lock/line_item_import_response.json',
                onResponse: () => {
                    Constants.verifyToastMessage(Constants.SUCCESS_CSV_UPLOAD);
                }
            }).as('lineItem');
            cy.route(
                'GET',
                '**/cbs/costing/project_budget/*/line_item',
                'fixture:/admin/before_prime_contract_lock/line_item_after_import.json'
            ).as("line");
            cy.get("[data-cy=import_csv]").click();
            cy.wait(5000);
        });







    });





});