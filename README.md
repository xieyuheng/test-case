# Test Case

Minimalist Test Framework for JavaScript/TypeScript.

## Installation

```
npm install @xieyuheng/test-case
```

## Usage

### Command line tool

The command line program is called `test-case`.

```
test-case run lib/examples/number.case.js
```

## Example

```js
import { TestCase } from "@xieyuheng/test-case"

export default class extends TestCase {
  // NOTE Method name startsWith "test" will be viewed as a test
  test_add() {
    this.assertEquals(1 + 1, 2)
    this.assertNotEquals(1 + 1, 3)
  }

  "method name includes whitespace will be viewed as a test"() {
    this.assert(true)
  }
}
```

Please see [src/examples](src/examples) for more examples, including:

- [src/examples/assert-equals.case.ts](src/examples/assert-equals.case.ts)
- [src/examples/assert-error.case.ts](src/examples/assert-error.case.ts)

### Subclassing

- Example subclassing: [lexer-test-case.ts](https://github.com/cicada-lang/sexp/blob/master/src/lexer/lexer-test-case.ts)
- Example test case class: [lexer.case.ts](https://github.com/cicada-lang/sexp/blob/master/src/lexer/lexer.case.ts)

## Development

```
npm install    // Install dependencies
npm run build  // Compile `src/` to `lib/`
npm run watch  // Watch the compilation
npm run test   // Run test
```

## Contributions

> Be polite, do not bring negative emotion to others.

- [TODO.md](TODO.md)
- [STYLE-GUIDE.md](STYLE-GUIDE.md)
- [CODE-OF-CONDUCT.md](CODE-OF-CONDUCT.md)
- When contributing, add yourself to [AUTHORS](AUTHORS)

## License

- [GPLv3](LICENSE)
