export function Authbind(_, _2, descriptor) {
    console.log(descriptor);
    const originalMethod = descriptor.value;
    const abjDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    return abjDescriptor;
}
//# sourceMappingURL=autobind.js.map