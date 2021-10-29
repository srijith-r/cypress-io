/// <reference types="Cypress" />

describe('Dynamically Loaded Page Elements',()=>{

    // -- Case 1: Element is hidden before showing --
    context("Example 1", () => {

        // -- Verifying page contents --
        it('Checking page contents',()=>{

            cy.visit("/dynamic_loading/1")
            
            cy.contains('h3','Dynamically Loaded Page Elements')
            cy.contains('h4','Example 1: Element on page that is hidden')                            
            cy.contains('button','Start')
    
        })
        
        // -- Testing -- 
        it('Element on page that is hidden',()=>{

            cy.visit("/dynamic_loading/1")
            
            cy.log("Hidden text should not be visible")
            cy.get('#finish').should("not.be.visible")
            
            cy.log("Clicking start button")
            cy.contains('Start').click()


            cy.log("Hidden text should be visible")
            cy.contains("Hello World!",{timeout:6000}).should("be.visible")
        })

    })

    // -- Case 2: Element is rendered later --
    context("Example 2", () => {
 
        it('Checking page contents',()=>{

            cy.visit("/dynamic_loading/2")
            
            cy.contains('h3','Dynamically Loaded Page Elements')
            cy.contains('h4','Example 2: Element rendered after the fact')                            
            cy.contains('button','Start')
    
        })

        // -- Testing -- 
        it('Element rendered after the fact',()=>{

            cy.visit("/dynamic_loading/2")

            cy.log("There should be no hidden text at all")
            cy.get('#finish').should("not.exist")

            cy.log("Clicking start button")
            cy.contains('Start').click()

            cy.log("Dynamically rendered text should be visible")
            cy.contains("Hello World!",{timeout:6000}).should("be.visible")
        })

    })


})