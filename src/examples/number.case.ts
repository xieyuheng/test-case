import { TestCase } from "../test-case"

export default class extends TestCase {
  // NOTE Method name startsWith "test" will be viewed as a test
  test_add() {
    this.assertEquals(1 + 1, 2)
  }

  "method name includes whitespace will be viewed as a test"() {
    this.assertNotEquals(1 + 1, 3)
  }
}
