import { fetchProductDetails } from '@/utils/actions';
import { redirect } from 'next/navigation';

async function  ProductDetailsPage({ params } : { params: {id: string }}) {
    const product = await fetchProductDetails(params.id);
    if (!product) redirect('/');
    return (
        <section>
            <h2>image box</h2>
            <p>{product.name}</p>
            <p>品牌 {product.brandId}</p>
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