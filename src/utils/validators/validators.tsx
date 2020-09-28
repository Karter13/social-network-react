export const required = (value: string) => {
    if (value) return undefined;
    return 'Field is required';
};

export const maxLengthCreator = (maxLangth: number) => (value: string) => {
    if (value.length > maxLangth) return `Max length ${maxLangth} symbols`;
    return undefined;
};
