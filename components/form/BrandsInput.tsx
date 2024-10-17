import { Label } from '@/components/ui/label';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { BrandProps } from '@/utils/types';

const name = 'brandId';

function BrandsInput({ brands } : { brands: BrandProps[] }) {
  return (
    <div className='mb-2'>
      <Label htmlFor={name}>
        品牌
      </Label>
      <Select
        defaultValue={brands[0].name}
        name={name}
        required
      >
        <SelectTrigger id={name}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {brands.map((item) => {
            return (
              <SelectItem key={item.id} value={item.id}>
                {item.name}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
}
export default BrandsInput;
