// cypress/integration/announcements_spec.js

describe("Announcements Component", () => {
  it("renders announcements fetched from the API", () => {
    // Mock the Axios call to respond with your sample data
    cy.intercept("GET", "http://localhost:3000/announcements/list", {
      fixture: "announcements.json", // Assuming you have a fixture file
    }).as("getAnnouncements");

    // Visit your application or the specific page where Announcements component is rendered
    cy.visit("http://localhost:3000"); // Update the URL as needed

    // Wait for the API call to complete
    cy.wait("@getAnnouncements");

    // Check if announcements are rendered
    mockResponseData.forEach((announcement) => {
      cy.contains(announcement.title).should("be.visible");
      cy.contains(announcement.content).should("be.visible");
    });
  });
});
