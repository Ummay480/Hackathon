interface BlogPostProps {
    image: string;
    category: string;
    date: string;
    title: string;
    description: string;
    author: string;
  }
  
  const BlogPost: React.FC<BlogPostProps> = ({ image, category, date, title, description, author }) => {
    return (
      <div className="mb-8">
        <img src={image} alt={title} className="w-full h-64 object-cover rounded-lg" />
        <div className="mt-4">
          <p className="text-sm text-gray-500">
            <span>{author}</span> &bull; <span>{date}</span> &bull; <span>{category}</span>
          </p>
          <h3 className="text-xl font-medium text-gray-800 mt-2">{title}</h3>
          <p className="text-gray-600 mt-2">{description}</p>
          <a href="#" className="text-blue-500 hover:underline mt-4 block">
            Read more
          </a>
        </div>
      </div>
    );
  };
  
  export default BlogPost;
  