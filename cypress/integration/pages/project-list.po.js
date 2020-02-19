class ProjectList {
    openBudgeting() {
        cy.get(".logo")
            .get(".headerDrop")
            .find(".fa-angle-down")
            .click();
        cy.get(".logo")
            .get(".headerDrop")
            .get(".dropdown-menu")
            .get(".user-header > a")
            .first()
            .click();
    }

    // searchProject() {
    //   cy.route("GET", "cmb/projects?search_text=budget&limit=50&offset=0").as(
    //     "projectsearch"
    //   );
    //   cy.get(".d-inline")
    //     .find("input")
    //     .should("have.attr", "placeholder", " Search")
    //     .type("Budget{uparrow}", { force: true });
    //   cy.wait(2000);
    //   cy.get("app-project-list")
    //     .find(".inline-display")
    //     .find("li")
    //     .contains("Project List")
    //     .click({ force: true });
    // }

    selectProjects(project) {
        cy.get(".search-box").click({ force: true })
        cy.get(".search-box").clear({ force: true })
        cy.get(".search-box").type(project)
    }

    selectProject(project) {
        // cy.get('#project-list')
        //   .get('.ui-table-scrollable-body-table')
        cy.get(".listData")
            .get(".textBlue")
            .contains(project)
            .click();
    }


    searchProject(project) {
        cy.get('.search-box').clear({ force: true });
        cy.get('.search-box').type(project, { force: true });
    }


}
export default ProjectList;
