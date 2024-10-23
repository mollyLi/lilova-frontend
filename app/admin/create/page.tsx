import CreateProductForm from '@/components/form/CreateProductForm';
import { fetchBrands } from '@/utils/actions';

async function CreateProductPage() {
  const brands = await fetchBrands();
  return (
    <section>
      <div className='border p-8 rounded'>
        <h2 className='text-2xl font-semibold mb-8 capitalize'>
            上架商品
        </h2>
        <CreateProductForm brands={brands} />
      </div>
    </section>
  );
}
export default CreateProductPage;
