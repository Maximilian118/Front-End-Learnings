export const autobind = (_, _2, descriptor) => {
    const orgMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        get() {
            const boundFn = orgMethod.bind(this);
            return boundFn;
        },
    };
    return adjDescriptor;
};
//# sourceMappingURL=decorators.js.map