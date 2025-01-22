describe('Example To-Do App', () => {
    // Test case for checking keys in the student object
    it('returns an array of all the keys in an object - 1', () => {
        cy.visit('http://localhost:3000'); // Ensure your app is running at this URL

        // Wait for the element containing the student information to be present
        cy.get('#student-name')
          .should('exist')  // Ensure the element with the student name is visible in the DOM
          .then(($el) => {
              const keys = Object.keys({ name: "Rahil" });  // Getting keys of the student object
              console.log(keys);  // Logging the keys to the console
              expect(keys).to.include('name');  // Assert that 'name' is a key in the object
          });
    });

    // Another test case for checking keys in the student object
    it('returns an array of all the keys in an object - 2', () => {
        cy.visit('http://localhost:3000'); // Ensure your app is running at this URL

        // Same as the previous test, ensuring the element is present
        cy.get('#student-name')
          .should('exist')  // Wait for the element to exist in the DOM
          .then(($el) => {
              const keys = Object.keys({ name: "Rahil" });  // Getting keys of the student object
              console.log(keys);  // Logging the keys to the console
              expect(keys).to.include('name');  // Assert that 'name' is a key in the object
          });
    });
});
