import React from 'react'
import Announcements from './Announcements'

describe('<Announcements />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Announcements />)
  })
})