// Decorators
export const autobind = (
  _: any,
  _2: string,
  descriptor: PropertyDescriptor,
) => {
  const orgMethod = descriptor.value

  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = orgMethod.bind(this)
      return boundFn
    },
  }

  return adjDescriptor
}
