// /// <reference types="Cypress" />
// import Attachment from "../pages/attachment.po";
// import Construct from "../pages/construct.po";
// import * as Constants from "../pages/constants";
// import GeneralDetails from "../pages/general-details.po";
// import ProjectList from "../pages/project-list.po";
// import Sidebar from "../pages/sidebar.po";
// import { real_project_name } from "../../support/index";

// describe("Prime contract general information", () => {
//   let generalDetails;
//   let sidebar;
//   let attachment;

//   before(() => {
//     generalDetails = new GeneralDetails();
//     const projectList = new ProjectList();
//     attachment = new Attachment();
//     sidebar = new Sidebar();
//     Constants.init();
//     Constants.BudgetrealloginModal();
//     cy.route("GET", "**/cbs/permissions/272");
//     cy.route("GET", "**/cmb/projects/*").as("projectDetail");
//     cy.route("GET", "**/cmb/projects/team-members/272?sort=1").as("users");
//     cy.route("GET", "**/cmb/projects/config/*");

//     projectList.selectProject(Constants.real_PROJECT_NAME);
//     cy.wait("@projectDetail");
//   });

//   beforeEach(() => {
//     cy.server();
//     cy.route("GET", "**/cbs/billing_period/*").as("billing");
//     cy.route(
//       "GET",
//       "**/cmb/project-template-association/manage/permissions"
//     ).as("manage");

//     cy.route("GET", "**/cbs/permissions/272");
//     cy.route("GET", "**/cmb/projects/undefined");
//      cy.route("POST","**/V1/token_validate");//     cy.route("GET", "**/cbs/costing/project_budget/*/lock");
//     cy.server();
//   });

//   describe("Create prime contract General Details", () => {
//     before(() => {
//       cy.route("GET", "**/cbs/costing/project_budget/*/lock");
//       cy.route("GET", "**/cbs/costing/companies");
//       cy.route("GET", "**/cmb/projects/team-members/272?sort=1").as("users");
//       cy.route("GET", "**/api/config/budget_configuration");
//       cy.route("GET", "**/cmb/V1/distribution-list").as("group");
//       cy.route(
//         "GET",
//         "**/cmb/project-template-association/manage/permissions"
//       ).as("manage");

//       cy.route({
//         method: "GET",
//         status: "400",
//         url: "**/cbs/costing/prime_contract/*"
//       }).as("costing");
//       cy.route("GET", "**/cbs/permissions/272");
//       sidebar.primeContractGeneralDetails();
//       cy.wait(["@manage", "@group"]);
//     });

//     it("should contain following fields", () => {
//       cy.get(".labelfield").contains("Number");
//       cy.get(".labelfield").contains("Title");
//       cy.get(".labelfield").contains("Owner/Client");
//       cy.get(".labelfield").contains("Architect/Engineer");
//       cy.get(".labelfield").contains("Status");
//       cy.get(".labelfield").contains("Distribution List");
//       cy.get(".labelfield").contains("Description");
//       cy.get(".labelfield").contains("Start Date");
//       cy.get(".labelfield").contains("Estimated  Completion Date");
//       cy.get(".labelfield").contains("Actual Completion Date");
//       cy.get(".labelfield").contains("Signed Contract Received date");
//       cy.get(".labelfield").contains("Contract Termination Date");
//     });
//     it("verify attachment scenarios in create  page", () => {
//       cy.route("GET", "**/cbs/task_attachments/*");
//       cy.route("POST", "**/cbs/task_attachments/*/budget");
//       cy.route("POST", "**/cfm/s3/upload_info");
//       cy.route("POST", "**/cfm/s3/upload_info");

//   cy.route("GET", "**/V1/project/*/albums").as("albumList");//       cy.route(
//         "GET",
//         "**/cdb/cur_drawing_folder/*/current_drawing?page=1&limit=900&search="
//       ).as("pdf");

//       cy.route(
//         "GET",
//         "**/cdb/project/228/cur_drawing_folder?page=1&limit=900&search="
//       ).as("listDrawing");
//       cy.route("GET", "**/api/documents/listDocuments/*").as("listDocument");

