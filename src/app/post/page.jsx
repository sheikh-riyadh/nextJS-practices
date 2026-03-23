import Link from "next/link";
import Button from "../components/Button";

const getPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

const PostPage = async () => {
  const posts = await getPost();
  return (
    <div className="grid grid-cols-5 gap-5 m-10">
      {posts.map((post) => (
        <div
          className="border p-3 rounded-xl flex flex-col relative"
          key={post?.id}
        >
          <span className="absolute -top-3 bg-green-400 rounded-full w-6 h-6 flex items-center justify-center">
            {post?.id}
          </span>
          <span>{post?.titme}</span>
          <span>{post?.body}</span>
          <Link href={`post/${post?.id}`}>
            <Button>View</Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostPage;
