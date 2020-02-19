import { openLeftSidebar } from "./constants";

class Sidebar {
    primeContractGeneralDetails() {
        openLeftSidebar();
        // cy.route('GET', '**/api/config/budget_configuration').as('configuration');
        // cy.route('GET', '**/api/distribution/groups').as('groups');

        cy.get(".nav-div")
            .contains("Prime Contract")
            .click();

        cy.get(".nav-div")
            .contains("General Details")
            .click();
        // cy.wait(['@configuration', '@groups']);
    }
    primeContractSOV() {
        openLeftSidebar();
        cy.get(".nav-div")
            .contains("Prime Contract")
            .click({
                force: true
            });

        cy.get(".nav-div")
            .contains("SOV")
            .click({
                force: true
            });
    }

    scopeMasterNonCsi() {
        openLeftSidebar();
        cy.get(".nav-scopeMaster")
            .contains("Scope Master")
            .click({
                force: true
            });
    }

    primeContractCO() {
        openLeftSidebar();
        cy.get(".nav-div")
            .contains("Prime Contract")
            .click({
                force: true
            });

        cy.get(".nav-div")
            .contains(" Change Orders")
            .click({
                force: true
            });
    }

    primeContractPCCO() {
        openLeftSidebar();
        cy.get(".nav-div")
            .contains("Prime Contract")
            .click({
                force: true
            });

        cy.get(".nav-div")
            .contains("All PCCOs")
            .click({
                force: true
            });
    }

    primeContractPABeforeLock() {
        openLeftSidebar();
        cy.get(".nav-div")
            .contains("Prime Contract")
            .click();

        cy.get(".nav-div")
            .contains("Pay Application")
            .click();
    }

    commitmentGeneralDetails() {
        openLeftSidebar();
        cy.get(".nav-div")
            .contains("Commitments")
            .click({
                force: true
            });

        cy.get(".nav-subcoonGeneral > a")
            .contains("General Details")
            .click();
    }

    commitmentChangeOrder() {
        openLeftSidebar();
        cy.get(".nav-div")
            .contains("Commitments")
            .click({
                force: true
            });

        cy.get(".nav-subconCco > a")
            .contains(" Change Order(CCO)")
            .click();
    }

    CommitmentsGeneralDetails() {
        openLeftSidebar();

        cy.get(".nav-commitments").click({
            force: true
        });
        cy.wait(500);
        cy.get(".nav-viewCommitment")
            .contains(" View Commitments")
            .click({
                force: true
            });
    }

    primeContractAfterLock() {
        openLeftSidebar();
        // cy.route('GET', '**/cbs/costing/project_budget/*/lock', 'fixture:/admin/after_prime_contract_lock/lock_true.json')
        // cy.route('GET', '**/api/budget_permissions/*', 'fixture:/admin/project/permission.json');
        cy.route(
            "GET",
            "**/api/budget_permissions/*",
            "fixture:/admin/after_prime_contract_lock/Prime_contract/general_information/budget_permission.json"
        );

        cy.route(
            "GET",
            "**/cmb/projects/*",
            "fixture:/admin/project/project-details.json"
        ).as("projectDetail");
        cy.route(
            "GET",
            "**/cbs/costing/sub_con/*",
            "fixture:/admin/before_prime_contract_lock/commitments/cco/sub_con.json"
        ).as("subCon");
        cy.get(".nav-div")
            .contains("Project Budget")
            .click({
                force: true
            });
        cy.get(".nav-budget")
            .contains("Project Budget")
            .click({
                force: true
            });
    }

    // unlock sidebar
    unlockCheckSov() {
            cy.route(
                "GET",
                "**/cbs/costing/project_budget/*/lock",
                '{"is_prime_contract_locked":true,"can_unlock_budget":true}'
            ).as("lock");
            cy.route(
                "GET",
                "**/cbs/commitment/list/*",
                "fixture:/admin/unlock-primecontract/list.json"
            ).as("list");
            // cy.route('GET', '**/api/budget_permissions/*', 'fixture:/admin/unlock-primecontract/budget_permission.json')
            cy.route(
                "GET",
                "**/api/budget_permissions/*",
                "fixture:/admin/after_prime_contract_lock/Prime_contract/general_information/budget_permission.json"
            );

            openLeftSidebar();
            cy.get(".nav-commitments").click({
                force: true
            });

            cy.get(".nav-viewCommitment")
                .contains(" View Commitments")
                .click({
                    force: true
                });
            cy.wait(["@list", "@lock"]);
        }
        //cco list
    gotoccoList() {
        cy.route(
            "GET",
            "**/cmb/project-template-association/manage/permissions",
            "fixture:/admin/before_prime_contract_lock/project_list_changes/manage_permission.json"
        ).as("manage_permission");
        cy.route(
            "GET",
            "**/cmb/projects/team-members/*",
            "fixture:/admin/team-members.json"
        );
        cy.route(
            "GET",
            "**/cbs/permissions/*",
            "fixture:/admin/after_prime_contract_lock/commitment/view_commitment/cbs_permissions.json"
        );

        cy.route(
            "GET",
            "**/cbs/costing/project_budget/*/lock",
            "fixture:/admin/after_prime_contract_lock/lock_true.json"
        );
        cy.route(
            "GET",
            "**/cbs/commitment/list/*",
            "fixture:/admin/after_prime_contract_lock/commitment/cco/cco-list.json"
        ).as("commitList");
        openLeftSidebar();

        cy.get(".nav-commitments").click({
            force: true
        });

        cy.get(".nav-viewCommitment")
            .contains(" View Commitments")
            .click({
                force: true
            });
        cy.wait(["@commitList"]);
    }

