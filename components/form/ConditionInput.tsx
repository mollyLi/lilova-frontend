import { Label } from '@/components/ui/label';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { conditions } from '@/utils/conditions';

const name = 'condition';

function ConditionInput({ defaultValue }  : { defaultValue?: string }) {
  return (
    <div className='mb-2'>
      <Label htmlFor={name}>
        衣況
      </Label>
      <Select
        defaultValue={defaultValue || conditions[0].label}
        name={name}
        required
      >
        <SelectTrigger id={name}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {conditions.map((item) => {
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
export default ConditionInput;
