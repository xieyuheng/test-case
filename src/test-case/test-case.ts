import {
  assert,
  assertEquals,
  assertError,
  assertErrorAsync,
  assertNotEquals,
} from "../assertions"

export class TestCase {
  static instanceofTestCase = true

  assert = assert
  assertEquals = assertEquals
  assertNotEquals = assertNotEquals
  assertError = assertError
  assertErrorAsync = assertErrorAsync
}
