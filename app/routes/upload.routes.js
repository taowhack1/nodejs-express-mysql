module.exports = app => {
    const uploads = require("../controllers/upload.controller.js");

    // Create a new Customer
    // app.post("/customers", customers.create);

    // Retrieve all Customers
    app.get("/uploads", uploads.findAll);

    // // Retrieve a single Customer with customerId
    // app.get("/customers/:customerId", customers.findOne);

    // // Update a Customer with customerId
    // app.put("/customers/:customerId", customers.update);

    // // Delete a Customer with customerId
    // app.delete("/customers/:customerId", customers.delete);

    // // Create a new Customer
    // app.delete("/customers", customers.deleteAll);
};
