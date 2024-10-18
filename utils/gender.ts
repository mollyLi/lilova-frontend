export type GenderProps = {
    code: string,
    label: string,
}

export const gender: GenderProps[] = [
    {
      code: 'girl',
      label: '女孩'
    },
    {
      code: 'boy',
      label: '男孩'
    },
    {
      code: 'neutral',
      label: '中性'
    },
];

export const findGenderByCode = (code: string) => {
    return gender.find((item) => item.code === code);
};
  
