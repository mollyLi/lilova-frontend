import { Label } from '@/components/ui/label';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { sizes } from '@/utils/sizes';

const name = 'size';

function SizeInput({ defaultValue }  : { defaultValue?: string }) {
  return (
    <div className='mb-2'>
      <Label htmlFor={name}>
        尺寸
      </Label>
      <Select
        defaultValue={defaultValue || sizes[0].label}
        name={name}
        required
      >
        <SelectTrigger id={name}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {sizes.map((item) => {
            return (
              <SelectItem key={item.code} value={item.code}>
                {item.label}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
}
export default SizeInput;
