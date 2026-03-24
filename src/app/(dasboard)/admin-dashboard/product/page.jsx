const Product = async () => {
  const res = await fetch(`http://localhost:3000/api/items`, {
    cache: "force-cache",
  });
  const products = await res.json();

  return (
    <div className="grid grid-cols-5 gap-5 my-10 over">
      {products?.map((product) => (
        <div
          className="bg-green-400 rounded-2xl overflow-hidden p-2"
          key={product?._id}
        >
          <div>
            <h2>{product?.name}</h2>
            <p>{product?.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
