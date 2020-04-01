# Publisher class

Provides essential pub-sub capabilities for its instances.

## Usage

In the terminal:
```

% npm install @lost-types/publisher

```

Then in the module:
```js

// JavaScript modules
import Publisher from '@lost-types/publisher';

// CommonJS
const Publisher = require('@lost-types/publisher');

// Implement "Hello world" of reactive programming:
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

// If you ever tried rxjs, this will be familiar:
const subscription = myCounter.subscribe({
  count: (value) => {
    console.log(`The count is: ${value}`);
  }
});

myCounter.increment(); // Logs: "The count is: 1"
myCounter.increment(); // Logs: "The count is: 2"

subscription.unsubscribe('count');

myCounter.increment(); // Logs nothing

console.log(myCounter.count); // 3

```
