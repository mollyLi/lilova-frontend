import ProductCard from '../card/ProductCard';
import type { ProductCardProps } from '@/utils/types';

function ProductList({ products }: { products: ProductCardProps[] }) {
	return (
		<section className='mt-4 gap-4'>
			{products.map((product) => {
				return <ProductCard key={product.id} product={product} />;
			})}
		</section>
	);
}

export default ProductList;
