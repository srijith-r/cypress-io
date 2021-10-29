import './commands'

const URL = '/basic_auth'

// -- Sending status code for requests --
export const requestPage = (creds = null) => {

  const { username, password } = { ...creds }

  if (username && password) {

    cy.log(`Requesting with username: ${username}, password: ${password}`)

    return cy.request(
                  {
                    url: URL,
                    failOnStatusCode: false,
                    auth: {
                      username,
                      password,
                    }
                  }
    )
  }

  cy.log('Requesting without credentials')
  return cy.request(
                  {
                    url: URL,
                    failOnStatusCode: false,
                  }
  )
}

// -- Validating status code --
export const validateStatusCode = (response, statusCode) => {

    response.its("status").then((_status) => {

      const status = _status;
      cy.log(`Validating returned status code (${statusCode})`)
      cy.wrap(status).should("equal", statusCode)

  })

}

 