    gotoSovTab() {
        cy.route(
            "GET",
            "**/cbs/costing/project_budget/*/lock",
            "fixture:/admin/after_prime_contract_lock/lock_true.json"
        );
        cy.route(
            "GET",
            "**/api/budget_permissions/*",
            "fixture:/admin/after_prime_contract_lock/Prime_contract/general_information/budget_permission.json"
        );

        // cy.route('GET', '**/api/budget_permissions/*','fixture:/admin/after_prime_contract_lock/commitment/cco/modify-cco/permission.json').as('budget');
        cy.route(
            "GET",
            "**/cbs/costing/subcon_sov_tree/**,",
            "fixture:/admin/after_prime_contract_lock/commitment/cco/cco-list/subcon_sov_tree.json"
        ).as("sov");

        cy.get("[data-cy=sccommit_sov]").click({ force: true });
    }

    // view commitment
    viewCommitments() {
        openLeftSidebar();
        // added api to remove errors in unlock-primecontract
        cy.route(
            "GET",
            "**/api/users/projects",
            "fixture:/admin/users_projects.json"
        ).as("users");

        cy.route(
            "GET",
            "**/cmb/projects/*",
            "fixture:/admin/project/project-details.json"
        ).as("projectDetail");

        cy.route(
            "POST",
            "**/V1/token_validate",
            "fixture:/admin/login/tokenvalidate.json"
        );

        //ends

        // cy.route(
        //     "GET",
        //     "**/cbs/commitment/list/*",
        //     "fixture:/admin/after_prime_contract_lock/view_commitment/commitment_list.json"
        // ).as("commitList");
        // cy.route(
        //   "GET",
        //   "**/cbs/commitment/list/*",
        //   "fixture:/admin/after_prime_contract_lock/view_commitment/commitment_list.json"
        // ).as("commitList");
        cy.route(
            "GET",
            "**/cbs/commitment/list/*",
            "fixture:/admin/after_prime_contract_lock/commitment/view_commitment/commitment_lists_new.json"
        ).as("lists");
        cy.route(
            "GET",
            "**/cbs/costing/sub_con/*",
            "fixture:/admin/before_prime_contract_lock/commitments/cco/sub_con.json"
        ).as("subCon");
        cy.route(
            "GET",
            "**/api/budget_permissions/*",
            "fixture:/admin/after_prime_contract_lock/Prime_contract/general_information/budget_permission.json"
        ).as("permit");
        cy.route(
            "GET",
            "**/cmb/project-template-association/manage/permissions",
            "fixture:/admin/after_prime_contract_lock/commitment/cco/add-to-scope/manage_permission.json"
        ).as("manage");

        cy.get(".nav-commitments").click({
            force: true
        });

        cy.get(".nav-viewCommitment")
            .contains(" View Commitments")
            .click({
                force: true
            });
        cy.wait(["@lists", "@permit"]);
    }

    // Commitment

    commitment(company) {
        this.viewCommitments();

        // cy.route(
        //   "GET",
        //   "**/cbs/commitment/list/**",
        //   "fixture:/admin/after_prime_contract_lock/commitment/general_details/before_sov_lock_general_details_commitment_list.json"
        // );
        // cy.route(
        //   'GET',
        //   '**/cbs/commitment/list/**',
        //   'fixture:/admin/after_prime_contract_lock/view_commitment/billing_requistion/commitment_list.json'
        //   );
        cy.route(
            "GET",
            "**/cbs/commitment/list/**",
            "fixture:/admin/after_prime_contract_lock/commitment/general_info/commitment_view.json"
        ).as("list");
        cy.route(
            "GET",
            "**/cbs/costing/sub_con/general_info/**",
            "status:404",
            "fixture:/admin/after_prime_contract_lock/commitment/general_details/general_info_not_found.json"
        ).as("general_info");
        cy.route(
            "GET",
            "**/api/distribution/groups",
            "fixture:/admin/after_prime_contract_lock/commitment/groups.json"
        ).as("group");
        cy.route(
            "GET",
            "**/cbs/billing_period/*",
            '{"result":{"billing_period_template_id":null,"billing_period_template_name":null,"billing_period":[],"project_id":"299743"}}'
        ).as("billing");
        cy.route(
            "GET",
            "**/api/config/budget_configuration",
            "fixture:/admin/after_prime_contract_lock/commitment/general_info/budget_configuration.json"
        ).as("config");

        cy.get("app-viewsscommitments")
            .find("span")
            .contains(company)
            .click({ force: true });

        cy.wait("@group");
    }

