export const log = (name) => (t, n, descriptor) => {
  const original = descriptor.value;
  if (typeof original === 'function') {
    descriptor.value = function(...args) {
      console.log(`Arguments for ${name}: ${args}`);
      try {
        const result = original.apply(this, args);
        console.log(`Result from ${name}: ${result}`);
        return result;
      } catch (e) {
        console.log(`Error from ${name}: ${e}`);
        throw e;
      }
    }
  }
  return descriptor;
};

export const dec = id => {
    console.log('evaluated', id);
    return (target, property, descriptor) => console.log('executed', id);
}