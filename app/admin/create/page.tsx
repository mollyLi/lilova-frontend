import FormInput from '@/components/form/FormInput';
import FormContainer from '@/components/form/FormContainer';
import { createProductAction } from '@/utils/actions';
import { SubmitButton } from '@/components/form/Buttons';
import PriceInput from '@/components/form/PriceInput';
// import CategoriesInput from '@/components/form/CategoriesInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import ImageInput from '@/components/form/ImageInput';

function CreateProductPage() {
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
            <PriceInput />
            {/* <CategoriesInput /> */}
            <TextAreaInput
                name='description'
                labelText='商品資訊'
            />
            <SubmitButton text='送出' className='mt-12' />
        </FormContainer>
      </div>
    </section>
  );
}
export default CreateProductPage;
