describe('CHART VIEW Page', () => {
	const url = 'http://localhost:3001/chart';
	const headerText = 'FRONTEND CODING CHALLENGE';
	const footerText = '@Scalable-Capital Copyrighted by Aryan Sharma 02/2021. All Rights Reserved';
	beforeEach(() => {
		cy.visit('/chart');
		cy.viewport('macbook-15');
	});

	it('Validation of Header Component', () => {
		cy.url().should('eq', url);
		cy.get('h6').contains(headerText);
	});

	it('Validation of Menu Links', () => {
		cy.url().should('eq', url);
		cy.get('a').should('have.length', 3);
		cy.get('a').contains('Home');
		cy.get('a').contains('Table-View');
		cy.get('a').contains('Chart-View');
	});

	it('Validation of Footer Component', () => {
		cy.url().should('eq', url);
		cy.get('h6').contains(footerText);
	});

	it('Validation of Presence of Selectors Fields', () => {
		cy.url().should('eq', url);
		cy.get('label').contains('Risk level:');
		cy.get('select').select('3').should('have.value', '3');
		cy.get('select').select('25').should('have.value', '25');

		cy
			.get('input#cypressInitialSum')
			.invoke('attr', 'placeholder')
			.should('include', 'Enter Initial Investment Sum');
		cy.get('input#cypressMonthlySum').invoke('attr', 'placeholder').should('include', 'Enter Monthly Sum');
	});

	it('Validation of TextField and DropDown Functionality', () => {
		cy.get('input#cypressInitialSum[type=number]').type(10000);
		cy.get('input#cypressMonthlySum[type=number]').type(200);
		cy.get('select').contains('25').click({ force: true });
	});

	it('Validation of chart view', () => {
		cy.get('canvas').should('exist');
	});
});
