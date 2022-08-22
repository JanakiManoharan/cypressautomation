class HomePage {
    searchBar() {
        return cy.get('#main')
    }
    contactGroup() {
        return cy.get('[aria-label="go to homepage for Contact Group 5th Floor,  Lyndon House 5862 Hagley Road,  Birmingham,  B16 8PE"] > .text-break > strong')
    }
}
export default HomePage