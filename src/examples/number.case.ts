import { TestCase } from "../test-case"

export default class extends TestCase {
  ["test add"]() {
    this.assertEquals(1 + 1, 2)
  }

  ["test mul"]() {
    this.assertEquals(3 * 3, 9)
  }
}
