import { TestCase } from "../test-case"

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
