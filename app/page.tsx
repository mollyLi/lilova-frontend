import { fetchProducts } from '@/utils/actions';
import ProductList from '@/components/home/ProductList';

async function HomePage() {
  const products = await fetchProducts();
  if (!products || products.length === 0) return <div className='text-center my-8'>目前沒有商品上架。</div>
  return (
    <section>
      {/* @ts-ignore */}
      <ProductList products={products} />
    </section>
  );

};

export default HomePage;