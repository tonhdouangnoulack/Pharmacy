module.exports = app => {
    const controller = require("../controller/mycontroller.js");


    app.post("/login", controller.login);

    app.post("/register", controller.register);

    app.get("/user", controller.findAllUsers);

    app.post("/addproduct", controller.createProduct);

    app.get("/productlist", controller.productList);

    app.get("/productlist/:id", controller.productId);

    // // Retrieve a single Customer with customerId
    // app.get("/customers/:customerId", controller.findOne);
    //
    // // Update a Customer with customerId
    // app.put("/customers/:customerId", controller.update);
    //
    // // Delete a Customer with customerId
    // app.delete("/customers/:customerId", controller.delete);
    //
    // // Create a new Customer
    // app.delete("/customers", controller.deleteAll);
};