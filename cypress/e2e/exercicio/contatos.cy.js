
   /// <reference types="cypress" />


    describe('Testes de inserção, edição e exclusão', () => {
        beforeEach(() => {
            cy.visit('https://agenda-contatos-react.vercel.app/')
        })

        it('Deve incluir um contato', () => {
            cy.get('[type="text"]').type('LucasAdicionado')
            cy.get('[type="email"]').type('lucasfrank11@hotmail.com')
            cy.get('[type="tel"]').type('(53) 22222-1111')
            cy.get('.adicionar').click()
        })

        it('Deve editar um contato', () => {
            cy.get(':nth-child(2) > .sc-gueYoa > .edit')
            cy.get('[type="text"]').type('LucasEditado')
            cy.get('[type="email"]').type('lucasfrank11@hotmail.com')
            cy.get('[type="tel"]').type('(53) 22222-1111')
            cy.get('.adicionar').click()
        })


        it('Deve excluir um contato', () => {
            cy.get(':nth-child(2) > .sc-gueYoa > .delete')
        })
    })