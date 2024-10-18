import { ConditionProps } from '@/utils/types';

export const conditions: ConditionProps[] = [
    {
        code: 'new_with_tag',
        label: '全新附吊牌',
    },
    {
        code: 'new_without_tag',
        label: '全新無吊牌',
    },
    {
        code: 'excellent_used_condition',
        label: '二手，狀況良好幾乎全新',
    },
    {
        code: 'good_used_condition',
        label: '二手，正常使用痕跡',
    },
    {
        code: 'play_condition',
        label: '二手，有明顯穿著痕跡',
    },
];

export const findByCode = (code: string) => {
    return conditions.find((item) => item.code === code);
};
  


