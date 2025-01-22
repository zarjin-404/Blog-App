import blogModels from '../models/blog.models.js';

const createBlog = async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const blog = await blogModels.create({
      title,
      description,
      image: req.file.buffer,
    });

    res.status(201).json({ message: 'Blog created successfully', blog });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBlog = async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await blogModels.findById(id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    await blogModels.findByIdAndDelete(id);
    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogModels.find();
    res.status(200).json({ blogs });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createBlog, deleteBlog, getAllBlogs };
