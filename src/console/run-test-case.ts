import Path from "path"
import { TestCase } from "../test-case"

export async function runTestCase(path: string): Promise<void> {
  const testModule = require(Path.resolve(path))

  if (!testModule.default?.instanceofTestCase) return

  const testCase = new testModule.default()

  const names = Object.getOwnPropertyNames(Object.getPrototypeOf(testCase))

  for (const name of names) {
    if (name.startsWith("test")) {
      console.log({ path, name })
      const action = testCase[name].bind(testCase)
      action()
    }
  }
}

// function isSubclassOf(x: any, y: any): boolean {
//   return x.prototype instanceof y
// }
