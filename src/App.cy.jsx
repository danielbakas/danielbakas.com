import App from "./App";

describe('App.cy.js', () => {
    it('be visible', () => {
        cy.viewport("macbook-15")
        cy.mount(<App/>)
        cy.get('[data-cy=title]').should('be.visible')
    })

    it('validate initial value', () => {
        cy.viewport("macbook-15")
        cy.mount(<App/>)
        cy.get('input[value*="Si yo digo ping tu dices..."]').should('be.visible')
    })

    it('click', () => {
        cy.viewport("macbook-15")
        cy.mount(<App/>)
        cy.get('input[value*="Si yo digo ping tu dices..."]').click()
    })

    it('type', () => {
        cy.viewport("macbook-15")
        cy.mount(<App/>)
        cy.get('input[value*="Si yo digo ping tu dices..."]').click().type(" Pong")
    })
})