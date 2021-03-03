describe('TABLE VIEW Page', () => {
	const url = 'http://localhost:3001/table';
	const headerText = 'FRONTEND CODING CHALLENGE';
	const homePageText = 'WELCOME TO THE HOME PAGE';
	const dropdownOptions = Array.from({ length: 26 }, (val, idx) => idx).splice(3, 23);
	const monthArray = Array.from({ length: 13 }, (val, idx) => idx);
	const footerText = '@Scalable-Capital Copyrighted by Aryan Sharma 02/2021. All Rights Reserved';
	beforeEach(() => {
		cy.visit('/table');
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

	it('Validation of GridDisplay', () => {
		cy.get('div#myGrid').should('exist');
		cy.get('span.ag-header-cell-text').contains('Month');
		cy.get('span.ag-header-cell-text').contains('Good');
		cy.get('span.ag-header-cell-text').contains('Median');
		cy.get('span.ag-header-cell-text').contains('Bad');
		cy.get('div[col-id="month"]').should('have.length', monthArray.length);
		cy.get('div[col-id="month"]').contains(10);
	});

	it('Validation of GridData when Inputs are Entered', () => {
		cy.get('select').contains('25').click({ force: true });
		cy.get('input#cypressInitialSum[type=number]').type(10000);
		cy.get('div.ag-cell').contains(10000);
		cy.get('div[col-id="good"]').then($spanElements => {
			const filteredMonthArray = Array.from($spanElements, spanElement => spanElement.innerText).filter(
				month => month > 0
			);
			cy.log(filteredMonthArray);
			cy.get('div[col-id="good"]').should('have.length', `${filteredMonthArray.length + 1}`);
		});

		cy.get('div[col-id="median"]').then($spanElements => {
			const filteredMonthArray = Array.from($spanElements, spanElement => spanElement.innerText).filter(
				month => month > 0
			);
			cy.log(filteredMonthArray);
			cy.get('div[col-id="median"]').should('have.length', `${filteredMonthArray.length + 1}`);
		});

		cy.get('div[col-id="bad"]').then($spanElements => {
			const filteredMonthArray = Array.from($spanElements, spanElement => spanElement.innerText).filter(
				month => month > 0
			);
			cy.log(filteredMonthArray);
			cy.get('div[col-id="bad"]').should('have.length', `${Number(filteredMonthArray.length + 1)}`);
		});
	});
});
