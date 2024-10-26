import { CodeLabelProps } from '@/utils/types';

export const sourceType = [
    {
        code: 'dealer',
        label: '經銷商/選品店'
    }
]

export const sources: CodeLabelProps[] = [
    {
        code: 'general',
        label: 'Little Poetry 小詩洋行',
    },
    {
        code: '0_3m',
        label: '0 - 3m'
    },
    {
        code: '3_6m',
        label: '3 - 6m'
    },
    {
        code: '6_12m',
        label: '6 - 12m'
    },
    {
        code: '12_18m_80',
        label: '12 - 18m / 80cm'
    },
    {
        code: '18_25m',
        label: '18 - 24m'
    },
    {
        code: '2y_90',
        label: '2y / 90cm'
    },
    {
        code: '3y_100',
        label: '3y / 100cm'
    },
    {
        code: '4y_110',
        label: '4y / 110cm'
    },
    {
        code: '5y',
        label: '5y'
    },
    {
        code: '6y_120',
        label: '6y / 120cm'
    },
    {
        code: '7y',
        label: '7y'
    },
    {
        code: '8y_130',
        label: '8y / 130cm'
    },
    {
        code: '9y',
        label: '9y'
    },
    {
        code: '10y_140',
        label: '10y / 140cm'
    },
    {
        code: '11y',
        label: '11y'
    },
    {
        code: '12y_150',
        label: '12y / 150cm'
    },
    {
        code: '13y',
        label: '13y'
    },
    {
        code: '14y_160',
        label: '14y / 160cm'
    },
];

export const findSizeByCode = (code: string) => {
    return sources.find((item) => item.code === code);
};
  