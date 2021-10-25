
const sql = require("./db.js");
const bcrypt = require('bcrypt');
// constructor
const Product = function(info) {
    this.name = info.name;
    this.type = info.type;
    this.unit = info.unit;
    this.brand = info.brand;
    this.cost = info.cost;
    this.price = info.price;
    this.stock = info.stock;
    this.order = info.order;
    this.detail = info.detail;
    this.code = info.code;
    this.image = info.image;
    this.status = info.status;
};

Product.create = async (data, result) => {
    console.log(data)
    sql.query(`
                INSERT INTO product (
                                     pro_name,
                                     pro_type,
                                     pro_unit,
                                     pro_cost,
                                     pro_brand,
                                     pro_price,
                                     pro_stock,
                                     pro_order,
                                     pro_code,
                                     pro_detail,
                                     pro_img,
                                     pro_status)
                VALUES (?,?,?,?,?,?,?,?,?,?,?,?)

        `,
        [data.name,data.type,data.unit,data.cost,data.brand,data.price,data.stock,
            data.order,data.code,data.detail,data.image,data.status],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            if (res.affectedRows == 0) {
                // not found Customer with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("create product: ", {  ...data });
            result(null, {  ...data });
        });
};

Product.getAll = result => {
    sql.query("SELECT * FROM product", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("customers: ", res);
        result(null, res);
    });
};

Product.getProductId = (id,result) => {
    console.log({id})
    sql.query(`SELECT * FROM product where barcode =${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("customers: ", res);
        result(null, res);
    });
};

module.exports = Product;
