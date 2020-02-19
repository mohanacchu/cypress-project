// /// <reference types="Cypress" />

// import * as Constants from '../pages/constants';
// import ConstructPage from '../pages/construct.po';
// import LoginPage from '../pages/login.po';


// describe('delete project in construct', () => {

//     let Construct;

//     beforeEach(() => {
//         Cypress.Cookies.preserveOnce('AGR_JWT_STRING_COOKIE', 'AGR_STRING_COOKIE')

//     });

//     before(() => {
//         cy.clearCookies();
//         Construct = new ConstructPage;
//         Constants.init();
//         Constants.constructlogin();


//     });



//     it('should check url', () => {
//         cy.url().should("include", "/Construct/preside/preside_proj_html.php");
//         cy.get('h3').contains('Project Directory');

//     });



//     it('navigate to the project list', () => {
//         Construct.expandList();
//         cy.get('.sidebar-menu').find('.treeview-menu').find('li').contains('Project Directory').click();
//         cy.wait(4000);


//     })

//     it('should filter the project', () => {
//         Construct.filterSearch(Constants.real_PROJECT_NAME);
//     });

//     it('delete the project', () => {
//         Construct.deleteProject(Constants.real_PROJECT_NAME);

//     });


//     after('after all', () => {
//         cy.clearCookies();

//     })

// });
