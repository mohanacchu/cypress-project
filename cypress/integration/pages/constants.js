import LoginPage from "./login.po";
import ConstructPage from "./construct.po";
//export const PROJECT_NAME = "web-automation-132";
export const PROJECT_NAME = "web-automation-1";
export const BILLING_PROJECT_NAME = "Web-Automation-2";
export const BILLING_EXTERNAL_PROJECT_NAME = "Automation123";

export const FILE_UPLOAD = "Budget-_v1_23D-Budget-_v1.xlsx";
export const FILE_UPLOAD_ACTUALS = "207-E Actuals Import CSV";
export const FILE_TYPE = "XLSX document";
export const COMPANY = "Katerra";
export const USER_LOGIN = "Katerra Admin";
export const URL_PROJECT_LIST =
    "https://dev.construct.katerra.com/cb/dashboard/projectlist";

// scope master
export const NEW_SCOPE_MASTER_NAME = "Operation and Maintenance of Art";
export const NEW_SCOPE_MASTER_CODE = "120125";

export const NEW_LEAF_SCOPE_MASTER_NAME = "Manufactured Panels";
export const NEW_LEAF_SCOPE_MASTER_CODE = "920022";

// export budget
export const EXPORT_BUDGET_SUCCESS = "Project Budget Downloaded Successfully";

// budget modification
export const BUDGET_MODIFICATION_FROM_PARENT_ITEM = "Construction Fee";
export const BUDGET_MODIFICATION_FROM_CHILD_ITEM = "test";
export const BUDGET_MODIFICATION_TO_PARENT_ITEM = "General Requirements";
export const BUDGET_MODIFICATION_TO_CHILD_ITEM = "General Requirements - ABC";
export const BUDGET_MODIFICATION_SUCCESS =
    "Budget Modification Created Successfully";

export const ERROR_MESSAGE_SELECT_NODE = "Please select the line items";

export const ERROR_MESSAGE_SELECT_POSITIVE_AMOUNT =
    "Please enter positive transfer amount only";

export const UPDATE_BUDGET_SUCCESS = "successfully updated";

// edit line item
export const EDIT_LINE_CODE = "010000";

export const ADD_LINE_ITEM = "020000";

// when changing value of ADD_NEW_PARENT_LINE_ITEM also change value of ADD_NEW_LEAF_LINE_ITEM
export const ADD_NEW_PARENT_LINE_ITEM = "040000";
export const ADD_NEW_LEAF_LINE_ITEM = "040600";

// when changing value of DELETE_PARENT_COST_CODE also change DELETE_CHILD_COST_CODE
export const DELETE_PARENT_COST_CODE = "010000";

export const DELETE_CHILD_COST_CODE = "010002";

// delete line item from table
export const DELETE_COST_CODE = "000000";

// prime contract lock

export const WARNING_LOCK_PRIME_CONTRACT =
    "Prime Contract Lock will lock the Original Budget column. This column will not be editable anymore. Would you like to continue?";
export const SUCCESS_LOCK_PRIME_CONTRACT = "Prime Contract locked successfully";

/************************ Error Messages Variables ***********************/

// scope master error messages
export const ERROR_NAME_CODE_BLANK =
    "Name and code fields cannot be left blank";

export const ERROR_NAME_BLANK = "Name field cannot be left blank";
export const ERROR_CODE_BLANK = "Code field cannot be left blank";
export const ERROR_INVALID_CODE = "Invalid Cost Code";
export const ERROR_CODE_ALREADY_EXISTS =
    "Item Cost Code already exists.Unique cost code is required";

// prime contract error messages

export const ERROR_MESSAGE_PRIME_CONTRACT_CO =
    "Please lock the Prime Contract to start creating Change Orders";

export const ERROR_MESSAGE_PRIME_CONTRACT_PA =
    "Please lock the Prime Contract to start creating Pay Applications";

// commitments error messages

export const SUCCESS_LINE_ITEM_ADDED = "Line Items added successfully";

export const SUCCESS_DELETE_SOV_LINE_ITEM = "successfully deleted";

export const MODIFY_LINE_ITEM_DELETE =
    "General Requirements successfully deleted";

export const MODIFY_LINE_ITEM_ZERO_VALUE =
    "Requested Quantity should not be zero for any line item";

