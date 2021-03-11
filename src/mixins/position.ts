export const position = (
    value = 'absolute',
    margin: number | string = 'auto',
    top: number | string = 0,
    right: number | string = top,
    bottom: number | string = top,
    left: number | string = right,
): string => `
    position: ${value};
    margin: ${margin};
    top: ${top};
    right: ${right};
    bottom: ${bottom};
    left: ${left};
`;