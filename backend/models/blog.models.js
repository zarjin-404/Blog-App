import mongoose from 'mongoose';

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    image: {
      type: Buffer,
      required: true,
      get: data => (data ? data.toString('base64') : null),
    },
  },
  { timestamps: true }
);

export default mongoose.model('blog', blogSchema);
