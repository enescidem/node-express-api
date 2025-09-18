const {getConnection} = require("./dbConfig")

const getAll = async(req, res) => {
    try {
        const connection = await getConnection()
        const sqlQuery = "CALL getAllProductsSP ()"
        const response = await connection.query(sqlQuery)
        const result = response[0][0].result
        res.send(result)
    } catch (error) {
        console.log("Server Error", error)
    }
}

const addData = async(req, res) => {
        try {
        let { productName, price } = req.body
        const connection = await getConnection()
        const sqlQuery = "CALL addProductSP (?,?)"
        const response = await connection.query(sqlQuery, [productName, price])
        const result = response[0][0].result
        res.send(result)
    } catch (error) {
        console.log("Server Error", error)
    }
}

const getById = async(req, res) => {
        try {
        let id = req.params.id
        const connection = await getConnection()
        const sqlQuery = "CALL getProductByIdSP (?)"
        const response = await connection.query(sqlQuery, [id])
        
        if(response[0] && response[0][0]) {
            const result = response[0][0].result
            res.send(result)
        }else{
            res.status(404).send({message: "No product found"})
        }

    } catch (error) {
        console.log("Server Error", error)
    }
}

const updateById = async() => {
    try {
        let id = req.params.id
        let { productName, price } = req.body
        const connection = await getConnection()
        const sqlQuery = "CALL updateProductByIdSP (?,?,?)"
        const response = await connection.query(sqlQuery, [productName, price, id])
        const result = response[0][0].result
        res.send(result)
    } catch (error) {
        console.log("Server Error", error)
    }
}

const deleteById = async() => {}



module.exports = {getAll, addData, getById, updateById, deleteById}