import { fetchProducts } from '@/utils/actions';
import ProductList from '@/components/home/ProductList';

async function HomePage() {
  const products = await fetchProducts();
  return (
    <section>
      <ProductList products={products} />
    </section>
  );

};

export default HomePage;