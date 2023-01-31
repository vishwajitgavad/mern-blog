const Blog = require("./../models/BlogModel")
exports.getAllBlogs = async (req, res) => {
    try {
        const result = await Blog.find()
        res.json({
            success: true,
            message: "All Blog Fetched",
            result
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`,
        })
    }
}
exports.addBlog = async (req, res) => {
    try {
        console.log(req.body);
        const result = await Blog.create(req.body)
        res.json({
            success: true,
            message: "Blog Created Successfuly",
            result
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`,
        })
    }
}
exports.removeBlog = async (req, res) => {
    try {
        const { blogId } = req.params
        await Blog.findByIdAndDelete(blogId)
        res.json({
            success: true,
            message: "Blog Removed Successfuly",
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`,
        })
    }
}
exports.editBlog = async (req, res) => {
    try {
        const { blogId } = req.params
        const result = await Blog.findByIdAndUpdate(blogId, req.body)
        res.json({
            success: true,
            message: "Blog Removed Successfuly",
            result
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`,
        })
    }
}