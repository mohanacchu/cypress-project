const cypress = require("cypress");
const fse = require("fs-extra");
const { merge } = require("mochawesome-merge");
const generator = require("mochawesome-report-generator");

async function runTests() {
    let URL =
        "http://stg.construct.katerra.com/cb/dashboard/projectlist";

    // if(process.argv[2]=== "staging"){
    //   URL="https://stg.construct.katerra.com/cb/dashboard/projectlist";
    // }

    console.log("Cypress is using this url", URL);
    await fse.remove("mochawesome-report"); // remove the report folder
    const { totalFailed } = await cypress.run({
        config: { baseUrl: URL }
    }); // get the number of failed tests
    const jsonReport = await merge(); // generate JSON report
    await generator.create(jsonReport);
    process.exit(totalFailed); // exit with the number of failed tests
}

runTests();
