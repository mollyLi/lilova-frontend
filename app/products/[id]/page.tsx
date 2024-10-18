import Image from 'next/image';
import { fetchProductDetails, fetchBrandById } from '@/utils/actions';
import { redirect } from 'next/navigation';

async function  ProductDetailsPage({ params } : { params: {id: string }}) {
    const product = await fetchProductDetails(params.id);
    if (!product) redirect('/');
    const brand = await fetchBrandById({ brandId: product.brandId })
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
            <p className='text-xl font-bold'>{product.name}</p>
            <p className='text-blue-600'>品牌 {brand?.name}</p>
            <p>尺寸 {product.size}</p>
            <p>衣況 {product.condition}</p>
            <p>說明 {product.description}</p>
            <p>購入來源 </p>
            <p>分類 </p>
            <p>由 ning_closet 上架 </p>
            <hr />
            <h2>你可能也喜歡</h2>
        </section>
    );
};

export default  ProductDetailsPage;