export const MESSAGE_SOV_COMPANY_NO = "You have rejected";
export const ERROR_MESSAGE_COMMITMENT_CO =
    "commitment in order to start creating a Commitment Change order.";

export const ERROR_MESSAGE_COMMITMENT_RE =
    "commitment in order to start creating Requisitions.";

export const SUCCESS_REQUISITION = "Requisition created successfully";

export const ERROR_MESSAGE_LOCK_SUB_CONTRACT =
    "Sub Contractor SOV cannot be locked until the Prime Contract has been locked. Please lock the Prime Contract to proceed.";

export const ERROR_NO_SUBCONTRACT =
    "There are no sub contractors assigned in the budget. Please assign Sub Contractors in the budget to proceed.";

/************SOV **************/

export const ERROR_SAVE_UNSAVED = "Please save the unsaved changes";

/**************** General Details  Message *******************/

export const ERROR_MESSAGE_MANDATORY_FIELDS =
    "Please fill out the mandatory fields";

export const ERROR_MESSAGE_TITLE = "Title is required.";
export const ERROR_MESSAGE_CLIENT = "Owner/Client is required.";

export const ADD_SUCCESS_SAVED_CHANGED = "Changes Saved Successfully";
export const SUCCESS_SAVED_CHANGED = "Changes saved successfully";

export const SUCCESS_PRIME_CONTRACT_CREATED =
    "Prime Contract successfully created";

export const ERROR_SELECT_COMPANY = "Please select a company to proceed.";
export const SUCCESS_COMMITMENT = "Sub contract successfully created";

/**************** Change order *******************/

export const ERROR_MESSAGE_CO_VALUE_NOT_ZERO =
    "Change Order Value cannot be zero";

export const ERROR_MESSAGE_INVOICE_NUMBER = "Invoice number is required";
export const ERROR_MESSAGE_REASON = "Reason is required.";

/***Requisition**/
export const ERROR_MESSAGE_Billing_Period = "Billing Period is required";
export const ERROR_MESSAGE_Bill_Title = "Bill Title is required";
export const ERROR_MESSAGE_RETAINAGE_COMPLETED =
    "value should not be greater than 100";
export const ERROR_MESSAGE_RETAINAGE_STORED_MATERIAL =
    "value should not be greater than 100";

export const ERROR_MESSAGE_LINE_ITEM =
    "Change order cannot be created without any line items";
export const ERROR_MESSAGE_LINE_ITEM_PCO =
    "Potential change order cannot be created without any line items";

export const REQUIRED_QUANTITY_ADD_LINE =
    "Required Quantity field should not be empty for any line item.";

export const LINE_ITEM_DELETED_SUCCESSFULLY = "successfully deleted";

export const ERROR_MESSAGE_MODIFY_LINE_ITEM =
    "All line items have same Quantity and Rate";

export const ERROR_MESSAGE_REQUISITION_LINE_ITEM =
    "All line items have 0 Work Completed(this period)";

export const ERROR_PAYMENT_APPLICATION_REQUISITION_LINE_ITEM =
    "Pay Application cannot be created without any line items.";

export const ERROR_MESSAGE_WORKFLOW = "Please fill the Workflow Details";

export const SUCCESS_ADD_ITEM_FROM_SCOPE_MASTER = "successfully";
export const SUCCESS_ADD_ITEM_FROM_SCOPE_MASTER_COMMITMENT_SOV =
    "Selected line items added successfully";

export const SUCCESS_DELETE_ITEM_FROM_CO_SCOPE_MASTER = "successfully deleted";

export const SUCCESS_CHANGE_ORDER_CREATED = "Change Order created successfully";
export const SUCCESS_COMMITMENT_LOCK =
    "Commitment locked for a Company is successful";

// project budget modification error message
export const ERROR_MESSAGE_SELECT_CHILD = "Please select the child Line item!";

export const ERROR_MESSAGE_REQUIRED = "required";

export const ERROR_MESSAGE_SELECT_FROM_FIELD_FIRST =
    "Please select the From field first";

export const ERROR_MESSAGE_UNSAVED = "Please fill the unsaved line item!";

// successfully

export const SUCCESS = "successfully";
// CSV upload successfully

export const SUCCESS_CSV_UPLOAD = "xlxs uploaded successfully";

// Template downloaded successfully

