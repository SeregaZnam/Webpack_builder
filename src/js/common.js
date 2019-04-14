import { dec, log } from './decorators.js';

class Example {
  @log('some tag')
  sum(a, b) {
    return a + b;
  }
}

const e = new Example();
e.sum(1, 2);