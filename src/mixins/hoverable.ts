export const hoverable = (
    hoverStyles: string,
    styles?: string
): string => `
    ${styles}
    &:hover {
        ${hoverStyles}
    }
`;