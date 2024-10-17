import ProductCard from '../card/ProductCard';
import type { ProductCardProps } from '@/utils/types';

function ProductList({ products }: { products: ProductCardProps[] }) {
	return (
		<section className='grid grid-cols-2 mt-4 gap-3'>
			{products.map((product) => {
				return <ProductCard key={product.id} product={product} />;
			})}
		</section>
	);
}

export default ProductList;