export const SUCCESS_DOWNLOAD_TEMPLATE =
    "Budget Template Downloaded Successfully";

// billing template error messages
export const CREATE_TEMPLATE_MANDATORY =
    "Please fill out all the Mandatory fields";

export const NAME_UNIQUE = "Name must be unique.";

export const SUCCESS_MESSAGE = "Billing template created.";
export const SUCCESS_MESSAGE_UPDATE = "Billing template updated.";
/************************** Pay Application *****************************/

export const ERROR_REQUIRED_INVOICE = "Invoice Number is required";
export const ERROR_REQUIRED_BILLING_PERIOD = "Billing Period is required";
export const ERROR_REQUIRED_BILL_TITLE = "Bill Title is required";
export const ERROR_REQUIRED_LINE_ITEM =
    "Pay Application cannot be created without any line items";
export const ERROR_MESSAGE_PAY_APPLICATION =
    "Pay Application cannot be created without any line items";

export const ERROR_ALREADY_USE_IN_PAY =
    "Line item is already being used in pay_in Request _id";

export const SUCCESS_CREATED_PAYMENT = "Payment created successfully";

/************************** END *****************************/

export const openLeftSidebar = () => {
    cy.get("[data-cy=menu_icon]").click({
        force: true
    });
    cy.wait(1500);
};

// export const login = () => {
//   init();
//   const login = new LoginPage();
//   login.visitLogin();
//   login.fillEmail("admin@katerra.com");
//   login.fillPassword("123456");
//   login.login();
// };
// crdentials changed

export const login = () => {
    init();
    const login = new LoginPage();
    login.visitLogin();
    login.fillEmail("katerra.qa4@gmail.com");
    login.fillPassword("Katerra@123");
    login.login();
};

export const loginNonCsi = () => {
    init();
    const login = new LoginPage();
    login.visitNonCsi();
    login.fillUserName("katerra.qa4@gmail.com");
    login.fillPWD("Katerra@123");
    login.loginModal();
};
/********************Talking to real api  *******************/
//export const random_Name = ConstructPage.real_PROJECT_NAME;

//export const real_PROJECT_NAME = "cypress-budgeting-" + Math.random();

// export const fetch_project_Name = localStorage.setItem(
//   "real_api_project_name",
//   real_PROJECT_NAME
// );

// export const get_project_Name = localStorage.getItem("real_api_project_name");

// console.log(real_PROJECT_NAME.result);
export const real_PROJECT_NAME = "10000_tasks(DND)";
export const real_PRIME_NAME = "10000_tasks(DND)";

export const external_PROJECT_NAME = "Budget-Real-API-Automation";

export const realloginModal = () => {
    cy.server();
    const login = new LoginPage();
    //login.visitLogin();
    cy.visit("/");

    login.fillEmail("katerra.qa4@gmail.com");
    login.fillPassword("Katerra@123");
    login.login();
    cy.wait(3000);
};
export const externalloginModal = (userName, password) => {
    cy.server();
    cy.route('POST', '**/cmb/V1/token_validate').as('token');
    cy.route('GET', '**/cmb/V1/tenant/endpoints').as('endpoints');
    cy.route('GET', '**/cmb/projects').as('projects');
    cy.route('GET', '**/cbs/permissions').as('permission')
    const login = new LoginPage();
    cy.visit("/");
    login.fillUserName(userName);
    login.fillPWD(password);

    login.loginModal();
    cy.wait('@permission')
};

export const BudgetrealloginModal = () => {
    cy.server();
    const login = new LoginPage();
    cy.visit("/");
    login.fillUserName("katerra.qa4@gmail.com");
    login.fillPWD("Katerra@123");

    login.loginModal();
};

export const constructlogin = () => {
    cy.server();
    const login = new LoginPage();
    login.visitLogin();
    login.fillEmail("admin@katerra.com");
    login.fillPassword("123456");
    login.login();

    // cy.route('GET','**/api/users/tokenvalidate').as('validate');
    // cy.route('GET','**/api/users/projects').as('projectList');
    // cy.route('GET','**/V1/tenant/endpoints').as('endpoints');
    // cy.route('POST','**/api/login').as('login');
    // cy.route('GET','**/api/budget_permissions').as('permission');

    // login.loginModal();

    //cy.wait(['@login','@endpoints','@projectList']);
    // cy.wait(['@validate', '@permission']);
};

