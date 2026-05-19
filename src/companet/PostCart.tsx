
interface PostCartProps {
  post: {
    title: string;
    body: string;
  };
}
function PostCart(props: PostCartProps) {
    const {post} = props;
    
  return (
    <div>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
    </div>
  )
}

export default PostCart

// destructuring