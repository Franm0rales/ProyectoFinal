describe('Prueba de inicio de sesión automático', () => {
    it('Inicia sesión automáticamente con credenciales válidas', () => {
      cy.visit('/Front_Proyecto_Final/src/components/LoginAlumno/LoginAlumno');
      cy.get('[data-cy=email]').type('fran2@gmail.com');
      cy.get('[data-cy=password]').type('Aa12345');
      cy.get('[data-cy=submit]').click();
      cy.url().should('include', '/dashboard');
    });
  });
  