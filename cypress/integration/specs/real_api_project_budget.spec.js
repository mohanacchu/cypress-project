/// <reference types="Cypress" />

import * as Constants from '../pages/constants';
import ProjectBudget from '../pages/project-budget.po';
import ProjectList from '../pages/project-list.po';
import Sidebar from '../pages/sidebar.po';
import ConstructPage from '../pages/construct.po';

describe('Project Budget', () => {
    let projectBudget;
    let projectList;
    let sidebar;

    before(() => {
        projectBudget = new ProjectBudget();
        projectList = new ProjectList();
        sidebar = new Sidebar();

        Constants.init();
        Constants.externalloginModal("katerra.qa4@gmail.com", "Katerra@123");


        cy.route(
            'GET',
            '**/cmb/projects/*',
        ).as('projectDetail');

        cy.route("GET", "**/cmb/projects/team-members/272?sort=1").as("users");

        cy.route("GET", "**/cbs/permissions/272").as("budget");

        cy.route(
            "GET",
            "**/cmb/projects/config/*", );
        cy.route(
            "GET",
            "**/cmb/project-template-association/manage/permissions", );
        projectList.selectProject(Constants.real_PROJECT_NAME);
        cy.wait('@projectDetail');
    });

    beforeEach(() => {
        cy.server();
        cy.route("GET", "**/cbs/permissions/*").as("budget");

        cy.route(
            "POST",
            "**/V1/token_validate",
        );

        cy.route(
            'GET',
            '**/cbs/costing/project_budget/*/lock',
        );
        cy.route("GET", "**/cbs/permissions/272").as("budget");

        cy.route('GET', '**/api/users/tokenvalidate');

        cy.route('GET', '**/cbs/costing/project_budget/*/lock');

        cy.route('GET', '**/cmb/projects/*').as('projectDetail');

        cy.server();
    });


    it('Title should be Project Budget ', () => {
        Constants.openLeftSidebar();

        cy.route('GET', '**/api/config/budget_configuration').as('config');
        cy.route('GET', '**/cbs/costing/project_budget/*/line_item').as('singleline')
        cy.route('GET', '**/cbs/costing/scopemaster_all_line_items').as('alllineitem')

        projectBudget.openProjectBudget();
        cy.get(".nav-budget").contains("Project Budget").click();
        cy.wait(['@singleline']);

        cy.get('.top-head-txt').contains('Project Budget');
    });


    describe('Project budget menu', () => {


        it('import Xslx', () => {
            cy.route({
                method: 'POST',
                url: '**/cbs/costing/project_budget/*/line_item/bulk',
                onResponse: () => {
                    Constants.verifyToastMessage(Constants.SUCCESS_CSV_UPLOAD);
                }
            }).as('plineItem');
            //  eq(1) return import csv menu element from right sidebar and click on that element
            cy.get('img[src="assets/katerra/images/katerra_Icons/Import CSV.svg"]').click({ force: true });
            cy.upload_file(
                Constants.FILE_UPLOAD,
                Constants.FILE_TYPE,
                '[data-cy=browse_file]'
            );

            cy.route('GET', '**/cbs/costing/project_budget/*/line_item').as('csv');

            // every line item

            cy.route(
                'GET',
                '**/cbs/costing/project_budget/*/line_item/15420272633441');

            cy.route(
                'GET',
                '**/cbs/costing/project_budget/*/line_item/1542027263347268'
            );

            cy.route(
                'GET',
                '**/cbs/costing/project_budget/*/line_item/15420272634026587'
            ).as('15420272634026587');

            //  cy.get('[data-cy=import_csv]').click();
            cy.get(".p-btn").contains("Import").click();

            cy.wait(['@csv']);
            cy.wait(2000);
        });


    });





});