

describe('example Login to app', () => {
  beforeEach(() => {
   
    cy.visit('http://127.0.0.1:5173/login')
  })
  describe('Prueba de inicio de sesión automático', () => {
    it('Inicia sesión automáticamente con credenciales válidas', () => {
      cy.visit('http://127.0.0.1:5173/login');
      cy.get('[data-cy=email]').type('fran2@gmail.com');
      cy.get('[data-cy=password]').type('Aa12345');
      // cy.get('[data-cy="check"]').click()
      cy.get('[data-cy=submit]').click();
      cy.url(`http://127.0.0.1:5173/`)
    });
  });
  
 
  
})
