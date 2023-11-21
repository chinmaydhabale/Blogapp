const blogModel = require('../Models/blogmodel');





//GET- All blogs
exports.getAllBlogsController = async (req, res) => {
    try {
        const blog = await blogModel.find({});

        if (!blog) {
            return res.status(200).send({
                success: false,
                massage: 'No Blogs found'
            })
        }

        return res.status(200).send({
            BlogCount: blog.length,
            success: true,
            massage: 'All Blogs lists',
            blog
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            massage: 'error while get blogs'
        })
    }
}




//creat blog
exports.createBlogController = async (req, res) => {
    try {
        const { title, description, image } = req.body;
        if (!title || !description || !image) {
            return res.status(400).send({
                success: false,
                massage: 'Please Provide All Feilds'
            })
        }

        const newBlog = new blogModel({ title, description, image })
        await newBlog.save()

        return res.status(201).send({
            success: true,
            massage: 'Blog created',
            newBlog
        })

    } catch (error) {
        console.log(error)
        return res.status(400).send({
            success: false,
            massage: 'Error while creating blog',
            error
        })
    }
}




//update blog
exports.updateBlogController = async (req, res) => {
    const { title, description, image } = req.body;

    try {
        const updatedBlog = await blogModel.findByIdAndUpdate(
            req.params.id,
            { title, description, image },
            { new: true, runValidators: true }
        );

        if (!updatedBlog) {
            return res.status(404).json({ error: 'Blog not found' });
        }

        return res.status(200).json(updatedBlog);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

//single blog
exports.getBlogByIdController = async (req, res) => {
    try {

    } catch (error) {

    }
}

//Delete blog
exports.deleteBlogController = async (req, res) => {
    try {

    } catch (error) {

    }
}



// return res.status().send({
//     success: ,
//     massage: ''
// })