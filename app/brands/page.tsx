import { fetchBrands } from '@/utils/actions';
import Link from 'next/link';

async function BrandsListPage() {
    const brands = await fetchBrands();
    if (!brands) return null;
    return (
        <section>
            <h3>品牌瀏覽</h3>
            <p>字母列表</p>
            <p>Search box</p>
            <div className='grid grid-cols-3 gap-4 place-content-center mt-8'>
                {brands.map(item => {
                    return (
                        <Link href='/' key={item.id}>
                            <p>{item.name}</p>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default  BrandsListPage;

