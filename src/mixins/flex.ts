const FLEX_DIRECTIONS = ['row', 'column', 'row-reverse', 'column-reverse'];

export const flex = (
    param1?: string,
    param2?: string,
    param3?: string,
): string => {
    // No params
    if (!param1) return 'display: flex;';

    // One param
    if (!param2) {
        return `
            display: flex;
            ${
    FLEX_DIRECTIONS.includes(param1)
        ? `
                flex-direction: ${param1};
            `
        : `
                justify-content: ${param1};
                align-items: ${param1};
            `
}
        `;
    }

    // Two params
    if (!param3) {
        return `
            display: flex;
            ${
    FLEX_DIRECTIONS.includes(param1)
        ? `
                flex-direction: ${param1};
                justify-content: ${param2};
                align-items: ${param2};
            `
        : `
                justify-content: ${param1};
                align-items: ${param2};
            `
}
        `;
    }

    // Three params
    return `
        display: flex;
        flex-direction: ${param1};
        justify-content: ${param2};
        align-items: ${param3};
    `;
};