// construct manage login
export const manageLogin = () => {
    cy.server();
    const login = new LoginPage();
    login.fillManageUserName("katerra.qa4@gmail.com");
    login.fillManagePWD("Katerra@123");
    login.manageConstructLogin();
};

/***************************ends **********************/

export const loginModal = () => {
    cy.task("log", "login page visited");
    // cy.screenshot();
    cy.server();
    const login = new LoginPage();
    cy.visit("/");
    login.fillUserName("katerra.qa4@gmail.com");
    login.fillPWD("Katerra@123");

    cy.route(
        "GET",
        "**/cmb/projects",
        "fixture:/admin/before_prime_contract_lock/project_list_changes/projects.json"
    ).as("projectList");
    cy.route(
        "GET",
        "**/cmb/projects?offset=0&limit=50",
        "fixture:/admin/before_prime_contract_lock/project_list_changes/projects_50.json"
    ).as("projectList");

    cy.route('GET', '**/cbs/permissions', '{"scopemaster":{"import_csv":true,"add_line_item":true,"update":true,"read":true,"delete":true}}');


    cy.route(
        "GET",
        "**/V1/tenant/endpoints",
        "fixture:/admin/endpointes.json"
    ).as("end_point");

    cy.route(
            "POST",
            "**/cmb/V1/login",
            "fixture:/admin/login/new_login-response.json"
        ).as("login")
        // cy.route({
        //     method: "POST",
        //     url: "**/cmb/V1/login",
        //     response: "fixture:/admin/login/new_login-response.json"
        // }).as("login").then((resp) => {
        //     window.localStorage.setItem('token', resp.response.success)
        // })
    cy.route(
        "GET",
        "**/cmb/tenant_config",
        "fixture:/admin/after_prime_contract_lock/commitment/all_cco/tenant_config.json"
    ).as("tenant_config");
    cy.route(
        "GET",
        "**/cbs/permissions/*",
        '{"scopemaster":{"import_csv":true,"add_line_item":true,"update":true,"read":true,"delete":true}}'
    );

    cy.route(
        "POST",
        "**/V1/token_validate",
        "fixture:/admin/before_prime_contract_lock/project_list_changes/tokenvalidate.json"
    ).as("tokenvalidate");
    cy.route(
        "GET",
        "**/cmb/project-template-association/manage/permissions",
        "fixture:/admin/before_prime_contract_lock/project_list_changes/manage_permission.json"
    ).as("manage_permission");

    cy.route(
        "GET",
        "**/cmb/projects/config/*",
        '{"response":{"temperature":"FAHRENHEIT","speed":"mph","rainfall":"INCHES","currency":"USD","format":"Millions"}}'
    );

    cy.route({
        method: "GET",
        url: "**/cmb/projects/undefined",
        status: 400,
        response: '{"error":"Project does not exist"}'
    });

    cy.route(
        "GET",
        "**/api/budget_permissions",
        '{"scopemaster":{"import_csv":true,"add_line_item":true,"update":true,"read":true,"delete":true}}'
    ).as("budget_permission");

    login.loginModal();
    // cy.screenshot();
    cy.task("log", "logged into the page");
    // cy.screenshot();

    cy.wait(["@login", "@end_point"]);
};

/**
 * * configure cypress and ADD_LINE_ITEM new methods
 */
export const init = () => {
    Cypress.config("requestTimeout", "30000");
    Cypress.config("responseTimeout", "30000");
    // Cypress.config("pageLoadTimeout", "150000");
    Cypress.config("pageLoadTimeout", "350000");
};

/**
 * * expand node to select leaf node
 * @param selectedElement  element to expand the row
 */
export const expandNode = selectedElement => {
    selectedElement
        .parent("td")
        .parent(".ui-treetable-row")
        .find("a")
        .click({
            force: true
        });
};

export const verifyToastMessage = message => {
    cy.get("body").then(body => {
        if (body.find(".ui-growl-message").length > 0) {
            cy.wrap(body)
                .find(".ui-growl-message")
                .find("p")
                .invoke("text")
                .then(text => {
                    const toastText = text;
                    expect(toastText).to.contain(message);
                });
        }
    });
};
export const getPageTitle = () => cy.get(".breadcrumz-title");
