describe('Authentication Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('should display login form', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('form').should('exist');
    cy.get('input[name="email"]').should('exist');
    cy.get('input[name="password"]').should('exist');
    cy.get('button[type="submit"]').should('exist');
  });

  it('should navigate to the registration page', () => {
    cy.visit('http://localhost:3000/register');
    cy.get('form').should('exist');
    cy.get('input[name="name"]').should('exist');
    cy.get('input[name="email"]').should('exist');
    cy.get('input[name="password"]').should('exist');
    cy.get('button[type="submit"]').should('exist');
  });

  it('should register a new user', () => {
    cy.visit('http://localhost:3000/register');
    cy.get('input[name="name"]').type('Agon');
    cy.get('input[name="email"]').type('agon@example.com');
    cy.get('input[name="password"]').type('agon123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/login');
  });





  it('should display error for invalid login', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('input[name="email"]').type('invalid@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    cy.contains('No user with that email').should('be.visible'); 
  });

  it('should display error for invalid login', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('input[name="email"]').type('invalid@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    cy.contains('No user with that email').should('be.visible'); 
  });


  it('should show an error message with incorrect password', () => {

    cy.get('input[name="email"]').type('agon@example.com');
    cy.get('input[name="password"]').type('agon1234567');
    cy.get('button[type="submit"]').click();
    cy.contains('Password incorrect').should('be.visible'); 


  });
 



it('should login successfully with correct credentials', () => {

  cy.visit('http://localhost:3000/login');
  cy.get('input[name="email"]').type('agon@example.com');
  cy.get('input[name="password"]').type('agon123');
  cy.get('button[type="submit"]').click();
  cy.url().should('eq', 'http://localhost:3000/');
  cy.contains('Hi Agon').should('be.visible'); 
});






  it('should logout successfully', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('input[name="email"]').type('agon@example.com');
    cy.get('input[name="password"]').type('agon123');
    cy.get('button[type="submit"]').click();
    //cy.url().should('eq', 'http://localhost:3000/logout?_method=DELETE');
  });
  
});
