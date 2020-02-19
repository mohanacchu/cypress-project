// /// <reference types="Cypress" />

// import * as Constants from '../pages/constants';
// import ConstructPage from '../pages/construct.po';
// import LoginPage from '../pages/login.po';
// import { real_project_name } from '../../support/index';


// describe('create project in construct', () => {

//     let Construct;
//     let login;

//     beforeEach(() => {
//         // Cypress.Cookies.preserveOnce('AGR_JWT_STRING_COOKIE', 'AGR_STRING_COOKIE')
//         cy.server()
//             // cy.route("GET", "**/cmb/project-template-association/manage/permissions").as('permission')
//             // cy.route('GET', '**/cmb/V1/configurations/project').as('project')

//     });

//     before(() => {
//         // cy.clearCookies();
//         cy.server()
//         Construct = new ConstructPage;
//         login = new LoginPage;
//         Constants.init();
//         cy.route("GET", "**/api/users/tokenvalidate").as('token')
//         cy.route("GET", "**/cmb/project-template-association/manage/permissions").as('permission')
//             // cy.route("GET", "**/cmb/projects/*").as("projectDetail");
//             // cy.route("GET", "**/api/projects/users/*").as("users");
//         cy.route("GET", "**/V1/tenant/endpoints").as('endpoints')
//         Constants.realloginModal();
//         cy.wait(['@permission', '@token', '@endpoints'])

//         cy.server()

//     });




//     it('expand create a project', () => {


//         cy.server()
//         cy.route("GET", "**/cmb/project-template-association/manage/permissions").as('permission')

//         cy.route('GET', '**/cmb/V1/projects?limit=50&offset=0&disabled=1').as('project1')
//         cy.get(':nth-child(1) > [data-cy=sideNavMenu] > a.ng-star-inserted > span').click();

//         // cy.get('[data-cy=sideNavMenu]').find('span').contains('Project Directory').click({ force: true })
//         cy.wait(['@permission', '@project1']);
//         cy.get('.content-header').contains('Project Directory').should('be.visible');
//     });

//     it('click on add new to add new project', () => {
//         cy.route("GET", "**/cmb/project-template-association/manage/permissions").as('permission')
//         cy.route("GET", "**/cmb/V1/configurations/project").as('project')

//         cy.get('.col-lg-8 > .btn').click();
//         cy.wait(['@permission', '@project']);
//     })


//     it('fill the required fields and create project', () => {
//         cy.get('.ptd-10 input').eq(0).clear().type(real_project_name, { force: true });
//         cy.get('.ptd-10').find('p-dropdown').find('.pi-chevron-down').click({ force: true });
//         cy.get('.ui-dropdown-list').find('li').contains('Design').click({ force: true })
//         cy.get('.ql-editor').type('Budget real-api Automation');
//         cy.get('.col-10 > .btn').click();

//     })





// });
