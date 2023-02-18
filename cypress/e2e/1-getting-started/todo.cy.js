

describe('example Login to app', () => {
  beforeEach(() => {
   
    cy.visit('http://127.0.0.1:5173/login')
  })
  describe('Prueba de inicio de sesión automático', () => {
    it('Inicia sesión automáticamente con credenciales válidas', () => {
      cy.visit('http://127.0.0.1:5173/login').wait(3000);
      cy.get('[data-cy=email]').type('fran2@gmail.com').wait(3000);
      cy.get('[data-cy=password]').type('Aa12345').wait(3000);
     
      cy.get('[data-cy=form-check-input]')
      
       // Espera 1 segundo para asegurarse de que el botón esté disponible
      .click({ force: true }).wait(3000)
  
      cy.get('[data-cy=submit]').click().wait(3000)
      cy.url(`http://127.0.0.1:5173/`)
    });
  });
  
 
  
})
