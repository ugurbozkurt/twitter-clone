import Post from "../../../components/post";
import { posts } from "../../../mock/posts";
export default function ForYou() {
  return(
  <div>
    {posts.map((post,idx) => (
      <Post post={post} key={idx} />
    ))}
  
  </div>
  )
}