//       cy.get("label")
//         .contains("Attachment")
//         .click();
//       cy.wait(2000);

//       // open album tab
//       attachment.openAlbumsTab();
//       cy.wait(1000);

//       cy.get("app-albums")
//         .find(".album-list")
//         .find(".album-name")
//         .contains("Real_API")
//         .click({ force: true });
//       //again select photo
//       cy.get("app-albums")
//         .find(".icon-check-box")
//         .eq(0)
//         .click({ force: true });
//       cy.get("app-albums")
//         .find(".icon-check-box")
//         .eq(1)
//         .click({ force: true });

//       // open document tab and select document from list
//       attachment.openDocumentsTab();
//       cy.wait(1000);

//       cy.get("app-attachments")
//         .find("p-tree")
//         .find(".fa-caret-right")
//         .eq(0)
//         .click({ force: true });
//       cy.get("app-attachments")
//         .find("p-tree")
//         .find(".fa-caret-right")
//         .eq(0)
//         .click({ force: true });
//       cy.wait(500);
//       cy.get("app-attachments")
//         .find("p-tree")
//         .find("span")
//         .contains("CSI_budget (1)")
//         .click({ force: true });
//       cy.get("app-attachments")
//         .find("p-tree")
//         .find("span")
//         .contains("Non_CSI (1)")
//         .click({ force: true });

//       // open drawing and select drawing from list

//       attachment.openDrawingsTab();
//       cy.wait(1000);

//       cy.get("app-attachments")
//         .find("p-tree")
//         .find(".fa-caret-right")
//         .eq(0)
//         .click({ force: true });
//       cy.wait(3000);
//       cy.get("app-attachments")
//         .find("p-tree")
//         .find("p-treenode > li")
//         .eq(1)
//         .click();
//       // upload photo from local
//       attachment.openFromLocalTab();

//       cy.upload_image("nature6@#.jpeg", "input[type=file]");

//       cy.get(".attachment-error")
//         .invoke("text")
//         .then(value => {
//           expect(value).to.includes(
//             "Warning : Attachment names cannot contain the following Special Characters"
//           );
//         });

//       cy.upload_image(
//         "Budget _v1_23D - Budget _v1_23D.csv",
//         "input[type=file]"
//       );
//       cy.get("app-action-panel").should("be.visible");
//       cy.get("app-attachments")
//         .contains("Save")
//         .click();

//       cy.contains("6 Attachment(s) added");

//       cy.route("GET", "**/cbs/commitment/list/**");

//       // open modal
//       cy.get("label")
//         .contains("Attachment")
//         .click({ force: true });

//       // check list count
//       cy.get(".fa-eye").should("have.length", 5);

//       // eye icon should have title attribute
//       cy.get(".fa-eye")
//         .eq(0)
//         .parent("span")
//         .should("have.attr", "title", "View file");

//       //delete attachment from modal
//       cy.get(".fa-trash")
//         .eq(3)
//         .click({ force: true });
//       cy.get("app-attachments")
//         .contains("Save")
//         .click({ force: true });
//     });
//     it("should display title is required", () => {
//       generalDetails.create();
//       cy.get(".requiredError")
//         .eq(0)
//         .should("have", Constants.ERROR_MESSAGE_TITLE);
//       cy.get(".requiredError")
//         .eq(1)
//         .should("have", Constants.ERROR_MESSAGE_CLIENT);
//       Constants.verifyToastMessage(Constants.ERROR_MESSAGE_MANDATORY_FIELDS);
//     });

//     it("set Number", () => {
//       generalDetails.fillRequestNumber("123456", "#requestnumberID");
//     });

//     it("set Title", () => {
//       generalDetails.fillTitle("Automation");
//     });

//     it("select status", () => {
//       generalDetails.selectOptionFromDropdown("status", "Out for bid");
//     });

//     it("select engineer", () => {
//       generalDetails.selectEngineer("engineer3", "Raj");
//       cy.get(".breadcrumz-title")
//         .contains("Prime Contract")
//         .click();
//     });

