import * as Constants from '../pages/constants';


class ConstructPage {


    // static Project_Name = 'Budgeting_' + this.randomName(5);

    // static real_PROJECT_NAME = this.Project_Name;


    // Constants.real_PROJECT_NAME + this.randomName(5)
    static randomName(length) {

        if (randomName.result) {
            return randomName.result;
        }

        randomName.result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            randomName.result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return randomName.result;

    }






    projectName() {

        cy.get('.ptd-10 input').eq(0).clear().type(Constants.real_PROJECT_NAME, { force: true });
        // cy.get('.ptd-10 input').eq(0).clear().type(this.real_PROJECT_NAME, { force: true });
    }




    switchToBudgeting() {
        cy.get('.headerDrop').find('.fa-angle-down').click();
        cy.get('.dropdown-menu').find('li').first().find('a').click();
    }

    filterSearch(value) {
        cy.get('#example1_filter').find('input').type(value);
    }


    deleteProject(name) {
        cy.get('#example1').find('td').find('a').contains(name).click();
        cy.wait(4000);
        cy.get('button[title="Delete project"]').click();
        cy.wait(4000);
        cy.get('input[value="Delete Project"]').click();
    }



}


export default ConstructPage;
