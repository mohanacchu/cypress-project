// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
});

// now any cookie with in the whitelist array will not be cleared
// will not be cleared before each test runs
/* Cypress.Cookies.defaults({
  whitelist: [
    'AGR_JWT_STRING_COOKIE',
    'AGR_PROJECT_COOKIE',
    'AGR_STRING_COOKIE',
    'PHPSESSID',
    'connect.sid'
  ]
});
 */

/*******cookies added for php ********/

// Cypress.Cookies.defaults({
//   whitelist: ['AGR_JWT_STRING_COOKIE', 'AGR_STRING_COOKIE','1P_JAR']
// })

// Cypress.Cookies.defaults({
//   whitelist: ['AGR_JWT_STRING_COOKIE', 'AGR_STRING_COOKIE']
// })

/***************end **********/


// const project_name = 'Budgeting-automation' + Math.random().toFixed(4);
// export const real_project_name = project_name;
// localStorage.setItem('real_project', real_project_name);

// localStorage.getItem('real_project')
// export const real_project_name = 'Budgeting-automation' + Math.random().toFixed(4);

const clear = Cypress.LocalStorage.clear

/* Cypress.LocalStorage.clear = function (keys, ls, rs) {
  // do something with the keys here
  console.log('keys: ', keys);
  if (keys) {
    return clear.apply(this, arguments)
  }

} */

let cachedLocalStorageAuth;
let LOCAL_STORAGE_MEMORY = {};


function restoreLocalStorageAuth() {
    // if (cachedLocalStorageAuth) {
    // localStorage.setItem('auth-token', cachedLocalStorageAuth);
    Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
        localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
    });
    // }
}

function cacheLocalStorageAuth() {
    // cachedLocalStorageAuth = localStorage.getItem('auth-token');
    Object.keys(localStorage).forEach(key => {
        LOCAL_STORAGE_MEMORY[key] = localStorage[key];
    });
}

Cypress.on('window:before:load', restoreLocalStorageAuth);
beforeEach(restoreLocalStorageAuth);
afterEach(cacheLocalStorageAuth);
