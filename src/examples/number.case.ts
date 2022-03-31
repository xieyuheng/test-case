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

  "use `assertError` to assert an error is thrown"() {
    this.assertError(() => {
      throw new Error()
    })

    this.assertError(() => {
      this.assertError(() => {
        return
      })
    })

    this.assertError(() => {
      this.assertError(() => {
        throw "not instance of error"
      })
    })
  }

  "if `assertError` success, it returns the error"() {
    const error = this.assertError(() => {
      throw new Error()
    })

    this.assert(error instanceof Error)
  }

  async "use `assertErrorAsync` to assert an error is thrown in async function"() {
    this.assertErrorAsync(async () => {
      throw new Error()
    })

    this.assertErrorAsync(async () => {
      await this.assertErrorAsync(async () => {
        return
      })
    })

    this.assertErrorAsync(async () => {
      await this.assertErrorAsync(async () => {
        throw "not instance of error"
      })
    })
  }

  async "if `assertErrorAsync` success, it returns the error"() {
    const error = await this.assertErrorAsync(async () => {
      throw new Error()
    })

    this.assert(error instanceof Error)
  }
}
