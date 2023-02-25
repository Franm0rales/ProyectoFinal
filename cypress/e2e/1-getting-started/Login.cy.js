

describe('example Login to app', () => {
 
  beforeEach(() => {
    cy.viewport(1280, 1080)
    cy.visit('http://127.0.0.1:5173').wait(5000)
  })
  describe('Prueba de inicio de sesión automático', () => {
    it('Inicia sesión automáticamente con credenciales válidas y realiza test de aptitudes, para despues comprobar resultados', () => {
      cy.get('[href="/login"]').click().wait(5000)
      cy.get('.d-flex > #botones').click().wait(5000)
      cy.get('[data-cy=email]').type('alex@mail.com').wait(5000);
      cy.get('[data-cy=password]').type('Aa12345').wait(5000);
      cy.get('[data-cy=form-check-input]')
      .click({ force: true }).wait(5000)
      cy.get('[data-cy=submit]').click().wait(5000)
      //Navegar al perfil y realizar un test de aptitudes
      cy.visit('http://127.0.0.1:5173/test').wait(5000)
      cy.get(':nth-child(7) > form > .question > #options > :nth-child(2) > .checkmark').click().wait(500)
      cy.get(':nth-child(8) > form > .question > #options > :nth-child(1) > .checkmark').click().wait(500)
      cy.get(':nth-child(9) > form > .question > #options > :nth-child(4) > .checkmark').click().wait(500)
      cy.get(':nth-child(10) > form > .question > #options > :nth-child(4) > .checkmark').click().wait(500)
      cy.get(':nth-child(11) > form > .question > #options > :nth-child(1) > .checkmark').click().wait(500)
      cy.get(':nth-child(12) > form > .question > #options > :nth-child(1) > .checkmark').click().wait(500)
      cy.get(':nth-child(13) > form > .question > #options > :nth-child(2) > .checkmark').click().wait(500)
      cy.get(':nth-child(14) > form > .question > #options > :nth-child(4) > .checkmark').click().wait(500)
      cy.get(':nth-child(15) > form > .question > #options > :nth-child(3) > .checkmark').click().wait(500)
      cy.get(':nth-child(16) > form > .question > #options > :nth-child(1) > .checkmark').click().wait(500)
      cy.get('.pagination > :nth-child(2) > #botones').click(5000)
      cy.get(':nth-child(7) > form > .question > #options > :nth-child(2) > .checkmark').click().wait(500)
      cy.get(':nth-child(8) > form > .question > #options > :nth-child(1) > .checkmark').click().wait(500)
      cy.get(':nth-child(9) > form > .question > #options > :nth-child(4) > .checkmark').click().wait(500)
      cy.get(':nth-child(10) > form > .question > #options > :nth-child(4) > .checkmark').click().wait(500)
      cy.get(':nth-child(11) > form > .question > #options > :nth-child(1) > .checkmark').click().wait(500)
      cy.get(':nth-child(12) > form > .question > #options > :nth-child(1) > .checkmark').click().wait(500)
      cy.get(':nth-child(13) > form > .question > #options > :nth-child(2) > .checkmark').click().wait(500)
      cy.get(':nth-child(14) > form > .question > #options > :nth-child(4) > .checkmark').click().wait(500)
      cy.get(':nth-child(15) > form > .question > #options > :nth-child(3) > .checkmark').click().wait(500)
      cy.get(':nth-child(16) > form > .question > #options > :nth-child(1) > .checkmark').click().wait(500)
      cy.get('.pagination > :nth-child(2) > #botones').click(5000)
      cy.get(':nth-child(7) > form > .question > #options > :nth-child(2) > .checkmark').click().wait(500)
      cy.get(':nth-child(8) > form > .question > #options > :nth-child(1) > .checkmark').click().wait(500)
      cy.get(':nth-child(9) > form > .question > #options > :nth-child(4) > .checkmark').click().wait(500)
      cy.get(':nth-child(10) > form > .question > #options > :nth-child(4) > .checkmark').click().wait(500)
      cy.get(':nth-child(11) > form > .question > #options > :nth-child(1) > .checkmark').click().wait(500)
      cy.get(':nth-child(12) > form > .question > #options > :nth-child(1) > .checkmark').click().wait(500)
      cy.get(':nth-child(13) > form > .question > #options > :nth-child(2) > .checkmark').click().wait(500)
      cy.get(':nth-child(14) > form > .question > #options > :nth-child(4) > .checkmark').click().wait(500)
      cy.get(':nth-child(15) > form > .question > #options > :nth-child(3) > .checkmark').click().wait(500)
      cy.get(':nth-child(16) > form > .question > #options > :nth-child(1) > .checkmark').click().wait(500)
      
      cy.get('.pagination > :nth-child(2) > #botones').click(5000)
      cy.get(':nth-child(7) > form > .question > #options > :nth-child(2) > .checkmark').click().wait(500)
      cy.get(':nth-child(8) > form > .question > #options > :nth-child(1) > .checkmark').click().wait(500)
      cy.get(':nth-child(9) > form > .question > #options > :nth-child(4) > .checkmark').click().wait(500)
      cy.get(':nth-child(10) > form > .question > #options > :nth-child(4) > .checkmark').click().wait(500)
      cy.get(':nth-child(11) > form > .question > #options > :nth-child(1) > .checkmark').click().wait(500)
      cy.get(':nth-child(12) > form > .question > #options > :nth-child(1) > .checkmark').click().wait(500)
      cy.get(':nth-child(13) > form > .question > #options > :nth-child(2) > .checkmark').click().wait(500)
      cy.get(':nth-child(14) > form > .question > #options > :nth-child(4) > .checkmark').click().wait(500)
      cy.get(':nth-child(15) > form > .question > #options > :nth-child(3) > .checkmark').click().wait(500)
      cy.get(':nth-child(16) > form > .question > #options > :nth-child(1) > .checkmark').click().wait(500)
      cy.visit('http://127.0.0.1:5173/editar').wait(5000)
      cy.get(':nth-child(1) > .text-start').click()
      cy.wait(5000); 
      //Vamos a navegar a los eventos vamos a filtrar y nos vamos a registrar en un evento
      cy.get(':nth-child(3) > .nav-link').click().wait(5000)
      cy.get('.form-control').type('PYTHON{enter}')
      
     

    });
  });
  
  
 
  
})
