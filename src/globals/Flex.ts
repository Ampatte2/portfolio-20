
export const flex = (
    direction?: string
): string =>{
    if(!direction){
        return 'display: flex';
    }else{
        return `
            display: flex;
            justify-content: ${direction};
            align-items: ${direction};
        `
    }
}