/// <reference types="cypress"/>

import {
  requestPage,
  validateStatusCode,
} from '../../support/index.js'

// -- Verify if the correct status codes are sent for each test case (401 for Not Authorized , 200 for Authorized) --
describe("Basic Auth", () => {

	beforeEach(() => {
		cy.log('Navigating to homepage...')
		cy.visit("/");
	})

	// -- Test cases --
	context("Test cases", () => {


		// -- Failure cases --
		it("Case 1: No credentials - Check if STATUS CODE 401", () => {
			const response = requestPage();
			validateStatusCode(response, 401);
		})

		it("Case 2: Wrong password - Check if STATUS CODE 401", () => {

			const response = requestPage({ username:"admin", password:"srijith" });
			validateStatusCode(response, 401);

		})

		it("Case 3: Wrong username - Check if STATUS CODE 401", () => {

			const response = requestPage({ username:"srijith", password:"admin" });
			validateStatusCode(response, 401);

		})

		it("Case 4: Wrong credentials - Check if STATUS CODE 401", () => {
		 
			const response = requestPage({ username:"srijith", password:"srijith" });
			validateStatusCode(response, 401);

		})

		// -- Successful authorization --
		it("Case 5: Successful authorization - Check if STATUS CODE 200", () => {

			const response = requestPage({ username:"admin", password:"admin" });
			validateStatusCode(response, 200);
	
		})


	})

	// -- Verifying authorized page contents for --
	context("Checking Authorized Page", () => {

		it("Testing if the logged in page works fine", () => {

			cy.log('Navigating to logged in page');

			cy.visit("/basic_auth", 
					{
						auth: 
						{
							username: "admin",
							password: "admin",
						}
					}
			)
		

			cy.log('validating navigation to page')
			cy.contains('h3', 'Basic Auth').should('be.visible')
			cy.contains('p','Congratulations! You must have the proper credentials.').should('be.visible')
			cy.log(`navigation successful`)
		})
	})

})