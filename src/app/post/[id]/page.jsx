const getSinglePost = async (post_id) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post_id}`,
  );
  const post = res.json();
  return post;
};
const SinglePostPage = async ({ params }) => {
  const { id } = await params;
  const post = await getSinglePost(id);

  return (
    <div className="flex flex-col items-center justify-center m-10">
      <div className="border rounded-2xl relative p-5">
        <h1 className="text-2xl font-bold">{post?.title}</h1>
        <p>{post?.body}</p>
        <span className="absolute -top-3 w-7 h-7 rounded-full bg-green-500 flex flex-col items-center justify-center">
          {post?.id}
        </span>
      </div>
    </div>
  );
};

export default SinglePostPage;
