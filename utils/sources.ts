import { CodeLabelProps } from '@/utils/types';

export const sources: CodeLabelProps[] = [
    {
        code: 'dealer',
        label: '經銷商/選品店',
    },
    {
        code: 'website',
        label: '品牌官網'
    },
    {
        code: 'second_hand',
        label: '二手購入'
    },
    {
        code: 'unknown',
        label: '不可考'
    }
];

export const findSourceByCode = (code: string) => {
    return sources.find((item) => item.code === code);
};
  