
/// <reference types="cypress" />

describe('Inputs', function () {

    // -- Navigate to /inputs page for each test --
    beforeEach(() => {

        cy.visit('/inputs')     
    })

    // -- Verifying page contents --
    it('Check page contents',()=>{
        cy.contains('h3','Inputs')
        cy.contains('p','Number')
        cy.get('input').should('be.visible')
        cy.contains('Powered by Elemental Selenium')
    })

    // -- Possible test cases --
    context("Test cases", () => {

        // -- No numbers entered in the input field --
        it('1. No numbers in input',()=>{

            cy.log("Input: rocketlane");
            cy.get('input').type('rocketlane')
        })

        // -- Only numbers entered in the input field --
        it('2. All numbers in input',()=>{

            cy.log("Input: 54321");
            cy.get('input').type(54321)
        })

        // -- Combination of numbers & characters entered in the input field --
        it('3. Combination of numbers and characters in input',()=>{

            cy.log("Input: 123rocketl@ne");
            cy.get('input').type(123+'rocketl@ne')
        })

        it('4. Combination of numbers and characters in input',()=>{

            cy.log("Input: la456");
            cy.get('input').type('l'+'a'+456)
        })

        it('5. Combination of numbers and characters in input',()=>{

            cy.log("Input: ,5r4o k3tlane");
            cy.get('input').type(','+5+'r'+4+'o'+' '+'k'+3+'tlane')
        })

    })


})