//     it("select the company", () => {
//       cy.get("[data-cy=pc-client-ac]").should(
//         "have.attr",
//         "placeholder",
//         "Enter Company Name"
//       );

//       cy.route("GET", "**cmb/companies/suggestion/_list?q=Kat&active=true").as(
//         "company"
//       );
//       cy.wait(2000);

//       cy.get("[data-cy=pc-client-ac]")
//         .find("input")
//         .clear({ force: true })
//         .type("Kat", { force: true });
//       cy.wait("@company");

//       cy.get("p-autocomplete")
//         .find("li")
//         .contains("Katerra Inc")
//         .click({ force: true });
//     });

//     it("open distribution list modal and close using close button ", () => {
//       cy.get("[data-cy=pc-dl]").click({ force: true });
//       cy.get("#distributionPopup")
//         .find(".attach-close")
//         .click({ force: true });
//     });

//     it("enter description", () => {
//       cy.typeCkeditor("<p>HTML body</p>");
//     });

//     it("select start date", () => {
//       cy.get("[data-cy=pc-st-dt]")
//         .click()
//         .find("td")
//         .contains("10")
//         .click();
//     });

//     it("select estimated completion date", () => {
//       cy.get("[data-cy=pc-ec-dt]")
//         .click()
//         .find("td")
//         .contains("10")
//         .click();
//     });

//     it("select actual completion  date", () => {
//       cy.get("[data-cy=pc-ac-dt]")
//         .click()
//         .find("td")
//         .contains("10")
//         .click();
//     });

//     it("select signed contract received date", () => {
//       cy.get("[data-cy=pc-scr-dt]")
//         .click()
//         .find("td")
//         .contains("10")
//         .click();
//     });

//     it("select contract termination date", () => {
//       cy.get("[data-cy=pc-ct-dt]")
//         .click()
//         .find("td")
//         .contains("10")
//         .click();
//     });

//     it("should create general info", () => {
//       cy.route({
//         method: "POST",
//         url: "**/cbs/costing/prime_contract/*",
//         onResponse: () => {
//           Constants.verifyToastMessage(Constants.SUCCESS_COMMITMENT);
//         }
//       }).as("create");
//       cy.route("POST", "**/cbs/task_attachments/*/budget").as("attachment");
//       cy.route("GET", "**/cbs/task_attachments/*").as("getAttachment");

//       cy.get("[data-cy=pc-gi-create]").click({ force: true });
//       cy.wait(["@create", "@getAttachment"]);
//     });
//   });

//   /**
//    *
//    * Edit General Information
//    *
//    */

//   describe("Edit General Details", () => {
//     it("click on cancel button and exit from edit mode", () => {
//       cy.get("[data-cy=pm-gi-edit]").click({ force: true });
//       generalDetails.fillRequestNumber("4566323", "#requestnumberID");
//       generalDetails.fillTitle("edited title");

//       cy.route("GET", "**/cbs/costing/prime_contract/*").as("editInfo");
//       cy.route("GET", "**/cbs/task_attachments/*").as("task");
//       cy.get("[data-cy=pc-gi-cancel]").click();
//       cy.wait(["@editInfo", "@task"]);
//       cy.get("#titleID").should("not.contain", "edited title");
//       cy.get("#requestnumberID").should("not.contain", "4566323");
//     });

//     it("title field can not be empty", () => {
//       cy.get("[data-cy=pm-gi-edit]").click({ force: true });

//       cy.get("#titleID").clear({
//         force: true
//       });

//       generalDetails.update();
//       cy.get(".requiredError")
//         .eq(0)
//         .should("have", Constants.ERROR_MESSAGE_TITLE);
//       Constants.verifyToastMessage(Constants.ERROR_MESSAGE_MANDATORY_FIELDS);
//     });
//     it("edit attachments", () => {
//   cy.route("GET", "**/V1/project/*/albums").as("albumList");//       cy.route("GET", "**/api/annotations/listDrawings/*").as("listDrawing");
//       cy.route("GET", "**/api/documents/listDocuments/*").as("listDocument");
//       cy.route("POST", "**/cbs/task_attachments/*/budget");
//       cy.route("POST", "**/cfm/s3/upload_info");
//       cy.get("label")
//         .contains("Attachment")
//         .click({
//           force: true
//         });
//       //selected files

