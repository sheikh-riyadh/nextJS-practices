import { getProducts } from "@/app/actions/products/getProducts";

const Product = async () => {
  const products = await getProducts();
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
