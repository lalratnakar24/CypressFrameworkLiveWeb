/// <reference types="Cypress" />
import IONOSHomePage from '../../../../support/PageObjects/IONOSHomePage'
import EigeneEmailAdresse from '../../../../support/PageObjects/EigeneEmailAdresse'
import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
//cypress run --spec cypress\integration\examples\BDD\*.feature --headed --browser chrome
//npx cypress-tags run -e TAGS="@Smoke" --headed --browser chrome
// npx cypress run --spec cypress/integration/examples/BDD/*.feature --headed --browser chrome --env url="https://google.com"
const homePage=new IONOSHomePage()
const emailAddPage=new EigeneEmailAdresse()

Given("I open IONOS Page",function()
{
    cy.visit(Cypress.env('url'))
    cy.wait(2000)
    var text1= cy.get('.justify-start > :nth-child(2) > #selectAll')
    cy.log(text1)
    cy.get('.justify-start > :nth-child(2) > #selectAll').click()
    cy.wait(2000)
    var text= homePage.getCreateEmailAddressLink
    cy.log(text)
}
)

When("I click on create email address",function()
{
    
    homePage.getCreateEmailAddressLink().click()
}
)
Then ("the email page is open",function()
{
    cy.url().should('include','email')
}
)

Then ("I click on get Tarrif button",function()
{
    emailAddPage.getToTheTariffButton().click()
})