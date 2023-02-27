const URL = 'http://zero.webappsecurity.com/index.html';
const Search = '#searchTerm';
const SearchResultPage = 'h2';

class SearchPage {
    static visit() {
        cy.visit(URL);
    }

    static fillSearch() {
        cy.get(Search).type('some text {enter}')
    }

    static FillSearchResultPage() {
        cy.get(SearchResultPage).should('contain.text', 'Search Result');
    }
}

export default SearchPage;