import { gender, GenderProps } from '@/utils/gender';
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const name = 'gender';

function GenderInput({ defaultValue }: { defaultValue?: GenderProps["label"] }) {

  return (
    <div className='mb-2'>
      <Label htmlFor={name}>
        性別氣質分類
      </Label>
      <RadioGroup className='grid-cols-3' name={name} defaultValue={defaultValue || gender[0].code}>
        {gender.map(item => {
          return (
            <div key={item.code} className="flex items-center space-x-2">
              <RadioGroupItem value={item.code} id={item.code} />
              <Label className='cursor-pointer' htmlFor={item.code}>{item.label}</Label>
            </div>
          );
        })}
    </RadioGroup>
    </div>
  );
}
export default GenderInput;
