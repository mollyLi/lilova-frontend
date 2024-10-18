import Image from 'next/image';
import { fetchProductDetails } from '@/utils/actions';
import { redirect } from 'next/navigation';
import { formatCurrency } from '@/utils/format';
import { findGenderByCode } from '@/utils/gender';
import { findConditionByCode } from '@/utils/conditions';
import { findSizeByCode } from '@/utils/sizes';

async function  ProductDetailsPage({ params } : { params: {id: string }}) {
    const product = await fetchProductDetails(params.id);
    if (!product) redirect('/');
    return (
        <section>
            <div className='relative h-[230px] mb-2 overflow-hidden my-4'>
            <Image
                src={product.image}
                fill
                sizes='(max-width:768px) 100vw, 50vw'
                alt={product.name}
                className='rounded-lg object-cover transform group-hover:scale-110 transition-transform duration-500'
            />
            </div>
            <p className='text-gray-800'>{product.name}</p>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-bold'>{formatCurrency(product.price)}</p>
                <p className='text-xs text-gray-600 line-through'>{formatCurrency(product.origPrice)} 品牌賣價</p>
            </div>
            <p className='text-blue-600'>品牌 {product.brand.name}</p>
            <p>尺寸 {findSizeByCode(product.size)?.label}</p>
            <p>衣況 {findConditionByCode(product.condition)?.label}</p>
            <p>說明 {product.description}</p>
            <p>購入來源 </p>
            <p className='text-sm font-semibold'>類別 </p>
            <div className='flex gap-2 text-sm text-gray-500'>
                <span>{findGenderByCode(product.gender)?.label}</span>
                <span>|</span>
                <span>髮飾及飾品 (Accessories)</span>
            </div>
            <p>由 {product.profile.username} 上架 </p>
            <hr />
            <h2>你可能也喜歡</h2>
        </section>
    );
};

export default  ProductDetailsPage;