import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../support/PageObjects/homePage";
import NewsPage from "../../support/PageObjects/NewsPage";

const homePage = new HomePage()
const newsPage = new NewsPage()

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

let home
before(function () {
    cy.fixture('data').then(function (data) {
        home = data;
    })
})

Given('Open the browser and launch the Application', () => {
    cy.visit(home.ourSchoolSite)
})

When('User enters post code in search box', () => {
    homePage.searchBar().type(home.postCode + '{enter}')
})

And('User clicks On Contact Group', () => {
    homePage.contactGroup().click()
})

Then('Verify the news website', () => {
    cy.url().should('include', "/news")
    newsPage.newsContent().contains(home.newsContent)
})

