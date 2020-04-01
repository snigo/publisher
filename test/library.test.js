import Publisher from '../src/publisher';

test('creates Publisher instance', () => {
  class Counter extends Publisher {
    constructor() {
      super();
      this.count = 0;
    }

    increment() {
      this.set('count', this.count + 1);
    }
  }

  const myCounter = new Counter();

  expect('subscribe' in myCounter).toBe(true);
});
