import FormInput from '@/components/form/FormInput';
import FormContainer from '@/components/form/FormContainer';
import { createProductAction } from '@/utils/actions';
import { SubmitButton } from '@/components/form/Buttons';
import PriceInput from '@/components/form/PriceInput';
import BrandsInput from '@/components/form/BrandsInput';
import SizeInput from '@/components/form/SizeInput';
import ConditionInput from '@/components/form/ConditionInput';
import GenderInput from '@/components/form/GenderInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import ImageInput from '@/components/form/ImageInput';
import { fetchBrands } from '@/utils/actions';

async function CreateProductPage() {
  const brands = await fetchBrands();
  return (
    <section>
      <div className='border p-8 rounded'>
        <h2 className='text-2xl font-semibold mb-8 capitalize'>
            上架商品
        </h2>
        <FormContainer action={createProductAction}>
            <FormInput
                name='name'
                type='text'
                label='商品名稱'
                defaultValue=''
            />
            <ImageInput />
            <PriceInput label='品牌賣價' name='origPrice' />
            <PriceInput />
            <BrandsInput brands={brands} />
            <SizeInput />
            <ConditionInput />
            <GenderInput />
            <TextAreaInput
                name='description'
                labelText='說明'
            />
            <SubmitButton text='送出' className='mt-12' />
        </FormContainer>
      </div>
    </section>
  );
}
export default CreateProductPage;
