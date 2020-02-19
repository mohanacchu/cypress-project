class LoginPage {
    visitLogin() {
        // cy.visit('https://stg.construct.katerra.com/cms/login_html.php');
        // cy.visit('https://sfstg.construct.katerra.com/Construct/preside/preside_proj_html.php');
        cy.visit("https://stg.construct.katerra.com/cmf/dashboard?maintenance=true");
    }
    visitNonCsi() {
        cy.visit("https://stgtenant1.stg.construct.katerra.com/cb/scopemaster?maintenance=true");
    }
    fillEmail(value) {
        const email = cy.get("#email");
        email.clear();
        email.type(value);
        return email;
    }

    fillPassword(value) {
        "";
        const password = cy.get("#password");
        password.clear();
        password.type(value);
        return password;
    }

    login() {
        cy.get("#loginButton").click();
    }

    fillUserName(username) {
        cy.get("#username")
            .clear()
            .type(username);
    }

    fillPWD(password) {
        cy.get("#password")
            .clear()
            .type(password);
    }
    loginModal() {
        cy.get('button[label="Login"]')
            .first()
            .click();
    }

    fillManageUserName(username) {
        cy.get("[data-cy=loginUsername]")
            .clear()
            .type(username);
    }

    fillManagePWD(password) {
        cy.get("[data-cy=loginPassword]")
            .clear()
            .type(password);
    }

    manageConstructLogin() {
        cy.get("[data-cy=userLogin]").click();
    }
}

export default LoginPage;
