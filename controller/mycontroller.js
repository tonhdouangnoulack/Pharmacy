const User = require("../model/User.js");
const Product = require("../model/Product.js");
exports.login = (req, res) => {

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    const user = new User({
        username: req.body.username,
        password: req.body.password,

    });

    // Save Customer in the database
    User.authenticate(user, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "username or password incorrect."
            });
        else res.send(data);
    });
};

exports.register = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    User.createUser(user, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Customer."
            });
        else res.send(data);
    });
};

// Retrieve all Customers from the database.
exports.findAllUsers = (req, res) => {
    User.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
};

exports.createProduct = async (req, res) =>{
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const data = new Product({
        name: req.body.name,
        type: req.body.type,
        unit: req.body.unit,
        cost: req.body.cost,
        brand: req.body.brand,
        price: req.body.price,
        stock: req.body.stock,
        order: req.body.order,
        code: req.body.code,
        detail: req.body.detail,
        image: req.body.image,
        status: req.body.status

    });

    Product.create(data,(err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "create Product"
            });
        else res.send(data);
    });
}

exports.productList = (req, res) => {
    Product.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
};

exports.productId = (req, res) =>{
    let id = req.params.id
    Product.getProductId(id,(err,data)=>{
        if (err)
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while retrieving customers."
                    });
                else res.send(data);
    });
    // Product.getProductId((err, data) => {
    //     if (err)
    //         res.status(500).send({
    //             message:
    //                 err.message || "Some error occurred while retrieving customers."
    //         });
    //     else res.send(data);
    // });
}


// // Find a single Customer with a customerId
// exports.findOne = (req, res) => {
//     Model.findById(req.params.customerId, (err, data) => {
//         if (err) {
//             if (err.kind === "not_found") {
//                 res.status(404).send({
//                     message: `Not found Customer with id ${req.params.customerId}.`
//                 });
//             } else {
//                 res.status(500).send({
//                     message: "Error retrieving Customer with id " + req.params.customerId
//                 });
//             }
//         } else res.send(data);
//     });
// };
//
// // Update a Customer identified by the customerId in the request
// exports.update = (req, res) => {
//     // Validate Request
//     if (!req.body) {
//         res.status(400).send({
//             message: "Content can not be empty!"
//         });
//     }
//
//     console.log(req.body);
//
//     Model.updateById(
//         req.params.customerId,
//         new Customer(req.body),
//         (err, data) => {
//             if (err) {
//                 if (err.kind === "not_found") {
//                     res.status(404).send({
//                         message: `Not found Customer with id ${req.params.customerId}.`
//                     });
//                 } else {
//                     res.status(500).send({
//                         message: "Error updating Customer with id " + req.params.customerId
//                     });
//                 }
//             } else res.send(data);
//         }
//     );
// };
//
// // Delete a Customer with the specified customerId in the request
// exports.delete = (req, res) => {
//     Model.remove(req.params.customerId, (err, data) => {
//         if (err) {
//             if (err.kind === "not_found") {
//                 res.status(404).send({
//                     message: `Not found Customer with id ${req.params.customerId}.`
//                 });
//             } else {
//                 res.status(500).send({
//                     message: "Could not delete Customer with id " + req.params.customerId
//                 });
//             }
//         } else res.send({ message: `Customer was deleted successfully!` });
//     });
// };
//
// // Delete all Customers from the database.
// exports.deleteAll = (req, res) => {
//     Model.removeAll((err, data) => {
//         if (err)
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while removing all customers."
//             });
//         else res.send({ message: `All Customers were deleted successfully!` });
//     });
// };