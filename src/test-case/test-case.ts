import {
  assert,
  assertEquals,
  assertNotEquals,
  assertError,
  assertErrorAsync,
} from "../ut/assertions"

export class TestCase {
  static instanceofTestCase = true

  assert = assert
  assertEquals = assertEquals
  assertNotEquals = assertNotEquals
  assertError = assertError
  assertErrorAsync = assertErrorAsync
}
