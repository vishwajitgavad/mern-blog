const { getAllBlogs, addBlog, removeBlog, editBlog } = require("../controllers/blogController")

const router = require("express").Router()

router
    .get("/", getAllBlogs)
    .post("/add", addBlog)
    .delete("/:blogId", removeBlog)
    .put("/:blogId", editBlog)

module.exports = router