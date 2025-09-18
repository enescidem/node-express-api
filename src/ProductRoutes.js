const express = require("express")
const router = express.Router()

const {getAll, addData, getById, updateById, deleteById} = require("./ProductController")

router.route("/").get(getAll).post(addData)
router.route("/:id").get(getById).put(updateById).delete(deleteById)

module.exports = {
    routes: router
}
