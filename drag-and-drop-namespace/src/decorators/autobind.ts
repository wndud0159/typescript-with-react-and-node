namespace App {
  // autobind decorator
  export function Authbind(_: any, _2: string, descriptor: PropertyDescriptor) {
    console.log(descriptor);
    const originalMethod = descriptor.value;
    const abjDescriptor: PropertyDescriptor = {
      configurable: true,
      get() {
        const boundFn = originalMethod.bind(this);
        return boundFn;
      },
    };
    return abjDescriptor;
  }
}
