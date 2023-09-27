import fs from 'fs';

const blogRoute = (req, res, next) => {

  const blog__data = JSON.parse(fs.readFileSync('blog__posts.json'))
  res.render('blog', { blog_posts: blog__data.blog_posts});
}

export default blogRoute