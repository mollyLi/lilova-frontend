import { Label } from '@/components/ui/label';
import { Input } from '../ui/input';

type PriceInputProps = {
  defaultValue?: number;
  label?: string;
  name?: string;
};

function PriceInput({ defaultValue, label = '販賣價格', name = 'price' }: PriceInputProps) {
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>
        {label}
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