    billingPeriod() {
        openLeftSidebar();
        cy.get(".nav-commitments").click({
            force: true
        });

        cy.get(".nav-billPeriod")
            .contains("Billing Periods")
            .click({
                force: true
            });
    }
    gotoPCOtab() {
        openLeftSidebar();
        cy.get(".nav-potential")
            .contains("Potential Change Orders")
            .click({
                force: true
            });

        cy.get(".nav-allPCO")
            .contains("All PCOs")
            .click({
                force: true
            });
    }
    scheduleOfValue() {
        openLeftSidebar();
        cy.route(
            "GET",
            "**/cbs/costing/sub_con/*",
            "fixture:/admin/sub_con.json"
        ).as("subCon");
        cy.route(
            "GET",
            "**/api/budget_permissions/*",
            "fixture:/admin/project/permission.json"
        ).as("budget");

        cy.get(".nav-commitments").click({
            force: true
        });
        cy.get(".nav-subconSOV")
            .contains("SOV")
            .click({
                force: true
            });
    }

    changeOrderList() {
        openLeftSidebar();
        cy.route(
            "GET",
            "**/cbs/costing/sub_con/*",
            "fixture:/admin/before_prime_contract_lock/commitments/cco/after_sov_lock_sub_con.json"
        ).as("subCon");
        cy.route(
            "GET",
            "**/api/budget_permissions/*",
            "fixture:/admin/project/permission.json"
        ).as("budget");
        cy.get(".nav-commitments").click({
            force: true
        });
        cy.get(".nav-subconCco")
            .contains("Change Order(CCO)")
            .click({
                force: true
            });
    }

    changeOrderList() {
        openLeftSidebar();
        cy.route(
            "GET",
            "**/cbs/costing/sub_con/*",
            "fixture:/admin/before_prime_contract_lock/commitments/cco/after_sov_lock_sub_con.json"
        ).as("subCon");
        cy.route(
            "GET",
            "**/api/budget_permissions/*",
            "fixture:/admin/project/permission.json"
        ).as("budget");
        cy.get(".nav-commitments").click({
            force: true
        });
        cy.get(".nav-subconCco")
            .contains("Change Order(CCO)")
            .click({
                force: true
            });
    }

    modifychangeOrderList() {
        openLeftSidebar();
        // cy.route(
        //   'GET',
        //   '**/cbs/costing/sub_con/*',
        //   'fixture:/admin/after_prime_contract_lock/commitment/cco/modify-cco/sub_con.json'
        // ).as('subCon');
        cy.route(
            "GET",
            "**/api/budget_permissions/*",
            "fixture:/admin/after_prime_contract_lock/commitment/cco/modify-cco/permission.json"
        ).as("budget");
        cy.get(".nav-commitments").click({
            force: true
        });
        cy.get(".nav-subconCco")
            .contains("Change Order(CCO)")
            .click({
                force: true
            });
        cy.wait("@budget");
    }

    // create requisition
    createRequisition(company) {
        this.commitment(company);
        cy.route(
            "GET",
            "**/api/budget_permissions/*",
            "fixture:/admin/project/budget_permission.json"
        ).as("budget");

        cy.get(".listRequisition").click({ force: true });
        cy.wait(["@budget"]);
    }

    // create requisition
    editRequisition(company) {
        this.commitment(company);
        cy.route(
            "GET",
            "**/cbs/commitment/list/**",
            "fixture:/admin/after_prime_contract_lock/commitment/general_details/after_sov_lock_general_details_commitment_list.json"
        );

        cy.get(".listRequisition").click({ force: true });
        // cy.wait(['@budget']);
    }

    commitmentChangeOrderList() {
        openLeftSidebar();
        cy.get(".nav-commitments").click({
            force: true
        });

        cy.get(".nav-allCCO")
            .contains("All CCOs")
            .click({
                force: true
            });
    }

    potentialChangeOrder() {
        openLeftSidebar();
        cy.get(".nav-div")
            .contains("Potential Change Orders")
            .click({
                force: true
            });

        cy.get(".nav-div")
            .contains("All PCOs")
            .click({
                force: true
            });
    }
}

// potential change order

export default Sidebar;
