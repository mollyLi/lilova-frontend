import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

function ImageInput() {
  const name = 'image';
  return (
    <div className='mb-2'>
      <Label htmlFor={name}>
        商品圖片
      </Label>
      <Input
        id={name}
        name={name}
        type='file'
        required
        accept='.heic,.heif,image/*'
        className='max-w-xs'
      />
    </div>
  );
}
export default ImageInput;
