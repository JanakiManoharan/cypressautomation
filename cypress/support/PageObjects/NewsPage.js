class NewsPage {
    newsContent() {
        return cy.get('#main > > h2')
    }
}
export default NewsPage