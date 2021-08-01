
describe('todo list', () => {
    it('set focus on input text element', () => {
        const toDoAction = 'Learn Typescript'
      cy.visit('https://simplest-react-todo-app.herokuapp.com/')

      cy.focused()
      .should('have.class', 'form-control add-todo')
      .type(toDoAction)
        .should('have.value', toDoAction)
        .type('{enter}')

        cy.get(':nth-child(4) > .checkbox > label > input')
      .check()
      cy.get('div > .search')
      .click()
      
     const textToSearch = 'React'
      cy.focused()
      .should('have.class', 'form-control search')
      .type(textToSearch)
        .should('have.value', textToSearch)
        cy.get('.form-control')
      .clear()
      
     const negativeTextToSearch = 'pyton'
     cy.focused()
     .should('have.class', 'form-control search')
      .type(negativeTextToSearch)
        .should('have.value', negativeTextToSearch)
    })    
})