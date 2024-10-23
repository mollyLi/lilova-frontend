import Image from 'next/image';
import Link from 'next/link';
import { ProductCardProps } from '@/utils/types';
import { formatCurrency } from '@/utils/format';
import { findSizeByCode } from '@/utils/sizes';

function ProductCard({ product }: { product: ProductCardProps }) {
  const { name, image, images = [], price, size, id: productId } = product;
  return (
    <article className='mb-2 rounded-lg bg-gray-50'>
      <Link href={`/products/${productId}`}>
        <div className='relative h-[230px] mb-2 overflow-hidden'>
          <Image
            src={image || images[0]}
            fill
            sizes='(max-width:768px) 100vw, 50vw'
            alt={name}
            className='rounded-t-lg object-cover transform group-hover:scale-110 transition-transform duration-500'
          />
        </div>
        <div className='p-2'>
          <h3 className='text-sm'>{name}</h3>
          <p className='text-sm'>尺寸: {findSizeByCode(size)?.label}</p>
          <p className='font-semibold'>{formatCurrency(price)}</p>
        </div>
      </Link>
    </article>
  );
}
export default ProductCard;
