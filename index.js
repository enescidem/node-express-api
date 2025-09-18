const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const productRoutes = require("./src/ProductRoutes")

const port = process.env.SERVER_PORT

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/products",productRoutes.routes)

app.listen(port, () => {
    console.log(`The server is running on port ${port}`)
})