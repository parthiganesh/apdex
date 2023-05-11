# Apdex Calculator

Application performance index (Apdex) calculator measures user satisfaction based on response time.

[![npm downloads](https://img.shields.io/npm/dt/apdex.svg)](https://www.npmjs.com/package/apdex)
[![GitHub issues](https://img.shields.io/github/issues/parthiganesh/apdex)](https://github.com/parthiganesh/apdex/issues)

## Installation

You can install the package using npm:

```
npm install apdex
```

## Usage

```typescript
import {Apdex} from 'apdex';

const app = new Apdex(1000); // set T to 1000ms
app.add(500); // add a response time of 500ms
app.add(2000); // add a response time of 2000ms
console.log(app.apdex); // 0.5
```

## API

### `new Apdex(T, limit)`

Creates a new instance of the Apdex calculator. `T` is the threshold response time in milliseconds, and `limit` is an optional parameter that limits the number of samples kept in the calculator.

### `add(value, error)`

Adds a new sample to the calculator. `value` is the response time in milliseconds, and `error` is an optional boolean flag indicating whether the sample was an error.

### `flush()`

Resets the calculator and removes all samples.

### `apdex`

Returns the current Apdex score as a number between 0 and 1.

## References
- Apdex Wikipedia: https://en.wikipedia.org/wiki/Apdex
- Apdex Wedsite: https://www.apdex.org
- APdex Specifications: https://www.apdex.org/wp-content/uploads/2020/09/ApdexTechnicalSpecificationV11_000.pdf