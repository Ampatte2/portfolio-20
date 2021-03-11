import theme from '../globals/Theme';

export interface TransitionOptionType {
    duration?: string | number;
    prop: string;
}

export const transition = (
    items: (TransitionOptionType | string)[],
    duration: string | number = theme.speed.normal,
): string =>
    `transition: ${items
        .reduce<string>((acc, item: string | TransitionOptionType): string => {
            const d = typeof item === 'string' ? duration : item.duration;
            const i = `${typeof item === 'string' ? item : item.prop} ${
                d + (typeof d === 'number' ? 'ms' : '')
            }`;
            return `${acc}, ${i} cubic-bezier(0.4, 0.0, 0.2, 1)`;
        }, '')
        .slice(2)};`;