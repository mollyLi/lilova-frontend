import Image from 'next/image';
import Link from 'next/link';
import { ProductCardProps } from '@/utils/types';
import { formatCurrency } from '@/utils/format';

function ProductCard({ product }: { product: ProductCardProps }) {
  const { name, brand, image, price, size, id: productId } = product;
  return (
    <article className=''>
      <Link href={`/item/${productId}`}>
        <div className='relative h-[300px] mb-2 overflow-hidden rounded-md'>
          <Image
            src={image}
            fill
            sizes='(max-width:768px) 100vw, 50vw'
            alt={name}
            className='rounded-md object-cover transform group-hover:scale-110 transition-transform duration-500'
          />
        </div>
        <h3 className=''>{name}</h3>
        <p className='text-gray-500 text-sm'>{brand}</p>
        <p className='text-sm'>Size: {size}</p>
        <p className='font-semibold'>{formatCurrency(price)}</p>
      </Link>
    </article>
  );
}
export default ProductCard;
