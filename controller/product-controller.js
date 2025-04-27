const fs = require('fs');  // we can use plain fs too but it will be good practice to use async /await
const path = require('path');

const product = require('../util/product.json');
const { error } = require('console');
const { json } = require('stream/consumers');
const readProductJson = path.join(__dirname, '../util/product.json')


//read file from system and send resp
exports.getProduct = (req, res) => {
    try {
        fs.readFile(readProductJson, 'utf-8', (error, data) => {
            if (data) {
                let jsonData = JSON.parse(data);
                res.status(200).json({
                    success: true,
                    data: jsonData
                })
            } else {

            }
        });

    } catch {
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }

}


exports.addProduct = (req, res) => {
    let data = req.body;

    try {
        let readDataFile = fs.readFileSync(readProductJson, 'utf8'); // read file 
        if (readDataFile) {
            let parseDataFile = JSON.parse(readDataFile); // parse form string to object
            let fetchOnlyProduct = parseDataFile

            fetchOnlyProduct.productDetails.push(data); // push data into array

            fs.writeFileSync(readProductJson, JSON.stringify(fetchOnlyProduct, null, 2), 'utf8'); // write data into files

            return res.status(200).json({
                success: true,
                message: "data saved"
            })

        } else {

        }
    } catch {
        res.status(500), json({
            success: false,
            message: "Internal server error"
        })
    }



}
