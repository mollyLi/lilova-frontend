'use client';
import { useState } from 'react';
import { BrandProps } from '@/utils/types';
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
import DragAndDropUploader from '@/components/form/DragAndDropUploader';

function CreateProductForm({ brands } : { brands: BrandProps[] }) {
  // const maxFileCount = 8;

  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  // Handle files uploaded from the DragAndDropUploader
  const handleFilesUploaded = (files: File[]) => {
    setUploadedFiles(files);
  };

  return (
    <section>
      <FormContainer action={createProductAction}>
        <FormInput
            name='name'
            type='text'
            label='商品名稱'
            defaultValue=''
        />
        <DragAndDropUploader onFilesUploaded={handleFilesUploaded} />
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
        
     </section>
  );
}
export default CreateProductForm;
