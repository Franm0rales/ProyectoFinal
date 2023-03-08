describe("example Login to app", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("http://127.0.0.1:5173").wait(3000);
  });
  describe("Prueba de inicio de sesión automático", () => {
    it("Inicia sesión automáticamente con credenciales válidas y realiza test de aptitudes, para despues comprobar resultados", () => {
      cy.get('[href="/login"]').click().wait(3000);
      cy.get(".d-flex > #botones").click().wait(3000);
      cy.get("[data-cy=email]").type("diana@mail.com").wait(3000);
      cy.get("[data-cy=password]").type("Aa12345").wait(3000);

      cy.get("[data-cy=submit]").click().wait(3000);
      //Navegar al perfil y realizar un test de aptitudes
      cy.visit("http://127.0.0.1:5173/test").wait(3000);
      cy.get(
        ":nth-child(3) > form > .question > #options > :nth-child(2) > .checkmark"
      ).click({ force: true });

      cy.get(
        ":nth-child(4) > form > .question > #options > :nth-child(4) > .checkmark"
      ).click({ force: true });

      cy.get(
        ":nth-child(5) > form > .question > #options > :nth-child(3) > .checkmark"
      ).click({ force: true });

      cy.get(
        ":nth-child(6) > form > .question > #options > .d-flex > .options > .checkmark"
      ).click({ force: true });
      cy.get(
        ":nth-child(7) > form > .question > #options > :nth-child(3) > .checkmark"
      ).click({ force: true });
      cy.get(
        ":nth-child(8) > form > .question > #options > .d-flex > .options"
      ).click({ force: true });
      cy.get(
        ":nth-child(9) > form > .question > #options > :nth-child(2) > .checkmark"
      ).click({ force: true });
      cy.get(
        ":nth-child(10) > form > .question > #options > :nth-child(3) > .checkmark"
      ).click({ force: true });
      cy.get(
        ":nth-child(11) > form > .question > #options > :nth-child(4) > .checkmark"
      ).click({ force: true });

      cy.get(
        ":nth-child(12) > form > .question > #options > :nth-child(2) > .checkmark"
      ).click({ force: true });
      cy.get(":nth-child(2) > #botones").click();
      cy.get(
        ":nth-child(3) > form > .question > #options > :nth-child(2) > .checkmark"
      ).click({ force: true });

      cy.get(
        ":nth-child(4) > form > .question > #options > :nth-child(4) > .checkmark"
      ).click({ force: true });

      cy.get(
        ":nth-child(5) > form > .question > #options > :nth-child(3) > .checkmark"
      ).click({ force: true });

      cy.get(
        ":nth-child(6) > form > .question > #options > .d-flex > .options > .checkmark"
      ).click({ force: true });
      cy.get(
        ":nth-child(7) > form > .question > #options > :nth-child(3) > .checkmark"
      ).click({ force: true });
      cy.get(
        ":nth-child(8) > form > .question > #options > .d-flex > .options"
      ).click({ force: true });
      cy.get(
        ":nth-child(9) > form > .question > #options > :nth-child(2) > .checkmark"
      ).click({ force: true });
      cy.get(
        ":nth-child(10) > form > .question > #options > :nth-child(3) > .checkmark"
      ).click({ force: true });
      cy.get(
        ":nth-child(11) > form > .question > #options > :nth-child(4) > .checkmark"
      ).click({ force: true });

      cy.get(
        ":nth-child(12) > form > .question > #options > :nth-child(2) > .checkmark"
      ).click({ force: true });
      cy.get(":nth-child(2) > #botones").click();
      cy.get(
        ":nth-child(3) > form > .question > #options > :nth-child(2) > .checkmark"
      ).click({ force: true });

      cy.get(
        ":nth-child(4) > form > .question > #options > :nth-child(4) > .checkmark"
      ).click({ force: true });

      cy.get(
        ":nth-child(5) > form > .question > #options > :nth-child(3) > .checkmark"
      ).click({ force: true });

      cy.get(
        ":nth-child(6) > form > .question > #options > .d-flex > .options > .checkmark"
      ).click({ force: true });
      cy.get(
        ":nth-child(7) > form > .question > #options > :nth-child(3) > .checkmark"
      ).click({ force: true });
      cy.get(
        ":nth-child(8) > form > .question > #options > .d-flex > .options"
      ).click({ force: true });
      cy.get(
        ":nth-child(9) > form > .question > #options > :nth-child(2) > .checkmark"
      ).click({ force: true });
      cy.get(
        ":nth-child(10) > form > .question > #options > :nth-child(3) > .checkmark"
      ).click({ force: true });
      cy.get(
        ":nth-child(11) > form > .question > #options > :nth-child(4) > .checkmark"
      ).click({ force: true });

      cy.get(
        ":nth-child(12) > form > .question > #options > :nth-child(2) > .checkmark"
      ).click({ force: true });
      cy.get(":nth-child(2) > #botones").click();
      cy.get(
        ":nth-child(3) > form > .question > #options > :nth-child(2) > .checkmark"
      ).click({ force: true });

      cy.get(
        ":nth-child(4) > form > .question > #options > :nth-child(4) > .checkmark"
      ).click({ force: true });

      cy.get(
        ":nth-child(5) > form > .question > #options > :nth-child(3) > .checkmark"
      ).click({ force: true });

      cy.get(
        ":nth-child(6) > form > .question > #options > .d-flex > .options > .checkmark"
      ).click({ force: true });
      cy.get(
        ":nth-child(7) > form > .question > #options > :nth-child(3) > .checkmark"
      ).click({ force: true });
      cy.get(
        ":nth-child(8) > form > .question > #options > .d-flex > .options"
      ).click({ force: true });
      cy.get(
        ":nth-child(9) > form > .question > #options > :nth-child(2) > .checkmark"
      ).click({ force: true });
      cy.get(
        ":nth-child(10) > form > .question > #options > :nth-child(3) > .checkmark"
      ).click({ force: true });
      cy.get(
        ":nth-child(11) > form > .question > #options > :nth-child(4) > .checkmark"
      )
        .click({ force: true })
        .wait(3000);

      cy.get(
        ":nth-child(12) > form > .question > #options > :nth-child(2) > .checkmark"
      )
        .click({ force: true })
        .wait(3000);

      cy.visit("http://127.0.0.1:5173/editar").wait(3000);
      cy.get(".recharts-legend-item-text").click().wait(3000);

      //Vamos a navegar a los eventos vamos a filtrar y nos vamos a registrar en un evento
      // cy.get(":nth-child(3) > .nav-link").click().wait(3000);
      // cy.get(":nth-child(6) > .pb-2 > div > #botones");
      // cy.visit("http://127.0.0.1:5173/editar").wait(3000);
    });
  });
});
