import ProductCard from "./ProductCard";

type Product = {
  id: number;
  name: string;
  price: string;
};

type Props = {
  products: Product[];
};

export default function ProductGrid({ products }: Props) {
  return (
    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
}