//       cy.get("app-selected-files").contains("Tattoo.png");
//       cy.get("app-selected-files").contains("Subscribe.png");
//       cy.get("app-selected-files").contains("CSI_budget (1).csv");
//       cy.get("app-selected-files").contains("fact, - make a.pdf");
//       cy.get("app-selected-files").contains(
//         "Budget _v1_23D - Budget _v1_23D.csv"
//       );

//       // open album tab
//       attachment.openAlbumsTab();

//       //change album name
//       cy.get("app-albums")
//         .find(".album-list")
//         .find(".album-name")
//         .contains("Real_API")
//         .click({
//           force: true
//         });
//       //again select photo
//       cy.get("app-albums")
//         .find(".icon-check-box")
//         .eq(2)
//         .click({
//           force: true
//         });

//       // open document tab and select document from list
//       attachment.openDocumentsTab();
//       cy.get("app-attachments")
//         .find("p-tree")
//         .find(".fa-caret-right")
//         .eq(0)
//         .click({
//           force: true
//         });
//       cy.get("app-attachments")
//         .find("p-tree")
//         .find(".fa-caret-right")
//         .eq(0)
//         .click({
//           force: true
//         });
//       cy.get("app-attachments")
//         .find("p-tree")
//         .find("span")
//         .contains("Non_CSI_Actuals (1)")
//         .click({
//           force: true
//         });

//       // upload photo from local
//       attachment.openFromLocalTab();

//       cy.upload_image("nature6@#.jpeg", "input[type=file]");
//       cy.wait(500);

//       cy.get(".attachment-error")
//         .invoke("text")
//         .then(value => {
//           expect(value).to.includes(
//             "Warning : Attachment names cannot contain the following Special Characters"
//           );
//         });

//       cy.upload_image("tattoo.png", "input[type=file]");

//       cy.get("app-action-panel").should("be.visible");
//       cy.get("app-attachments")
//         .contains("Save")
//         .click({
//           force: true
//         });
//       cy.contains("8 Attachment(s) added");

//       cy.wait(2000);

//       cy.route(
//         "GET",
//         "**/cbs/commitment/list/**",
//         "fixture:/admin/after_prime_contract_lock/commitment/general_details/after_sov_lock_general_details_commitment_list.json"
//       );

//       // open modal
//       cy.get("label")
//         .contains("Attachment")
//         .click({
//           force: true
//         });

//       cy.get(".fa-eye").should("have.length", 7);

//       // eye icon should have title attribute
//       cy.get(".fa-eye")
//         .eq(0)
//         .parent("span")
//         .should("have.attr", "title", "View file");

//       //delete attachment from modal
//       cy.get(".fa-trash")
//         .eq(2)
//         .click({
//           force: true
//         });
//       cy.get("app-attachments")
//         .contains("Save")
//         .click({
//           force: true
//         });
//     });
//     it("update engineer", () => {
//       generalDetails.selectEngineer("engineer3", "Shyam Athreye KA");
//     });
//     it("update number", () => {
//       generalDetails.fillRequestNumber(456789, "#requestnumberID");
//     });

//     it("update title", () => {
//       generalDetails.fillTitle("Checked Update");
//     });

//     it("update description  ", () => {
//       cy.typeCkeditor("<p>new updated text</p>");
//     });

//     it("update general details", () => {
//       cy.route({
//         method: "PATCH",
//         url: "**/cbs/costing/prime_contract/*",
//         onResponse: () => {
//           Constants.verifyToastMessage(Constants.SUCCESS_SAVED_CHANGED);
//         }
//       }).as("subcon");

//       cy.route("POST", "**/cbs/task_attachments/*/budget").as("budget");
//       cy.route("GET", "**/cbs/task_attachments/*").as("task");
//       generalDetails.update();
//       cy.wait("@subcon");
//     });

//     /********************ends *****************/
//   });
// });
