import { Label } from '@/components/ui/label';
import { Input } from '../ui/input';
import { Prisma } from '@prisma/client';

// const name = Prisma.PropertyScalarFieldEnum.price

type PriceInputProps = {
  defaultValue?: number;
};

function PriceInput({ defaultValue }: PriceInputProps) {
  const name = 'price';
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>
        價格
      </Label>
      <Input
        id={name}
        type='number'
        name={name}
        min={0}
        defaultValue={defaultValue}
        required
      />
    </div>
  );
}
export default PriceInput;
