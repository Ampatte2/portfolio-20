interface ITransformationType {
    transformation : string;
    value: string;
}

const transformationReducer = (accumulator: string, current: ITransformationType) => {
    const transformation = `${current.transformation}(${current.value}) `;
    return accumulator += transformation;
};

export const transform = (
    transformations: ITransformationType[]
): string => {
    const transformTypesToCss = transformations.reduce<string>(transformationReducer, '');
    return `
        transform: ${transformTypesToCss};
    `;
};